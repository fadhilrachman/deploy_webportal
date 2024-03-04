"use client";

import { Box, Button, Flex, Grid, useSteps } from "@chakra-ui/react";
import {
  FormDataDiri,
  FormDataTambah,
  FormUploadBerkas,
  Stepper,
  TableRechek,
  HeaderPPDB,
} from "@/components/PPDB";
import { useRequestOtp } from "@/hooks/auth.hooks";
import { usePPDB } from "@/context/ppdb.context";
// import { useListDataPPDb } from "@/hooks/ppdb.hooks";

const steps = [
  { title: "Data Diri" },
  { title: "Data Tambahan" },
  { title: "Upload Berkas" },
  { title: "Cek Ulang" },
];

export default function Pepep() {
  const { create } = useRequestOtp();
  const { payload } = usePPDB();

  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });
  console.log({ payload });

  const form = {
    0: <FormDataDiri goToNext={goToNext} goToPrevious={goToPrevious} />,
    1: <FormDataTambah goToNext={goToNext} goToPrevious={goToPrevious} />,
    2: <FormUploadBerkas goToNext={goToNext} goToPrevious={goToPrevious} />,
    3: <TableRechek goToNext={goToNext} goToPrevious={goToPrevious} />,
  };

  return (
    <Box px="49px" py="24px">
      <Grid gap={16}>
        <HeaderPPDB />
        <Box rounded="8px" bg="#BEE3F8" h={156}>
          <Flex align="center" w="100%" h="100%" justify="center">
            <Stepper activeStep={activeStep} steps={steps} />
          </Flex>
        </Box>
      </Grid>

      <Box mt={45}>{form[activeStep]}</Box>
    </Box>
  );
}
