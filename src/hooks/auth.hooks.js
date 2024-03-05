import { usePPDB } from "@/context/ppdb.context";
import axios from "@/lib/axios";

import { useGetQuery, useAsync } from "@/lib/fetcher";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRequestOtp = () => {
  const toast = useToast();
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    (data) => {
      return axios.post("/web-portal/ppdb/request-otp", data);
    }
  );

  useEffect(() => {
    if (status == "resolved") {
      toast({
        status: "success",
        title: "request otp success",
        duration: 7000,
      });
    }
    if (status == "rejected") {
      toast({
        status: "error",
        title: "request otp error",
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

export const useVerifyOtp = () => {
  const toast = useToast();
  const router = useRouter();

  const { setOtp, setUpdateForm } = usePPDB();
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    (data) => {
      return axios.post("/web-portal/ppdb/verify-otp", data);
    }
  );

  useEffect(() => {
    console.log({ result: value });
    if (status == "resolved") {
      setOtp(true);
      setUpdateForm(value?.data);
      router.push("/ppdb");

      toast({
        status: "success",
        title: "Kode otp berhasil di kirim",
        duration: 500,
      });
    }
    if (status == "rejected") {
      toast({
        status: "error",
        title: "Kode otp gagal di kirm",
        description: errorMessage,
        duration: 2000,
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

export const useRegister = () => {
  const toast = useToast();
  const { execute, status, value, errorMessage, fieldErrors } = useAsync(
    (data) => {
      return axios.post("/web-portal/ppdb/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  );

  useEffect(() => {
    if (status == "resolved") {
      toast({
        status: "success",
        title: "Akun berhasil di buat",
        duration: 500,
      });
    }
    if (status == "rejected") {
      toast({
        status: "error",
        title: "Gagal membuat akun",
        description: errorMessage,
        duration: 2000,
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
