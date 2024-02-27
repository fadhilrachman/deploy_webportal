"use client";

import { Box, Button, Flex, Grid, Text, flexbox, useSteps } from "@chakra-ui/react";
import MyStepper from "./components/steper";
import FormRegister from "./components/formRegister";
import FormDataTambah from "./components/formDataTambah";
import FormUploadFolder from "./components/formUploadFolder";
import { color } from "framer-motion";

const steps = [
  { title: "Data Diri", description: "Contact Info" },
  { title: "Data Tambahan", description: "Date & Time" },
  { title: "Upload Berkas", description: "Select Rooms" },
  { title: "Cek Ulang", description: "Select Rooms" },
];

export default function Pepep() {
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });

  const renderForm = () => {
    if (activeStep === 0) {
      return <FormRegister />;
    } else if (activeStep === 1) {
      return <FormDataTambah />;
    } else if (activeStep === 2) {
      return <FormUploadFolder />;
    }
  };

  return (
    <Box px={24} py={16}>
      <Grid gap={16}>
        <Box rounded="8px" bg="#BEE3F8" h={115} p={3}>
          <Text fontSize="2xl" fontWeight={600} mb={3}>
            pendaftaran
          </Text>
          <Text>
            Berikut formulir pengisian pendaftaran PPDB SMA ABCD <br />
            periode 2023 / 2024
          </Text>
        </Box>
        <Box rounded="8px" bg="#BEE3F8" h={156}>
          <Flex align="center" w="100%" h="100%" justify="center">
            <MyStepper activeStep={activeStep} steps={steps} />
          </Flex>
        </Box>
      </Grid>
      <Box mt={45}>{renderForm()}</Box>

      <Box display="flex" justifyContent="end" alignItems="center" pt={16} gap={4}>
        <Button onClick={() => goToPrevious()}>Kembali</Button>
        <Button bgColor="#2C5282" color="white" _hover={"none"} onClick={() => goToNext()}>
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
}
