import { useState } from "react";
import { useUsersData } from "../hooks/useApiData";
import StudentDashboard from "../components/organisms/Dashboards/StudentDashboard";
import TeacherDashboard from "../components/organisms/Dashboards/TeacherDashboard";
import ErrorPage from "../components/atoms/ErrorPage";
import Loading from "../components/atoms/Loading";
import {
  DivContainerCenter,
  DivContainerModal,
} from "../components/atoms/DivContainer";
import FadeUp from "../components/animations/FadeUp";

const MainDashboard = () => {
  const [view, setView] = useState("teacher");

  const toggleView = () => {
    setView((prev) => (prev === "teacher" ? "student" : "teacher"));
  };

  const { users, isUsersLoading, isUsersError } = useUsersData();

  if (isUsersError)
    return (
      <div className="flex items-center justify-center h-full">
        <ErrorPage />
      </div>
    );

  return (
    <DivContainerCenter className="p-2 h-full justify-start gap-2 max-w-260">
      <DivContainerCenter className="relative border rounded border-mist-700 p-2">
        <DivContainerCenter className="flex-row text-center text-responsive-xs">
          <p
            className={`transition-colors ${view === "teacher" ? "text-emerald-500" : "text-mist-400"}`}
          >
            Vista Maestro
          </p>

          <div
            onClick={toggleView}
            className="w-25 flex items-center bg-mist-300 p-2 rounded-full border-3 border-mist-500 mx-4 cursor-pointer relative"
          >
            <div className="absolute inset-0 bg-mist-400/50 rounded-full h-5 m-2 shadow-inner shadow-mist-500" />
            <button
              type="button"
              className={`h-5 w-10 rounded-full transition-all duration-300 shadow shadow-mist-500 cursor-pointer ${
                view === "teacher"
                  ? "bg-white translate-x-0"
                  : "bg-white translate-x-9.5"
              }`}
            />
          </div>
          <p
            className={`transition-colors ${view === "student" ? "text-emerald-500" : "text-mist-400"}`}
          >
            Vista Estudiante
          </p>
        </DivContainerCenter>
        {isUsersLoading && (
          <div className="absolute inset-0 bg-mist-950/20 rounded backdrop-blur-xs" />
        )}
      </DivContainerCenter>
      <DivContainerModal className="h-full w-full flex-col items-center justify-start border border-mist-700 p-2">
        {isUsersLoading ? (
          <DivContainerCenter className="h-full">
            <Loading />
          </DivContainerCenter>
        ) : view === "teacher" ? (
          <TeacherDashboard users={users} />
        ) : (
          <StudentDashboard users={users} />
        )}
      </DivContainerModal>
    </DivContainerCenter>
  );
};

export default MainDashboard;
