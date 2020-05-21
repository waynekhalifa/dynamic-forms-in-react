import React from "react";

function useForm(initialValues, validate, onSubmit) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        onSubmit(values);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}

export default useForm;
