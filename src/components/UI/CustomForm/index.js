import React from "react";
import useForm from "../../../hooks/useForm";

function CustomForm({ fields, validation, submitHandler }) {
  function getInitialValues(inputs) {
    const initialValues = {};

    inputs.forEach((field) => {
      if (!initialValues[field.name]) {
        initialValues[field.name] = field.value;
      }
    });

    return initialValues;
  }

  function renderTextField(input) {
    return (
      <div key={input.name}>
        <div>
          <label htmlFor={input.name}>{input.label}</label>
        </div>
        <div>
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={values[input.name]}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
      </div>
    );
  }

  const renderFields = (inputs) => {
    return inputs.map((input) => {
      switch (input.type) {
        default:
          return renderTextField(input);
      }
    });
  };

  const INITIAL_VALUES = getInitialValues(fields);

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
  } = useForm(INITIAL_VALUES, validation, submitHandler);

  return (
    <form onSubmit={handleSubmit}>
      {renderFields(fields)}
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}

export default CustomForm;
