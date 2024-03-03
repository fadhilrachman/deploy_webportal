import FormGenerator from "@/components/shared/form-generator";
import { usePPDB } from "@/context/ppdb.context";
import { Box, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";

export default function FormUploadFolder({ goToNext, goToPrevious }) {
  const { setUpdateForm, payload } = usePPDB();
  const formik = useFormik({
    initialValues: {},
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

  console.log({ values: formik.values });
  const dataForm = [
    {
      type: "subTitle",
      text: "Upload Berkas Data diri",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "birthCertificateFile",
      label: "Upload File Surat Kata Lahir ",
      type: "file",
      placeholder: "Agama",
      colSpan: 1,
    },
    {
      id: "familyCardFile",
      label: "Upload File Kartu Keluarga (KK)",
      type: "file",
      placeholder: "Nama Lengkap",
      colSpan: 1,
    },
    {
      id: "ktpFile",
      label: "Upload File Kartu Tanda Penduduk (KK)",
      type: "file",
      placeholder: "NISN",
      colSpan: 1,
    },

    {
      type: "subTitle",
      text: "Upload Berkas Data diri",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "certificateOfGraduationFile",
      label: "Upload File Surat Keterangan Lulus",
      type: "file",
      placeholder: "Tempat Lahir",
      // colSpan: 1,
    },
    {
      id: "raportFile",
      label: "Upload File Raport",
      type: "file",
      placeholder: "Tempat Lahir",
      // colSpan: 1,
    },
  ];

  return (
    <Box>
      <FormGenerator
        dataForm={dataForm}
        formik={formik}
        id={"form-generator"}
        grid={3}
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
