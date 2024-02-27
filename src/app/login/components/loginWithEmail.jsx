import FormGenerator from "@/components/shared/form-generator";
import { useFormik } from "formik";

export default function LoginWithPhoneEmail() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const dataForm = [
    {
      id: "email",
      label: "email",
      type: "text",
      placeholder: "No Hp",
      // colSpan: 1,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      // colSpan: 1,
    },
  ];
  return (
    <>
      <FormGenerator dataForm={dataForm} formik={formik} grid={2} id={"form-generator"} />
    </>
  );
}
