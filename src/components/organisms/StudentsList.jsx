import { CircleX, ImageOff, LocateOff, Search } from "lucide-react";
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
import {
  ButtonBgEmerald,
  ButtonSearch,
  ButtonSearchCancel,
} from "../atoms/Buttons";
import { useEffect, useState } from "react";
import GradesList from "./GradesList";
import StudentListHeader from "../molecules/StudentListHeader";
import { useStudentsData } from "../../hooks/useApiData";
import { useSearch } from "../../contexts/searchContext";
import ErrorPage from "../atoms/ErrorPage";
import Input from "../atoms/Input";
import { scaleFx } from "../../utils/styles";
import { p } from "framer-motion/client";
import Loading from "../atoms/Loading";

const StudentsList = ({ isUpdate, setIsUpdate }) => {
  const { searchTerm, setSearchTerm, showCancelled, handleClearSearch } =
    useSearch();

  const [inputValue, setInputValue] = useState(searchTerm);

  const { students, isStudentsLoading, isStudentsError, isStudentsFetching } =
    useStudentsData({
      search: searchTerm,
    });
  const [idForUpdate, setIdForUpdate] = useState(null);

  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(inputValue);
  };

  if (isStudentsError)
    return (
      <div className="flex items-center justify-center h-full">
        <ErrorPage />
      </div>
    );

  return (
    <DivContainerCenter className="h-full justify-start">
      {!isUpdate && (
        <DivContainerCenter className="pb-2 border-b border-mist-700 mb-2">
          <DivContainerCenter className="flex-row w-full max-w-100">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="rounded-l-full w-full text-sm"
              border="border-0"
              placeholder="Buscar..."
            />
            {searchTerm !== "" ? (
              <ButtonSearchCancel
                onClick={handleClearSearch}
                className={`${ButtonSearchCancel}`}
              >
                <CircleX className={`${scaleFx("md")}`} />
              </ButtonSearchCancel>
            ) : (
              <ButtonSearch
                isActive={inputValue !== ""}
                onClick={handleSearch}
              />
            )}
          </DivContainerCenter>
        </DivContainerCenter>
      )}
      {isStudentsFetching && searchTerm !== "" ? (
        <DivContainerCenter className="h-full">
          <Loading children="Buscando..." />
        </DivContainerCenter>
      ) : (
        <>
          {students && students.length > 0 ? (
            <>
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
            </>
          ) : (
            !isStudentsLoading && (
              <DivContainerCenter className="h-full text-mist-200 text-center gap-2">
                <LocateOff />
                No se encontraron resultados según la busqueda...
              </DivContainerCenter>
            )
          )}
        </>
      )}
    </DivContainerCenter>
  );
};

export default StudentsList;
