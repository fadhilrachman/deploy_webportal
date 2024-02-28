import axios from "@/lib/axios";

import { useGetQuery, useAsync } from "@/lib/fetcher";

export const useListDataPPDb = () => {
  const { data, status, errorMessage, isIdle, refetch, isFetching } =
    useGetQuery({
      queryKey: "LIST_PPDB",
      queryFn: async () => {
        const response = await axios.get("/example");
        return response.data;
      },
    });

  return {
    data,
    status,
    errorMessage,
    isIdle,
    refetch,
    isFetching,
  };
};
export const useCreatePPPDB = (request) => {
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    axios.post("/web-portal/ppdb")
  );

  async function create(payload) {
    try {
      await execute(payload);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  return {
    create,
    status,
    value,
    errorMessage,
    fieldErrors,
  };
};
