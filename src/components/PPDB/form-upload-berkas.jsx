import FormGenerator from "@/components/shared/form-generator";
import { usePPDB } from "@/context/ppdb.context";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { FieldArray, FormikProvider, useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineClose } from "react-icons/ai";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdAttachFile } from "react-icons/md";
import { IoFileTrayOutline } from "react-icons/io5";
export default function FormUploadFolder({ goToNext, goToPrevious }) {
  const { setUpdateForm, payload } = usePPDB();
  const [file, setFile] = useState("");
  const [dialog, setDialog] = useState(false);
  const [isUpload, setIsUpload] = useState(false);

  const formik = useFormik({
    initialValues: {
      certificates: [
        {
          certificate: "",
          description: "",
        },
      ],
    },
    onSubmit: (val) => {
      // goToPrevious();
      setUpdateForm({ ...payload, ...val });
      console.log({ payload });
      console.log("form-data-tambah");
    },
  });
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      onDrop: (acceptedFiles, rejectedFiles) => {
        // formik.setFieldValue(
        //   `certificates.${index}.certificate`,
        //   acceptedFiles
        // );
        setIsUpload(true);
        acceptedFiles.forEach((file) => {
          const reader = new FileReader();

          // Baca file sebagai URL data
          reader.readAsDataURL(file);

          // Setelah membaca file, ambil URL data dan lakukan sesuatu dengannya
          reader.onload = () => {
            const fileUrl = reader.result;
            setFile(fileUrl);
            console.log("File URL:", fileUrl);
            // Lakukan sesuatu dengan fileUrl, seperti menampilkannya atau mengirimkannya ke server
          };
        });
      },

      maxFiles: 1,
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
    {
      id: "certificates",
      label: "kontol",
      type: "arrayfield",
      title: "Sertifikat",
      fieldArray: [
        {
          id: "certificate",
          label: "Sertifikat",
          type: "file",
          placeholder: "Input the name",
        },
        {
          id: "description",
          label: "Deskripsi",
          type: "text",
          placeholder: "Input the name",
        },
      ],
      placeholder: "Input the name",
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
