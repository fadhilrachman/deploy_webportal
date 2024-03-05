"use client";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginWithPhoneNumber from "../../components/login/login-with-phone";
import LoginWithEmail from "../../components/login/login-with-email";
import HeaderLoginPpdb from "@/components/PPDB/header";

const Login = () => {
  const [isUsingEmail, setIsUsingEmail] = useState(true);

  return (
    <Box px="49px" py="24px">
      <HeaderLoginPpdb />
      <Box mt={45}>
        {isUsingEmail ? (
          <LoginWithEmail setIsUsingEmail={setIsUsingEmail} />
        ) : (
          <LoginWithPhoneNumber setIsUsingEmail={setIsUsingEmail} />
        )}
      </Box>
    </Box>
  );
};

export default Login;
