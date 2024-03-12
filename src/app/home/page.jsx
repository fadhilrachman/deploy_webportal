"use client";

import HeaderLoginPpdb from "@/components/PPDB/header";
import { useDataSchool } from "@/hooks/shared.hooks";
import axios from "@/lib/axios";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const subdomain = window.location.hostname.split(".")[0];
  const { data, errorMessage } = useDataSchool({ page: 1 });

  console.log({ data: data?.data?.find((res) => res.domain == subdomain) });

  const router = useRouter();
  return (
    <Box px={24} py={5} w="100%" h="100%">
      <HeaderLoginPpdb />
      <Box
        w="100%"
        h="400px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        my="40px"
        bg=" #BEE3F8;"
        rounded={8}
      >
        <Box textAlign="center" fontSize="20px" fontWeight={600}>
          <Text fontSize="40px" fontWeight={700} textAlign="center">
            SELAMAT DATANG PESERTA DIDIK BARU 2023/2024
          </Text>
          <Text>
            Sebelum mengisi formulir pendaftaran, silahkan register atau login
            terlebih dahulu
          </Text>
        </Box>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          gap="16px"
          pt="97px"
        >
          <Button
            href="/login"
            bgColor="#2C5282"
            color="white"
            _hover="none"
            onClick={() => router.push("/login")}
          >
            Login Melalui Akun Ezzi School
          </Button>
          <Link href="/register">Buat Akun Baru</Link>
        </Box>
      </Box>
    </Box>
  );
}
