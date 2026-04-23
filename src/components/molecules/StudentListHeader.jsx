import { ImageOff } from "lucide-react";
import { DivContainerCenter, DivContainerStart } from "../atoms/DivContainer";
import { LiContainer } from "../atoms/UlContainer";
import { ButtonBgEmerald } from "../atoms/Buttons";

const StudentListHeader = ({
  student,
  setIsUpdate,
  isUpdate,
  setIdForUpdate,
  isStudentDash,
  showButton = true,
}) => {
  if (!student) return null;

  return (
    <LiContainer
      key={student.id}
      className={`flex py-2 px-1 md:p-2 border-mist-700 gap-2 border-b md:border-l md:rounded-bl
        ${isUpdate && "border bg-mist-800 rounded"}
        ${isStudentDash && "border border-emerald-500 bg-mist-800 rounded"}
        `}
    >
      <DivContainerCenter className="flex-row flex-3 gap-2">
        <div
          className={`h-10 w-10 flex items-center justify-center
          ${isStudentDash && "md:h-20 md:w-20"}
          `}
        >
          {student.profile?.avatar ? (
            <img
              src={`${student.profile.avatar}`}
              alt={student.id}
              loading="lazy"
              className="object-contain rounded-full"
            />
          ) : (
            <div
              className={`p-2.5 bg-mist-700 text-mist-200 rounded-full flex items-center justify-center
            ${isStudentDash && "md:h-20 md:w-20"}
            `}
            >
              <ImageOff
                className={`size-4 stroke-1 ${isStudentDash && "size-6"}`}
              />
            </div>
          )}
        </div>
        <DivContainerStart className="flex-col w-full">
          <div className="text-responsive-xs text-mist-500">
            {isStudentDash ? "Bienvenido/a" : "Alumno:"}
          </div>
          <div
            className={`text-mist-200
            ${isStudentDash && "text-responsive-lg"}
            `}
          >
            {student.profile?.fullName}
          </div>
        </DivContainerStart>
      </DivContainerCenter>

      {showButton && (
        <ButtonBgEmerald
          onClick={() => {
            setIsUpdate(true);
            setIdForUpdate(student.id);
          }}
          className="text-responsive-xs flex-1"
          padding="py-2 px-1"
        >
          Cargar notas
        </ButtonBgEmerald>
      )}
    </LiContainer>
  );
};

export default StudentListHeader;
