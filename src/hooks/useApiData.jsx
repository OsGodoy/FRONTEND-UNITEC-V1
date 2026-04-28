import {
  useGetData,
  useGetDataById,
  useMutationData,
} from "../hooks/useQueryBase";
import { queryKeys } from "../constants/queryKeys";
import {
  getStudentById,
  getStudents,
  getUsers,
  updateGrade,
} from "../api/proyectApi";

export const useUsersData = (filters = {}) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useGetData(
    queryKeys.users,
    getUsers,
    filters,
  );

  return {
    users: data,
    isUsersLoading: isLoading,
    isUsersError: isError,
    usersError: error,
    isUsersFetching: isFetching,
    refetchUsers: refetch,
  };
};

export const useStudentsData = (filters = {}) => {
  const { data, isLoading, isError, error, isFetching, refetch } = useGetData(
    queryKeys.students,
    getStudents,
    filters,
  );

  return {
    students: data,
    isStudentsLoading: isLoading,
    isStudentsError: isError,
    studentsError: error,
    isStudentsFetching: isFetching,
    refetchStudents: refetch,
  };
};

export const useStudentData = (id) => {
  const { data, isLoading, isError, error } = useGetDataById(
    queryKeys.student,
    getStudentById,
    id,
  );

  return {
    student: data,
    isStudentLoading: isLoading,
    isStudentError: isError,
    studentError: error,
  };
};

export const useUpdateGradeMutation = () => {
  const { execute, executeAsync, isPending, ...rest } = useMutationData(
    queryKeys.student,
    updateGrade,
  );

  return {
    updateGradeMethod: execute,
    updateGradeMethodAsync: executeAsync,
    isUpdatingGrade: isPending,
    ...rest,
  };
};
