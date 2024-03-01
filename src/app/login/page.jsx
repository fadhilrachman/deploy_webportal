"use client";
import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import LoginWithPhoneNumber from "./components/loginWithPhoneNubmber";
// import HeaderLoginPpdb from "@/components/headerPpdb/headerLoginPpdb";
import LoginWithPhoneEmail from "./components/loginWithEmail";

const Login = () => {
  const [isUsingEmail, setIsUsingEmail] = useState(true);

  return (
    <Box px="49px" py="24px">
      {/* <HeaderLoginPpdb /> */}
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
          <Heading textAlign="center">Login Melalui Ezzi School</Heading>
          <Container display="flex" flexDir="column" gap="56px">
            <Box>
              {isUsingEmail ? (
                <LoginWithPhoneEmail />
              ) : (
                <LoginWithPhoneNumber />
              )}
              <Box textAlign="center" mt="16px">
                <Text
                  onClick={() => setIsUsingEmail(!isUsingEmail)}
                  cursor="pointer"
                  textDecoration="underline"
                  fontStyle="italic"
                >
                  Masuk Melalui {isUsingEmail ? "No Hp" : "Email"}
                </Text>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button bgColor="#2C5282" color="white" _hover="none">
                Masuk
              </Button>
            </Box>
          </Container>
        </Container>
      </Box>
    </Box>
  );
};

export default Login;
