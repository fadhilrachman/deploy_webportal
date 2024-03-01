import FormGenerator from "@/components/shared/form-generator";
import { useRequestOtp } from "@/hooks/auth.hooks";
import { Box, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function FormRegister({ goToNext, goToPrevious }) {
  // const { create } = useRequestOtp();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      NISN: "",
      tempatLahir: "",
      agama: "",
      noHp: "",
      alamatLengkap: "",
    },
  });

  const dataForm = [
    {
      type: "title",
      text: "Data Peserta Didik",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "name",
      label: "Nama Lengkap",
      // helperText: "NISN akan dipakai sebagai password siswa",
      type: "text",
      placeholder: "Nama Lengkap",
      // colSpan: 1,
    },
    {
      id: "nisn",
      label: "NISN",
      type: "text",
      placeholder: "NISN",
      // colSpan: 1,
    },
    {
      id: "dob",
      label: "Tempat Lahir",
      type: "text",
      placeholder: "Tempat Lahir",
      // colSpan: 1,
    },
    {
      id: "religion",
      label: "Agama",
      type: "text",
      placeholder: "Agama",
      colSpan: 1,
    },
    {
      id: "phone",
      label: "No HP",
      type: "number",
      placeholder: "No HP",
      colSpan: 1,
    },
    {
      id: "address",
      label: "Alamat Lengkap",
      type: "textarea",
      placeholder: "Alamat Lengkap",
      // colSpan: 1,
    },
  ];

  return (
    <Box>
      <FormGenerator
        dataForm={dataForm}
        formik={formik}
        id={"form-generator"}
        grid={2}
      />
      <Box
        display="flex"
        justifyContent="end"
        alignItems="center"
        pt={16}
        gap={4}
      >
        <Button onClick={() => goToPrevious()}>Kembali</Button>
        <Button
          bgColor="#2C5282"
          color="white"
          _hover={"none"}
          onClick={() => goToNext()}
        >
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
}
