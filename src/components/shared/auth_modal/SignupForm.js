import React, { useRef, createRef } from "react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";

import { validate } from "./signUpFormValidator";
import { cl } from "../countryList";

import { registerUser } from "../../../store/actions/user";

function SignupForm({ closeModal }) {
  const { addToast } = useToasts();
  const onSubmit = (values, { setSubmitting }) => {
    registerUser(values, setSubmitting, addToast)
      .then(() => {
        closeModal();
      })
      .catch(() => {
        formik.values.password = "";
        formik.values.rePassword = "";
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      country: "",
      password: "",
      rePassword: "",
      ts: false,
    },
    validate: validate,
    onSubmit: onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const refArray = [
    "nameRef",
    "nameInputRef",
    "surnameRef",
    "surnameInputRef",
    "emailRef",
    "emailInputRef",
    "passwordRef",
    "passwordInputRef",
    "rePasswordRef",
    "rePasswordInputRef",
  ];

  let signUpRefs = useRef({});

  for (let i = 0; i < refArray.length; i++) {
    signUpRefs.current[refArray[i]] = createRef();
  }

  const {
    nameRef,
    nameInputRef,
    surnameRef,
    surnameInputRef,
    emailRef,
    emailInputRef,
    passwordRef,
    passwordInputRef,
    rePasswordRef,
    rePasswordInputRef,
  } = signUpRefs.current;

  const floatPlaceholder = (ref) => {
    ref.current.classList.add("focused");
  };
  const unshiftPlaceholder = (ref) => {
    if (ref.current) {
      if (ref.current.classList.contains("focused")) {
        ref.current.classList.remove("focused");
      }
    }
  };

  const countrySelect = () =>
    cl.map((i, k) => (
      <option key={k} value={i.value} label={i.label}>
        {i.label}
      </option>
    ));

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          onFocus={() => floatPlaceholder(nameRef)}
          onBlur={() => unshiftPlaceholder(nameRef)}
          className={formik.errors.name ? "input-error" : null}
          ref={nameInputRef}
        />
        <span
          onClick={() => nameInputRef.current.focus()}
          ref={nameRef}
          className={
            formik.values.name.length > 0 ? "placeholder filled" : "placeholder"
          }
        >
          name
        </span>
        {formik.errors.name && (
          <p className="input-error-msg">{formik.errors.name}</p>
        )}
      </div>
      <div className="input-container">
        <input
          id="surname"
          name="surname"
          type="surname"
          onChange={formik.handleChange}
          value={formik.values.surname}
          onFocus={() => floatPlaceholder(surnameRef)}
          onBlur={() => unshiftPlaceholder(surnameRef)}
          className={formik.errors.surname ? "input-error" : null}
          ref={surnameInputRef}
        />
        <span
          onClick={() => surnameInputRef.current.focus()}
          ref={surnameRef}
          className={
            formik.values.surname.length > 0
              ? "placeholder filled"
              : "placeholder"
          }
        >
          surname
        </span>

        {formik.errors.surname && (
          <p className="input-error-msg">{formik.errors.surname}</p>
        )}
      </div>
      <div className="input-container">
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onFocus={() => floatPlaceholder(emailRef)}
          onBlur={() => unshiftPlaceholder(emailRef)}
          className={formik.errors.email ? "input-error" : null}
          ref={emailInputRef}
        />
        <span
          onClick={() => emailInputRef.current.focus()}
          ref={emailRef}
          className={
            formik.values.email.length > 0
              ? "placeholder filled"
              : "placeholder"
          }
        >
          email
        </span>
        {formik.errors.email && (
          <p className="input-error-msg">{formik.errors.email}</p>
        )}
      </div>
      <div className="input-container">
        <select
          className={formik.errors.country ? "input-error" : null}
          name="country"
          id="country"
          onChange={formik.handleChange}
        >
          <option value="0" label="Select a country ... ">
            Select a country ...{" "}
          </option>

          {countrySelect()}
        </select>
      </div>
      <div className="input-container">
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onFocus={() => floatPlaceholder(passwordRef)}
          onBlur={() => unshiftPlaceholder(passwordRef)}
          className={formik.errors.password ? "input-error" : null}
          ref={passwordInputRef}
        />
        <span
          onClick={() => passwordInputRef.current.focus()}
          ref={passwordRef}
          className={
            formik.values.password.length > 0
              ? "placeholder filled"
              : "placeholder"
          }
        >
          password
        </span>

        {formik.errors.password && (
          <p className="input-error-msg">{formik.errors.password}</p>
        )}
      </div>
      <div className="input-container" style={{ marginBottom: "20px" }}>
        <input
          id="rePassword"
          name="rePassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.rePassword}
          onFocus={() => floatPlaceholder(rePasswordRef)}
          onBlur={() => unshiftPlaceholder(rePasswordRef)}
          className={formik.errors.rePassword ? "input-error" : null}
          ref={rePasswordInputRef}
        />
        <span
          onClick={() => rePasswordInputRef.current.focus()}
          ref={rePasswordRef}
          className={
            formik.values.rePassword.length > 0
              ? "placeholder filled"
              : "placeholder"
          }
        >
          retype password
        </span>

        {formik.errors.rePassword && (
          <p className="input-error-msg">{formik.errors.rePassword}</p>
        )}
      </div>
      <button type="submit" disabled={formik.isSubmitting}>
        Sign In
      </button>
      <div className="terms">
        <input
          type="checkbox"
          name="ts"
          id="ts"
          onChange={formik.handleChange}
          className={formik.errors.ts ? "input-error" : null}
        />
        <span className={formik.errors.ts ? "input-error" : null}>
          By clicking "SIGN UP" you agree to the{" "}
          <a href="/terms" target="_blank" rel="noreferrer">
            Terms of Service
          </a>
        </span>
      </div>
    </form>
  );
}

export default SignupForm;
