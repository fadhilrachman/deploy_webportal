import FormGenerator from "@/components/shared/form-generator";
import { Box } from "@chakra-ui/react";
import { useFormik } from "formik";

export default function FormDataTambah() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
  });

  const dataForm = [
    {
      type: "title",
      text: "Latar Belakang Peserta Didik",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "asal sekolah",
      label: "Asal Sekolah",
      type: "text",
      placeholder: "Asal Sekolah",
      // colSpan: 1,
    },
    {
      id: "tahun lulus",
      label: "Tahun Lulus",
      type: "text",
      placeholder: "Tahun Lulus",
      // colSpan: 1,
    },
    {
      id: "lama sekolah",
      label: "Lama Sekolah",
      type: "text",
      placeholder: "Lama Sekolah",
      // colSpan: 1,
    },
    {
      type: "title",
      text: "Data Orang Tua/Wali",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "Nama Lengkap",
      label: "Nama Lengkap",
      type: "text",
      placeholder: "Nama Lengkap",
      //   colSpan: 1,
    },
    {
      id: "NIK",
      label: "NIK",
      type: "number",
      placeholder: "NIK",
      //   colSpan: 1,
    },
    {
      id: "Pekerjaan",
      label: "Pekerjaan",
      type: "Text",
      placeholder: "Pekerjaan",
      // colSpan: 1,
    },
    {
      id: "no hp",
      label: "No.Hp",
      type: "number",
      placeholder: "No.Hp",
      colSpan: 1,
    },
    {
      id: "Alamat Lengkap",
      label: "Alamat Lengkap",
      type: "textarea",
      placeholder: "Alamat Lengkap",
      //   colSpan: 1,
    },
  ];

  return (
    <Box>
      <FormGenerator dataForm={dataForm} formik={formik} id={"form-generator"} grid={2} />
    </Box>
  );
}
