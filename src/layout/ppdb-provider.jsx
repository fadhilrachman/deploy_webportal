"use client";
import SchoolNoutFound from "@/app/school-not-found/page";
import { useShared } from "@/context/shared.context";
import { useDataSchool } from "@/hooks/shared.hooks";
import React, { useEffect } from "react";

const PpdbProvider = ({ children }) => {
  const subdomain = window.location.hostname.split(".")[0];
  const { data, errorMessage } = useDataSchool({ page: 1 });
  const { idSchool, schoolName } = useShared();

  console.log({ idSchool, schoolName });
  return idSchool ? children : <SchoolNoutFound />;
};

export default PpdbProvider;
