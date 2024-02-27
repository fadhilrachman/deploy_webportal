"use client";

import { Box, Button, Flex, Grid, useSteps } from "@chakra-ui/react";
import MyStepper from "./components/Mysteper";
import FormRegister from "./components/formRegister";
import FormDataTambah from "./components/formDataTambah";
import FormUploadFolder from "./components/formUploadFolder";
import TableRecheck from "./components/tableRechek";
import HeaderLoginPpdb from "@/components/headerPpdb/headerLoginPpdb";

const steps = [{ title: "Data Diri" }, { title: "Data Tambahan" }, { title: "Upload Berkas" }, { title: "Cek Ulang" }];

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
    } else if (activeStep === 3) {
      return <TableRecheck />;
    }
  };

  return (
    <Box px="49px" py="24px">
      <Grid gap={16}>
        <HeaderLoginPpdb />
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
