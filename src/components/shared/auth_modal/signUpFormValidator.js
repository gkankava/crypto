export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "name is required";
  } else if (values.name.length < 2) {
    errors.name = "name must be at least 2 characters length";
  }
  if (!values.surname) {
    errors.surname = "surname is required";
  } else if (values.surname.length < 2) {
    errors.surname = "surname must be at least 2 characters length";
  }
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "invalid email address";
  }
  if (!values.country) {
    errors.country = "country is required";
  } else if (values.country === "0") {
    errors.country = "country is required";
  }
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 8) {
    errors.password = "password must be at least 8 characters length";
  }
  if (!values.rePassword) {
    errors.rePassword = "retype password";
  } else if (values.rePassword !== values.password) {
    errors.rePassword = "passwords don't match";
  }
  if (!values.ts) {
    errors.ts = "country is required";
  }
  return errors;
};
