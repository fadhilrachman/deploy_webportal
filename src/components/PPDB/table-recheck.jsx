import { usePPDB } from "@/context/ppdb.context";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ModalSubmit from "./modal-submit";
import moment from "moment";

const TableRechek = ({ goToPrevious }) => {
  // const { data } = useDetailSiswa(id);
  const [dialog, setDialog] = useState({ certificate: null, approval: "" });
  // const payload = data?.data;
  const [image, setImage] = useState("");
  const { payload } = usePPDB();
  const dataProfile = [
    {
      label: "Name Lengkap",
      value: payload?.fullName || "-",
    },
    {
      label: "Email",
      value: payload?.email || "-",
    },
    { label: "NISN", value: payload?.nisn || "-" },
    {
      label: "Jenis Kelamin",
      value: payload?.genders || "-",
    },
    {
      label: "Tempat / Tanggal Lahir",
      value: payload?.dob
        ? `${payload?.pob}, ${moment(payload?.dob).format("DD MMMM YYYY")}`
        : "-",
    },
    {
      label: "Agama",
      value: payload?.religion || "-",
    },
    {
      label: "Alamat Lengkap",
      value: payload?.address || "-",
    },
    {
      label: "No Hp",
      value: payload?.phone || "-",
    },
  ];

  const dataBackground = [
    {
      label: "Asal Sekolah",
      value: payload?.schoolOrigin || "-",
    },
    { label: "Tahun Lulus", value: payload?.graduationYear || "-" },
    {
      label: "Lama Sekolah",
      value: payload?.graduationYearOld || "-",
    },
    {
      label: "Alamat Sekolah",
      value: payload?.addresSchoolOld || "-",
    },
  ];

  const dataPedigree = [
    {
      label: "Nama Lengkap",
      value: payload?.pedigree?.fullName || "-",
    },
    {
      label: "NIK",
      value: payload?.pedigree?.nik || "-",
    },
    {
      label: "Alamat",
      value: payload?.pedigree?.address || "-",
    },
    {
      label: "Pekerjaan",
      value: payload?.pedigree?.job || "-",
    },
  ];

  const dataUpload = [
    {
      label: "Akta Lahir",
      value: payload?.birthCertificateFile ? (
        <Text
          onClick={() => {
            if (Array.isArray(payload?.birthCertificateFile)) {
              setDialog({
                certificate: URL.createObjectURL(
                  payload?.birthCertificateFile[0]
                ),
              });
            } else {
              setDialog({ certificate: payload?.birthCertificateFile });
            }
          }}
          fontSize={"sm"}
          color={"blue"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {Array.isArray(payload?.birthCertificateFile)
            ? payload?.birthCertificateFile?.map((file) => file.name)
            : payload?.birthCertificateFile}
        </Text>
      ) : (
        "-"
      ),
    },
    {
      label: "Kartu Keluarga",
      value: payload?.familyCardFile ? (
        <Text
          fontSize={"sm"}
          color={"blue"}
          onClick={() => {
            if (Array.isArray(payload?.familyCardFile)) {
              setDialog({
                certificate: URL.createObjectURL(payload?.familyCardFile[0]),
              });
            } else {
              setDialog({ certificate: payload?.familyCardFile });
            }
          }}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {Array.isArray(payload?.familyCardFile)
            ? payload?.familyCardFile?.map((file) => file.name)
            : payload?.familyCardFile}
        </Text>
      ) : (
        "-"
      ),
    },
    {
      label: "KTP",
      value: payload?.ktpFile ? (
        <Text
          fontSize={"sm"}
          onClick={() => {
            if (Array.isArray(payload?.ktpFile)) {
              setDialog({
                certificate: URL.createObjectURL(payload?.ktpFile[0]),
              });
            } else {
              setDialog({ certificate: payload?.ktpFile });
            }
          }}
          color={"blue"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {Array.isArray(payload?.ktpFile)
            ? payload?.ktpFile?.map((file) => file.name)
            : payload?.ktpFile}
        </Text>
      ) : (
        "-"
      ),
    },
    {
      label: "Surat Keterangan Lulus",
      value: payload?.certificateOfGraduationFile ? (
        <Text
          fontSize={"sm"}
          onClick={() => {
            if (Array.isArray(payload?.certificateOfGraduationFile)) {
              setDialog({
                certificate: URL.createObjectURL(
                  payload?.certificateOfGraduationFile[0]
                ),
              });
            } else {
              setDialog({ certificate: payload?.certificateOfGraduationFile });
            }
          }}
          color={"blue"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {Array.isArray(payload?.certificateOfGraduationFile)
            ? payload?.certificateOfGraduationFile?.map((file) => file.name)
            : payload?.certificateOfGraduationFile}
        </Text>
      ) : (
        "-"
      ),
    },
    {
      label: "Raport",
      value: payload?.raportFile ? (
        <Text
          fontSize={"sm"}
          color={"blue"}
          onClick={() => {
            if (Array.isArray(payload?.raportFile)) {
              setDialog({
                certificate: URL.createObjectURL(payload?.raportFile[0]),
              });
            } else {
              setDialog({ certificate: payload?.raportFile });
            }
          }}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          {Array.isArray(payload?.raportFile)
            ? payload?.raportFile?.map((file) => file.name)
            : payload?.raportFile}
        </Text>
      ) : (
        "-"
      ),
    },
    // ...payload?.certificates?.map((val) => ({
    //   label: val?.description,
    //   value: val?.certificate ? (
    //     <Text
    //       fontSize={'sm'}
    //       onClick={() => {
    //         setDialog({ certificate: val?.certificate });
    //       }}
    //       color={'blue'}
    //       textDecoration={'underline'}
    //       cursor={'pointer'}
    //     >
    //       {val?.certificate}
    //     </Text>
    //   ) : (
    //     '-'
    //   ),
    // })),
  ];
  return (
    <Box m={5} p={5} bgColor="white" backdropFilter="blur(8px)">
      <Text fontSize={"2xl"}>Data Pendaftaran Peserta Didik</Text>
      {/* <Divider /> */}
      <TableContainer mt={5}>
        <Table variant="simple">
          <Thead>
            <Tr backgroundColor={"#E8F7FD"}>
              <Th colSpan={2} fontSize={"20px"} py={5}>
                DATA DIRI PESERTA
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataProfile.map((val, key) => {
              return (
                <Tr key={key}>
                  <Td>{val.label}</Td>
                  <Td>{val.value}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer mt={5}>
        <Table variant="simple">
          <Thead>
            <Tr backgroundColor={"#E8F7FD"}>
              <Th colSpan={2} fontSize={"20px"} py={5}>
                LATAR BELAKANG PESERTA
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataBackground.map((val, key) => {
              return (
                <Tr key={key}>
                  <Td>{val.label}</Td>
                  <Td>{val.value}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer mt={5}>
        <Table variant="simple">
          <Thead>
            <Tr backgroundColor={"#E8F7FD"}>
              <Th colSpan={2} fontSize={"20px"} py={5}>
                DATA ORANG TUA
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataPedigree.map((val, key) => {
              return (
                <Tr key={key}>
                  <Td>{val.label}</Td>
                  <Td>{val.value}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer mt={5}>
        <Table variant="simple">
          <Thead>
            <Tr backgroundColor={"#E8F7FD"}>
              <Th colSpan={2} fontSize={"20px"} py={5}>
                DATA UPLOAD BERKAS
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {dataUpload.map((val, key) => {
              return (
                <Tr key={key}>
                  <Td>{val.label}</Td>
                  <Td>{val.value}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
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
            // formik.handleSubmit();
            goToPrevious();
          }}
        >
          Kembali
        </Button>
        <Button
          bgColor="#2C5282"
          onClick={() => {
            setDialog({ approval: true });
          }}
          color="white"
          _hover={"none"}
          type="button"
        >
          Daftar
        </Button>
      </Box>
      <Modal
        isOpen={!!dialog.certificate}
        onClose={() => {
          setDialog({ certificate: null });
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail Gambar</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={dialog.certificate}
              objectFit="cover"
              // height={"100px"}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <ModalSubmit
        isOpen={dialog.approval}
        onClose={() => {
          setDialog({ approval: false });
        }}
      />
    </Box>
  );
};

export default TableRechek;
