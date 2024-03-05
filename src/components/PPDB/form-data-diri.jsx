import FormGenerator from "@/components/shared/form-generator";
import { usePPDB } from "@/context/ppdb.context";
import { useRequestOtp } from "@/hooks/auth.hooks";
import { Box, Button } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as Yup from "yup";
export default function FormRegister({ goToNext, goToPrevious }) {
  // const { create } = useRequestOtp();
  // const router = useRouter();
  const { setUpdateForm, payload } = usePPDB();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Kolom ini harus diisi"),
    email: Yup.string()
      .email("Harus email yang valid")
      .required("Kolom ini harus diisi"),
    nisn: Yup.string().required("Kolom ini harus diisi"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      nisn: "",
    },
    validationSchema,
    onSubmit: (val) => {
      goToNext();
      setUpdateForm(val);
      console.log({ payload });

      console.log({ val });
    },
  });

  // console.log();

  console.log({ values: formik.values });
  useEffect(() => {
    formik.setValues(payload);
  }, [payload]);

  const dataForm = [
    {
      type: "title",
      text: "Data Peserta Didik",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "fullName",
      label: "Nama Lengkap",
      // helperText: "NISN akan dipakai sebagai password siswa",
      type: "text",
      placeholder: "Nama Lengkap",
      isRequired: true,
      // colSpan: 1,
    },
    {
      id: "email",
      label: "Email",
      // helperText: "NISN akan dipakai sebagai password siswa",
      type: "text",
      placeholder: "Email",
      isRequired: true,
      // colSpan: 1,
    },
    {
      id: "nisn",
      label: "NISN",
      type: "number",
      placeholder: "NISN",
      isRequired: true,

      // colSpan: 1,
    },
    {
      id: "dob",
      label: "Tanggal Lahir",
      type: "date",
      placeholder: "Tanggal Lahir",
      // isRequired: true,

      // colSpan: 1,
    },
    {
      id: "pob",
      label: "Tempat Lahir",
      type: "text",
      placeholder: "Tempat Lahir",
      // isRequired: true,

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
      leftAddon: "+62",
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
        {/* <Button onClick={() => goToPrevious()}> Kembali</Button> */}
        <Button
          bgColor="#2C5282"
          color="white"
          _hover={"none"}
          type="submit"
          form="form-generator"
          // onClick={() => }
        >
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
}
