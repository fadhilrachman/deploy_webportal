"use client";
import Image from "next/image";
import { useFormik } from "formik";
import { Button } from "@chakra-ui/react";
import ExampleForm from "@/components/shared/exapmple-form";

export default function Home() {
  // const{}=useState()

  // const formik = useFormik({
  //   initialValues: { name: "" },
  // });
  // // formik.getFieldProps('na')
  // const dataForm = [
  //   {
  //     id: "name",
  //     label: "Name",
  //     type: "text",
  //     placeholder: "Input the name",
  //   },
  // ];

  return (
    <main>
      <Button>asdad</Button>
      asdad
      <ExampleForm />
    </main>
  );
}
