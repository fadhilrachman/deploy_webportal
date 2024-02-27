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
    },
    {
      id: "asal sekolah",
      label: "Asal Sekolah",
      type: "text",
      placeholder: "Asal Sekolah",
    },
    {
      id: "tahun lulus",
      label: "Tahun Lulus",
      type: "text",
      placeholder: "Tahun Lulus",
    },
    {
      id: "lama sekolah",
      label: "Lama Sekolah",
      type: "text",
      placeholder: "Lama Sekolah",
    },
    {
      type: "subTitle",
      text: "Data Orang Tua/Wali",
      id: "asasdasdd",
    },
    {
      id: "Nama Lengkap",
      label: "Nama Lengkap",
      type: "text",
      placeholder: "Nama Lengkap",
    },
    {
      id: "NIK",
      label: "NIK",
      type: "number",
      placeholder: "NIK",
    },
    {
      id: "Pekerjaan",
      label: "Pekerjaan",
      type: "Text",
      placeholder: "Pekerjaan",
    },
    {
      id: "no hp",
      label: "No.Hp",
      type: "number",
      placeholder: "No.Hp",
    },
    {
      id: "Alamat Lengkap",
      label: "Alamat Lengkap",
      type: "textarea",
      placeholder: "Alamat Lengkap",
    },
  ];

  return (
    <Box>
      <FormGenerator dataForm={dataForm} formik={formik} id={"form-generator"} grid={2} />
    </Box>
  );
}
