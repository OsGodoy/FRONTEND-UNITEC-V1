import { ImageOff } from "lucide-react";
import {
  DivContainerCenter,
  DivContainerModal,
  DivContainerStart,
} from "../atoms/DivContainer";
import {
  LiContainer,
  UlContainerCenter,
  UlContainerGrid,
} from "../atoms/UlContainer";
import { ButtonBgEmerald } from "../atoms/Buttons";
import { useState } from "react";
import GradesList from "./GradesList";
import StudentListHeader from "../molecules/StudentListHeader";

const StudentsList = ({ users, isUpdate, setIsUpdate }) => {
  const students = users?.filter((user) => user.role === "student") || [];
  const [idForUpdate, setIdForUpdate] = useState(null);

  return (
    <DivContainerCenter className="h-full justify-start">
      {!isUpdate ? (
        <UlContainerGrid className="w-full gap-x-2" gap="gap-0">
          {students.map((student) => (
            <StudentListHeader
              key={student.id}
              student={student}
              setIsUpdate={setIsUpdate}
              setIdForUpdate={setIdForUpdate}
              showButton={true}
            />
          ))}
        </UlContainerGrid>
      ) : (
        <GradesList idForUpdate={idForUpdate} isUpdate={isUpdate} />
      )}
    </DivContainerCenter>
  );
};

export default StudentsList;
