import { useParams } from "react-router-dom";
import Loading from "../atoms/Loading";
import ErrorPage from "../atoms/ErrorPage";
import { useStudentData } from "../../hooks/useApiData";
import { DivContainerCenter, DivContainerModal } from "../atoms/DivContainer";
import { ChevronsLeft, ImageOff } from "lucide-react";
import GradesList from "./GradesList";
import { hoverBgFx } from "../../utils/styles";

const StudentProfile = ({ studentId, setIsProfile, setStudentId }) => {
  const { student, isStudentLoading, isStudentError } =
    useStudentData(studentId);

  if (isStudentLoading)
    return (
      <div className="flex items-center justify-center h-full">
        <Loading children="Iniciando sesión"/>
      </div>
    );

  if (isStudentError)
    return (
      <div className="flex items-center justify-center h-full">
        <ErrorPage />
      </div>
    );

  return (
    <DivContainerCenter className="h-full justify-start">
      {student ? (
        <GradesList
          idForUpdate={studentId}
          setIsProfile={setIsProfile}
          isStudentDash={true}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-mist-200">Estudiante no encontrado...</p>
        </div>
      )}
    </DivContainerCenter>
  );
};

export default StudentProfile;
