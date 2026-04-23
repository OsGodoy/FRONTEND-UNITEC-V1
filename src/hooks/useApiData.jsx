import {
  useGetDataList,
  useGetDataById,
  useMutationData,
} from "../hooks/useQueryBase";
import { queryKeys } from "../constants/queryKeys";
import { getStudentById, getUsers, updateGrade } from "../api/proyectApi";

export const useUsersData = (filters = {}) => {
  const { data, isLoading, isError, error, isFetching, refetch } =
    useGetDataList(queryKeys.users, getUsers, filters);

  return {
    users: data,
    isUsersLoading: isLoading,
    isUsersError: isError,
    usersError: error,
    isUsersFetching: isFetching,
    refetchUsers: refetch,
  };
};

export const useStudentData = (id) => {
  const { data, isLoading, isError, error } = useGetDataById(
    queryKeys.students,
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
  const { execute, isPending, ...rest } = useMutationData(
    queryKeys.students,
    updateGrade,
  );

  return {
    updateGradeMethod: execute,
    isUpdatingGrade: isPending,
    ...rest,
  };
};
