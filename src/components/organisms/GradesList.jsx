import { useState } from "react";
import { useStudentData, useUpdateGradeMutation } from "../../hooks/useApiData";
import StudentListHeader from "../molecules/StudentListHeader";
import {
  DivContainerCenter,
  DivContainerEnd,
  DivContainerModal,
} from "../atoms/DivContainer";
import ErrorPage from "../atoms/ErrorPage";
import Loading from "../atoms/Loading";
import { Check, ChevronsLeft, LogOut, SquarePen, X } from "lucide-react";
import { toast } from "sonner";
import { hoverBgFx, scaleFx } from "../../utils/styles";

const GradesList = ({
  idForUpdate,
  isUpdate,
  isStudentDash = false,
  studentId,
  setIsProfile,
}) => {
  const finalId = idForUpdate || studentId;
  const { student, isStudentLoading, isStudentError } = useStudentData(finalId);
  const { updateGradeMethodAsync, isUpdatingGrade } = useUpdateGradeMutation();

  const [editingId, setEditingId] = useState(null);
  const [newScore, setNewScore] = useState("");

  const handleStartEdit = (subject) => {
    setEditingId(subject.enrollmentId);
    setNewScore(subject.score);
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewScore("");
  };

  const handleConfirm = async (enrollmentId) => {
    try {
      const payload = {
        enrollmentId,
        score: parseFloat(newScore),
      };

      await updateGradeMethodAsync(payload);

      setEditingId(null);
      setNewScore("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  if (isStudentLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loading />
      </div>
    );
  }

  if (isStudentError) {
    return (
      <div className="flex items-center justify-center h-full">
        <ErrorPage />
      </div>
    );
  }

  const tableStyle = "border-r border-mist-800 mr-2 pr-2";

  return (
    <DivContainerCenter className="h-full justify-start">
      {isStudentDash && (
        <>
          <DivContainerCenter className="flex-row mb-2">
            <DivContainerModal
              onClick={() => {
                setIsProfile(false);
              }}
              className={`border border-rose-800 bg-rose-600/10 text-responsive-xs py-1 px-0 mr-2 flex-1 ${hoverBgFx("rose-500")}`}
            >
              <p className="text-rose-400 flex items-center justify-center gap-1">
                <LogOut className="size-3 scale-x-[-1] hidden sm:flex" /> Cerrar
                sesión
              </p>
            </DivContainerModal>
            <DivContainerModal className="border border-mist-700 text-responsive-xs p-1 flex-2 md:flex-3">
              <p className="text-mist-200">Tabla de notas</p>
            </DivContainerModal>
          </DivContainerCenter>
        </>
      )}

      <div
        className={`w-full sticky top-15 z-40
        ${isUpdate && "pb-2"}
        `}
      >
        <StudentListHeader
          student={student}
          showButton={false}
          isUpdate={isUpdate}
          isStudentDash={isStudentDash}
        />
      </div>

      <DivContainerCenter
        className={`px-1 overflow-x-auto w-full
        ${isStudentDash && "mt-2"}
        `}
      >
        <table className="w-full">
          <thead>
            <tr className="text-emerald-600 border-y border-mist-800 text-responsive-xs">
              <th className="text-left py-1">
                <p className={`${tableStyle}`}>Materia</p>{" "}
              </th>
              {isStudentDash && (
                <th className="text-center">
                  <p className={`${tableStyle}`}>Ptje. Mínimo</p>
                </th>
              )}
              <th className="text-center">Nota Actual</th>
            </tr>
          </thead>

          <tbody>
            {student.subjects.map((subject) => (
              <tr
                key={subject.enrollmentId}
                className="text-mist-300 text-responsive-sm border-b border-mist-800 last:border-0 relative"
              >
                <td
                  className={`py-3 text-left transition-all
                    ${editingId === subject.enrollmentId ? "italic text-mist-200 animate-pulse" : ""}
                    `}
                >
                  <div className="flex flex-col">
                    <p className="overflow-hidden w-40 sm:w-80 md:w-100 ">
                      {subject.subjectName}
                    </p>

                    <p className="text-responsive-xs text-mist-500">
                      {isStudentDash && <>Prof. {subject.teacherName}</>}
                    </p>
                  </div>
                </td>
                {isStudentDash && (
                  <td className="text-center text-mist-500 py-1">
                    <p className="mr-2 pr-2">{subject.minPassingScore} </p>
                  </td>
                )}
                <td
                  onClick={() => handleStartEdit(subject)}
                  className={`text-center transition-all
                    ${editingId === subject.enrollmentId ? "opacity-0 duration-75" : "opacity-100"}
                    ${isStudentDash ? "pointer-events-none" : "pointer-events-auto cursor-pointer"}
                    `}
                >
                  {/* NOTA ACTUAL */}
                  <p
                    className={`border rounded py-1
                    ${subject.score < 5 && "border-rose-500/40"}
                    ${subject.score === 5 && "border-yellow-500/40"}
                    ${subject.score > 5 && "border-emerald-500/40"}
                    `}
                  >
                    {subject.score}
                  </p>
                </td>

                <td className="text-right text-emerald-600">
                  {!isStudentDash && (
                    <button
                      onClick={() => handleStartEdit(subject)}
                      className={`ml-auto flex cursor-pointer ${scaleFx("md")}`}
                    >
                      <SquarePen className="size-5" />
                    </button>
                  )}

                  {/* INPUT PARA EDITAR NOTA */}
                  <div
                    className={`absolute inset-0 z-10 transition-all duration-300 origin-right transform
                        ${
                          editingId === subject.enrollmentId
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 pointer-events-none"
                        }`}
                  >
                    <DivContainerEnd className="flex-row text-mist-400 h-full py-1 bg-transparent gap-1">
                      <p className="flex-1 sm:flex-2 md:flex-3 text-left text-responsive-sm pr-2 bg-transparent" />

                      <DivContainerCenter className="flex-row flex-1 h-full gap-1 bg-mist-900 pr-1">
                        <button
                          onClick={handleCancel}
                          disabled={isUpdatingGrade}
                          className={`h-full px-2 border border-rose-800 bg-rose-600/20 text-rose-300 rounded hover:bg-rose-600/40 cursor-pointer
                            ${isUpdatingGrade ? "opacity-50 cursor-not-allowed" : ""}
                            `}
                        >
                          <X className="size-4" />
                        </button>

                        <DivContainerCenter
                          className={`flex-row h-full rounded border px-1 bg-mist-800
                            ${isUpdatingGrade ? "border-emerald-500" : "border-mist-700 "}
                            `}
                        >
                          <input
                            type="number"
                            min="0"
                            max="10"
                            step="0.1"
                            value={newScore}
                            onChange={(e) => setNewScore(e.target.value)}
                            className="h-full w-full outline-0 px-1 bg-transparent text-center text-white"
                            disabled={isUpdatingGrade}
                            onKeyDown={(e) => {
                              if (e.key === "Enter")
                                handleConfirm(subject.enrollmentId);
                              if (e.key === "Escape") handleCancel();
                            }}
                          />
                        </DivContainerCenter>

                        <button
                          onClick={() => handleConfirm(subject.enrollmentId)}
                          disabled={isUpdatingGrade}
                          className={`h-full px-2 border border-emerald-800 bg-emerald-600/20 text-emerald-300 rounded hover:bg-emerald-600/40 cursor-pointer
                          ${isUpdatingGrade ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          {isUpdatingGrade ? (
                            <div className="animate-spin size-4 border-2 border-emerald-300 border-t-transparent rounded-full" />
                          ) : (
                            <Check className="size-4" />
                          )}
                        </button>
                      </DivContainerCenter>
                    </DivContainerEnd>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DivContainerCenter>
    </DivContainerCenter>
  );
};

export default GradesList;
