import { Box, Text } from "@chakra-ui/react";

export default function HeaderLoginPpdb() {
  return (
    <Box rounded="8px" bg="#90CDF4" h={115} p={3}>
      <Text fontSize="2xl" fontWeight={600} mb={3}>
        pendaftaran
      </Text>
      <Text>
        Berikut formulir pengisian pendaftaran PPDB SMA ABCD <br />
        periode 2023 / 2024
      </Text>
    </Box>
  );
}
