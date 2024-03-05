import { Box, Text } from "@chakra-ui/react";

export default function HeaderLoginPpdb() {
  return (
    <Box rounded="8px" bg="#90CDF4" p={"20px 30px"}>
      <Text fontSize="2xl" fontWeight={600} mb={3}>
        Pendaftaran
      </Text>
      <Text>
        Berikut formulir pengisian pendaftaran PPDB SMA ABCD <br />
        periode 2023 / 2024
      </Text>
    </Box>
  );
}
