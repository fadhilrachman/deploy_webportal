"use client";
import { Button } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const params = useParams();
  const [increment, setIncrement] = useState("");
  console.log({ params });
  return (
    <div>
      <Button></Button>
    </div>
  );
};

export default page;
