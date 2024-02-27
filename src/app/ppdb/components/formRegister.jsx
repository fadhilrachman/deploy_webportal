import FormGenerator from "@/components/shared/form-generator";
import { Box } from "@chakra-ui/react";
import { useFormik } from "formik";

export default function FormRegister() {
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
      type: "text",
      placeholder: "Nama Lengkap",
      // colSpan: 1,
    },
    {
      id: "NISN",
      label: "NISN",
      type: "text",
      placeholder: "NISN",
      // colSpan: 1,
    },
    {
      id: "tempatlahir",
      label: "Tempat Lahir",
      type: "text",
      placeholder: "Tempat Lahir",
      // colSpan: 1,
    },
    {
      id: "agama",
      label: "Agama",
      type: "text",
      placeholder: "Agama",
      colSpan: 1,
    },
    {
      id: "noHp",
      label: "No HP",
      type: "number",
      placeholder: "No HP",
      colSpan: 1,
    },
    {
      id: "alamatLengkap",
      label: "Alamat Lengkap",
      type: "textarea",
      placeholder: "Alamat Lengkap",
      // colSpan: 1,
    },
  ];

  return (
    <Box>
      <FormGenerator dataForm={dataForm} formik={formik} id={"form-generator"} grid={2} />
    </Box>
  );
}
