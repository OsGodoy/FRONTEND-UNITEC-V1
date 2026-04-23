import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetDataList = (key, fetchFn, filters = {}) => {
  const query = useQuery({
    queryKey: [...key, filters],
    queryFn: () => fetchFn(filters),
    staleTime: 1000 * 60 * 5,
  });

  return {
    data: query.data ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
};

export const useGetDataById = (key, fetchFn, id) => {
  const query = useQuery({
    queryKey: [...key, id],
    queryFn: () => fetchFn(id),
    enabled: !!id,
  });

  return {
    data: query.data ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};

export const useMutationData = (keyToInvalidate, apiFn) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: apiFn,
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: keyToInvalidate });

      const specificId =
        variables?.id ||
        variables?.enrollmentId ||
        variables?.studentId ||
        (typeof variables === "string" || typeof variables === "number"
          ? variables
          : null);

      if (specificId) {
        queryClient.invalidateQueries({
          queryKey: [...keyToInvalidate, specificId],
        });
      }
    },
  });

  return {
    execute: mutation.mutateAsync,
    isPending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
};
