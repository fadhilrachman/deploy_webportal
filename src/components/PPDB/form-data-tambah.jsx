import FormGenerator from "@/components/shared/form-generator";
import { usePPDB } from "@/context/ppdb.context";
import { Box, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";

export default function FormDataTambah({ goToNext, goToPrevious }) {
  const { setUpdateForm, payload } = usePPDB();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (val) => {
      // goToPrevious();
      setUpdateForm({ ...payload, ...val });
      console.log({ payload });
      console.log("form-data-tambah");
    },
  });

  useEffect(() => {
    formik.setValues(payload);
  }, [payload]);

  const dataForm = [
    {
      type: "title",
      text: "Latar Belakang Peserta Didik",
      id: "asasdasdd",
    },
    {
      id: "schoolOrigin",
      label: "Asal Sekolah",
      type: "text",
      placeholder: "Asal Sekolah",
    },
    {
      id: "graduationYear",
      label: "Tahun Lulus",
      type: "text",
      placeholder: "Tahun Lulus",
    },
    {
      id: "graduationYearOld",
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
      id: "pedigree.fullName",
      label: "Nama Lengkap",
      type: "text",
      placeholder: "Nama Lengkap",
    },
    {
      id: "pedigree.nik",
      label: "NIK",
      type: "number",
      placeholder: "NIK",
    },
    {
      id: "pedigree.job",

      label: "Pekerjaan",
      type: "Text",
      placeholder: "Pekerjaan",
    },
    {
      id: "pedigree.phone",
      label: "No.Hp",
      leftAddon: "+62",
      type: "number",
      placeholder: "No.Hp",
    },
    {
      id: "pedigree.address",
      label: "Alamat Lengkap",
      type: "textarea",
      placeholder: "Alamat Lengkap",
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
        <Button
          type="button"
          onClick={() => {
            formik.handleSubmit();
            goToPrevious();
          }}
        >
          Kembali
        </Button>
        <Button
          bgColor="#2C5282"
          color="white"
          _hover={"none"}
          type="button"
          onClick={() => {
            formik.handleSubmit();
            goToNext();
          }}
          // onClick={() => goToNext()}
        >
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
}
