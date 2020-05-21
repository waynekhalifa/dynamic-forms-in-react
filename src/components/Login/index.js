import React from "react";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../shared/validation";

const INITIAL_VALUES = {
  email: "",
  password: "",
};

function Login() {
  function handleLogin(values) {
    alert(JSON.stringify(values));
  }

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
  } = useForm(INITIAL_VALUES, validateLogin, handleLogin);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              name="email"
              placeholder="Your Email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
          </div>
          <div>
            <input
              name="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.email}</p>}
          </div>
        </div>
        <button disabled={isSubmitting} type="submit">
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
