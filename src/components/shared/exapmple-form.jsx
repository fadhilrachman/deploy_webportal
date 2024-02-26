import React from "react";
import FormGenerator from "./form-generator";
import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Formik, useFormik } from "formik";

const ExampleForm = () => {
  const formik = useFormik({
    initialValues: { name: "" },
  });
  // formik.getFieldProps('na')
  const dataForm = [
    {
      type: "title",
      text: "Login Form",
      id: "asasdasdd",
      // colSpan: 1,
    },
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Input the name",
      colSpan: 1,
    },
    {
      id: "asdads",
      label: "Example Select",
      type: "select",
      options: [
        { label: "cuyy", value: "cuy" },
        { label: "asd", value: "cuys" },
        { label: "asdad", value: "cuya" },
      ],
      placeholder: "Input the name",
      colSpan: 1,
    },
    {
      id: "password",
      label: "Example Password",
      type: "password",
      placeholder: "Input the name",
    },
    {
      id: "confirmPassword",
      label: "Example Password",
      type: "password",
      placeholder: "Input the name",
    },
    {
      id: "number",
      label: "Example Number",
      type: "number",
      placeholder: "Input the name",
    },
    {
      id: "time",
      label: "Time",
      type: "time",
      placeholder: "Input the name",
    },
    {
      id: "date",
      label: "Date",
      type: "date",
      placeholder: "Input the name",
    },
    {
      id: "teaxarea",
      label: "Example Textarea",
      type: "textarea",
      placeholder: "Input the name",
    },
  ];

  console.log(formik.values);

  return (
    // <div>ExampleForm</div>
    <Box mx={40}>
      <Card>
        {/* <CardHeader></CardHeader> */}
        <CardBody>
          <FormGenerator dataForm={dataForm} formik={formik} id={"form-generator"} grid={2} />
        </CardBody>
      </Card>
    </Box>
  );
};

export default ExampleForm;
