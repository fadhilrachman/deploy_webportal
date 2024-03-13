"use client";
import HeaderLoginPpdb from "@/components/PPDB/header";
import FormVerifikasi from "@/components/verifikasi/formVerifikasi";
import { Box, Container, Heading } from "@chakra-ui/react";

export default function Verifikasi() {
  return (
    <Box px="49px" py="24px">
      <HeaderLoginPpdb />
      <Box mt={45}>
        <Container
          maxW="100vw"
          h="696px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt="60px"
          bg=" #BEE3F8;"
          rounded={8}
          gap="56px"
        >
          <Heading textAlign="center">Verifikasi</Heading>
          <Container
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="56px"
          >
            <Box>
              <FormVerifikasi />
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}
