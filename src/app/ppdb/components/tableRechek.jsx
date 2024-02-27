import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Box, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

export default function TableRecheck() {
  return (
    <Box>
      <Alert status="error" rounded={8} mb="56px">
        <AlertIcon />
        <AlertDescription>
          Anda berada pada halaman terakhir pendaftaran, mohon cek kembali data yang sudah anda masukkan, pastikan data sesuai dan tidak ada yang salah. Bila ada kesalahan pada pengisian, mohon kembali kehalaman yang harus anda ubah
        </AlertDescription>
      </Alert>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
