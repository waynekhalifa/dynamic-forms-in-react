import React from "react";
import { validateRegister } from "../../shared/validation";
import RegisterForm from '../UI/CustomForm'

function Register() {
  const fields = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      placeholder: "Full Name",
      value: "",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Your Email",
      value: "",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Password",
      value: "",
    },
  ];

  function handleRegister(values) {
    alert(JSON.stringify(values));
  }

  return (
    <>
      <h1>Register</h1>
      <RegisterForm
        fields={fields}
        validation={validateRegister}
        submitHandler={handleRegister}
      />
    </>
  );
}

export default Register;
