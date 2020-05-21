import React from "react";
import useForm from "../../hooks/useForm";
import { validateRegister } from "../../shared/validation";

const INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

function Register() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
  } = useForm(INITIAL_VALUES, validateRegister, handleRegister);

  function handleRegister(values) {
    alert(JSON.stringify(values));
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input
              name="name"
              placeholder="Enter Your Full Name"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input
              name="email"
              placeholder="Your Email"
              value={values.email}
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
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button disabled={isSubmitting} type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
