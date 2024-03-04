import axios from "@/lib/axios";

import { useGetQuery, useAsync } from "@/lib/fetcher";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

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
    (data) => {
      return axios.post("/web-portal/ppdb", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  );

  const toast = useToast();

  useEffect(() => {
    if (status == "resolved") {
      toast({ title: "Daftar Sukses", duration: 500, status: "success" });
    }
    if (status == "rejected") {
      toast({
        status: "error",
        title: "Gagal Mendaftarkan",
        duration: 2000,
        description: errorMessage,
      });
    }
  }, [status]);

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
