import { ChevronsLeft } from "lucide-react";
import {
  DivContainerCenter,
  DivContainerModal,
} from "../../atoms/DivContainer";
import Loading from "../../atoms/Loading";
import StudentsList from "../StudentsList";
import { useState } from "react";
import FadeUp from "../../animations/FadeUp";
import { hoverBgFx } from "../../../utils/styles";
import { Link } from "react-router-dom";

const TeacherDashboard = ({ users }) => {
  const teachers = users?.filter((user) => user.role === "teacher") || [];
  const [isUpdate, setIsUpdate] = useState(false);

  const firstTeacher = teachers.length > 0 ? teachers[0] : null;

  return (
    <FadeUp className="w-full h-full">
      <DivContainerCenter className="h-full">
        {firstTeacher ? (
          <>
            <div className="text-center w-full">
              <p className="text-responsive-xs text-start text-mist-400 px-2">
                Bienvenido/a
              </p>
              <h2 className="text-lg text-mist-200 pb-1 px-2 w-full text-start">
                Prof.{" "}
                <span className="text-emerald-500 font-medium">
                  {firstTeacher.profile?.fullName || "Nombre no disponible"}
                </span>
              </h2>
            </div>
            <DivContainerCenter className="h-full justify-start">
              <div className="flex w-full pb-2">
                {isUpdate ? (
                  <DivContainerModal
                    onClick={() => {
                      setIsUpdate(false);
                    }}
                    className={`border border-emerald-800 bg-emerald-600/20 text-responsive-xs py-1 px-0 mr-2 flex-1 ${hoverBgFx("emerald-500")}`}
                  >
                    <p className="text-emerald-300 flex items-center justify-center">
                      <ChevronsLeft className="size-3" />
                      Volver
                    </p>
                  </DivContainerModal>
                ) : (
                  <Link to="/" className="mr-2 flex-1">
                    <DivContainerModal
                      className={`border border-emerald-800 bg-emerald-600/20 text-responsive-xs py-1 px-0 ${hoverBgFx("emerald-500")}`}
                    >
                      <p className="text-emerald-300 flex items-center justify-center">
                        <ChevronsLeft className="size-3" />
                        Volver
                      </p>
                    </DivContainerModal>
                  </Link>
                )}
                <DivContainerModal className="border border-mist-700 text-responsive-xs p-1 flex-3">
                  {!isUpdate ? (
                    <p className="text-mist-200">Lista de alumnos</p>
                  ) : (
                    <p className="text-mist-200">
                      Cargue las notas de las materias
                    </p>
                  )}
                </DivContainerModal>
              </div>
              <StudentsList
                users={users}
                isUpdate={isUpdate}
                setIsUpdate={setIsUpdate}
              />
            </DivContainerCenter>
          </>
        ) : (
          <div className="h-full flex items-center justify-center text-mist-200">
            <p>Lista vacía...</p>
          </div>
        )}
      </DivContainerCenter>
    </FadeUp>
  );
};

export default TeacherDashboard;
