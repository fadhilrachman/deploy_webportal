"use client";
import FormGenerator from "@/components/shared/form-generator";
import { useRequestOtp } from "@/hooks/auth.hooks";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

export default function LoginWithPhoneEmail({ setIsUsingEmail }) {
  const router = useRouter();
  const toast = useToast();
  const { create, status, errorMessage } = useRequestOtp();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (val) => {
      await create({ ...val, otpWith: "email" });
      router.push("/verifikasi");
    },
    validationSchema: yup.object().shape({
      email: yup.string().required("Masukan email anda").email(),
      password: yup.string().required("Masukan password anda"),
    }),
  });

  const dataForm = [
    {
      id: "email",
      label: "email",
      type: "text",
      placeholder: "Email",
      // colSpan: 1,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      // colSpan: 1,
    },
  ];

  const handleSigInWithPhone = () => {
    setIsUsingEmail(false);
    toast({
      title: "Login menggunakan Nomor Telepon",
      status: "info",
      duration: 1000,
      isClosable: false,
    });
  };
  return (
    <>
      <Container
        maxW="100vw"
        h="696px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        mt="60px"
        bg=" #BEE3F8;"
        rounded={8}
        gap="56px"
      >
        <Heading textAlign="center">Login Melalui Ezzi School</Heading>
        <Container display="flex" flexDir="column" gap="56px">
          <Box>
            <FormGenerator
              dataForm={dataForm}
              formik={formik}
              grid={2}
              id={"form-generator"}
            />
            <Box textAlign="center" mt="16px">
              <Text
                cursor="pointer"
                textDecoration="underline"
                fontStyle="italic"
                onClick={() => handleSigInWithPhone()}
              >
                Masuk Melalui No Hp
              </Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              bgColor="#2C5282"
              color="white"
              _hover="none"
              type="submit"
              form="form-generator"
              // onClick={() => formik.handleSubmit()}
              isLoading={status == "fetching"}
              loadingText={"Loading"}
            >
              Masuk
            </Button>
          </Box>
        </Container>
      </Container>
    </>
  );
}
