import { Link } from "react-router-dom";
import { ButtonBgEmerald } from "../../atoms/Buttons";
import {
  DivContainerCenter,
  DivContainerModal,
} from "../../atoms/DivContainer";
import {
  LiContainer,
  UlContainerCenter,
  UlContainerGrid,
} from "../../atoms/UlContainer";
import { useState } from "react";
import StudentProfile from "../StudentProfile";
import { useStudentData } from "../../../hooks/useApiData";
import FadeUp from "../../animations/FadeUp";

const StudentDashboard = ({ users }) => {
  const students = users?.filter((user) => user.role === "student") || [];
  const [studentId, setStudentId] = useState(null);
  const [isProfile, setIsProfile] = useState(false);

  if (students.length === 0)
    return (
      <div className="h-full flex items-center justify-center text-mist-200">
        <p>Lista vacía...</p>
      </div>
    );

  return (
    <FadeUp className="w-full h-full">
      <DivContainerCenter className="h-full justify-start">
        {!isProfile ? (
          <>
            <DivContainerModal className="bg-mist-600 p-1 text-responsive-sm mb-2">
              <p className="text-mist-200">
                Elige un estudiante para simular el inicio de sesión
              </p>
            </DivContainerModal>
            <UlContainerGrid className="text-lg text-mist-200 w-full text-start gap-x-2">
              {students.map((student) => (
                <LiContainer
                  key={student.id}
                  className="flex py-2 px-1 sm:p-2 border-mist-700 gap-2 border-b first:border-t md:first:border-t-0 md:border-l md:rounded-bl"
                >
                  <p className="flex-3 text-responsive-sm">
                    {student.profile?.fullName || "Nombre no disponible"}
                  </p>
                  <ButtonBgEmerald
                    onClick={() => {
                      (setIsProfile(true), setStudentId(student.id));
                    }}
                    className="w-full"
                    padding="py-2 px-1 text-responsive-xs flex-1"
                  >
                    Iniciar sesión
                  </ButtonBgEmerald>
                </LiContainer>
              ))}
            </UlContainerGrid>
          </>
        ) : (
          <StudentProfile
            studentId={studentId}
            setIsProfile={setIsProfile}
            setStudentId={setStudentId}
          />
        )}
      </DivContainerCenter>
    </FadeUp>
  );
};

export default StudentDashboard;
