import axios from "@/lib/axios";

import { useGetQuery, useAsync } from "@/lib/fetcher";

export const useRequestOtp = () => {
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    axios.post("/web-portal/ppdb/request-otp")
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

export const useVerifyOtp = () => {
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    axios.post("/web-portal/ppdb/verify-otp")
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

export const useRegister = () => {
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    axios.post("/web-portal/ppdb/")
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
