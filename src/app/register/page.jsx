"use client";

import HeaderLoginPpdb from "@/components/PPDB/header";
import FormRegister from "@/components/register/formRegister";
import { Box } from "@chakra-ui/react";

export default function Register() {
  return (
    <Box px="49px" py="24px">
      <HeaderLoginPpdb />
      <Box mt={45}>
        <FormRegister />
      </Box>
    </Box>
  );
}
