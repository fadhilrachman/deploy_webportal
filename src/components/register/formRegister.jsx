"use client";

import FormGenerator from "@/components/shared/form-generator";
import { useRegister } from "@/hooks/auth.hooks";
import { Box, Button, Container, Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as yup from "yup";

export default function FormRegister() {
  const router = useRouter();
  const { create, status, errorMessage } = useRegister();
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      nisn: "",
    },
    onSubmit: async (val) => {
      await create({ ...val, phone: `62${val.phone}` });
      router.push("/login");
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email wajib di isi").email(),
      phone: yup.string().required("No Hp wajib di isi"),
      fullName: yup.string().required("Kolom ini wajib di isi"),
      nisn: yup.string().required("NISN wajib di isi"),
    }),
  });
  const dataForm = [
    {
      id: "fullName",
      label: "Nama",
      type: "text",
      placeholder: "Nama",
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      placeholder: "Email",
    },
    {
      id: "phone",
      label: "No Hp",
      type: "number",
      leftAddon: "+62",
      placeholder: "No Hp",
    },
    {
      id: "nisn",
      helperText: "NISN akan di gunakan sebagai password siswa!",
      label: "NISN",
      type: "number",
      placeholder: "NISN",
    },
  ];
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
        <Heading textAlign="center">Buat akun baru</Heading>
        <Container display="flex" flexDir="column" gap="56px">
          <Box>
            <FormGenerator
              dataForm={dataForm}
              formik={formik}
              grid={2}
              id={"form-generator"}
            />
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              bgColor="#2C5282"
              color="white"
              _hover="none"
              isLoading={status == "fetching"}
              loadingText={"Loading"}
              type="submit"
              form="form-generator"
              // onClick={() => formik.handleSubmit()}
            >
              Daftar
            </Button>
          </Box>
        </Container>
      </Container>
    </>
  );
}
