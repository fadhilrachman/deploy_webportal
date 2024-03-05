"use client";
import FormGenerator from "@/components/shared/form-generator";
import { usePPDB } from "@/context/ppdb.context";
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

export default function LoginWithPhoneNumber({ setIsUsingEmail }) {
  const toast = useToast();
  const { create, status, errorMessage } = useRequestOtp();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phone: "",
      nisn: "",
    },
    onSubmit: async (val) => {
      await create({
        phone: `62${val.phone}`,
        password: val.nisn,
        otpWith: "phone",
      });
      router.push("/verify-otp");
    },
    validationSchema: yup.object().shape({
      phone: yup.string().required("Masukan no telepon anda"),
      nisn: yup.string().required("Masukan nisn anda"),
    }),
  });
  const dataForm = [
    {
      id: "phone",
      label: "No Hp",
      type: "number",
      placeholder: "No Hp",
      leftAddon: "+62",
      // colSpan: 1,
    },
    {
      id: "nisn",
      label: "Password",
      type: "password",
      placeholder: "Password",
      // colSpan: 1,
    },
  ];

  const handleSigInWithEmail = () => {
    setIsUsingEmail(true);
    toast({
      title: "Login menggunakan email",
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
                onClick={() => handleSigInWithEmail()}
              >
                Masuk Melalui Email
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
