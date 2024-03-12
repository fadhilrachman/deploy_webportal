import { useShared } from "@/context/shared.context";
import axios from "@/lib/axios";

import { useGetQuery, useAsync } from "@/lib/fetcher";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export const useDataSchool = () => {
  const subdomain = window.location.hostname.split(".")[0];

  const { setIdSchool, setSchoolName } = useShared();
  const { data, status, errorMessage, isIdle, refetch, isFetching } =
    useGetQuery({
      queryFn: async () => {
        const response = await axios.get("/web-portal/ppdb/list-school");
        return response.data;
      },
    });

  useEffect(() => {
    if (status == "success") {
      const dataSchool = data?.data?.find((res) => res.domain == subdomain);
      setIdSchool(dataSchool?._id);
      setSchoolName(dataSchool?.name);
    }
  }, [status]);
  return {
    data,
    status,
    errorMessage,
    isIdle,
    refetch,
    isFetching,
  };
};
