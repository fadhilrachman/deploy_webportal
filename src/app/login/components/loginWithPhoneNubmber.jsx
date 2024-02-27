import FormGenerator from "@/components/shared/form-generator";
import { useFormik } from "formik";

export default function LoginWithPhoneNumber() {
  const formik = useFormik({
    initialValues: {
      phone: null,
      password: "",
    },
  });
  const dataForm = [
    {
      id: "phone",
      label: "No Hp",
      type: "number",
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
