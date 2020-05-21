import React from "react";
import { validateLogin } from "../../shared/validation";
import LoginForm from "../UI/CustomForm";

function Login() {
  const fields = [
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

  function handleLogin(values) {
    alert(JSON.stringify(values));
  }

  return (
    <>
      <h1>Login</h1>
      <LoginForm
        fields={fields}
        validation={validateLogin}
        submitHandler={handleLogin}
      />
    </>
  );
}

export default Login;