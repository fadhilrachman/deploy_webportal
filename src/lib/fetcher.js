import { useState, useMemo } from "react";
import { useQuery, QueryFunction, useQueryClient } from "@tanstack/react-query";

const useAsync = (asyncFunction) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const errorMessage = useMemo(() => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.message;
      }
      return "Something error";
    }
    return null;
  }, [error]);

  const fieldErrors = useMemo(() => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.errors;
      }
      return {};
    }
    return null;
  }, [error]);

  const execute = async (arg) => {
    setStatus("fetching");
    setValue(null);
    setError(null);
    try {
      const { data } = await asyncFunction(arg);
      setValue(data);
      setStatus("resolved");
    } catch (err) {
      setError(err);
      setStatus("rejected");
      throw err;
    }
  };

  return { execute, status, value, error, errorMessage, fieldErrors };
};

const useGetQuery = ({ queryKey, queryFn, enabled = true }) => {
  //   const queryClient = useQueryClient();
  const { data, status, error, refetch, isFetching } = useQuery(
    queryKey,
    queryFn,
    {
      enabled,
    }
  );

  const errorMessage = useMemo(() => {
    if (error) {
      if (error.response && error.response.data) {
        return error.response.data.message;
      }
      return "Something error";
    }
    return null;
  }, [error]);

  return {
    data,
    status,
    errorMessage,
    refetch,
    isFetching,
  };
};

export { useAsync, useGetQuery };
