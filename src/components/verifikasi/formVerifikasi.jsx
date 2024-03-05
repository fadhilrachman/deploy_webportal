"use client";

import { usePPDB } from "@/context/ppdb.context";
import { useVerifyOtp } from "@/hooks/auth.hooks";
import {
  Box,
  Button,
  Container,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function FormVerifikasi() {
  const { create, errorMessage, status } = useVerifyOtp();
  const { setPayload, setOtp } = usePPDB();

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: async (val) => {
      await create(val);
    },
  });
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gap="56px"
    >
      <HStack>
        <PinInput
          type="alphanumeric"
          placeholder="_"
          name="otp"
          onChange={(values) => formik.setFieldValue("otp", values)}
          onComplete={() => {
            formik.handleSubmit();
          }}
        >
          <PinInputField bg="#90CDF4" w="75px" h="79px" />
          <PinInputField bg="#90CDF4" w="75px" h="79px" />
          <PinInputField bg="#90CDF4" w="75px" h="79px" />
          <PinInputField bg="#90CDF4" w="75px" h="79px" />
        </PinInput>
      </HStack>
      <Container textAlign="center">
        <Text>
          Kami sudah mengirim kode verifikasi melalui nomor atau email anda
          untuk dapat daftar pada ppdb 2023/2024
        </Text>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          bgColor="#2C5282"
          color="white"
          _hover="none"
          onClick={() => formik.handleSubmit()}
          isLoading={status == "fetching"}
          loadingText={"Loading"}
        >
          Daftar
        </Button>
      </Box>
    </Box>
  );
}
