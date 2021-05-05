import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";
import ReCAPTCHA from "react-google-recaptcha";

import { authUser } from "../../../store/actions/user";

function LoginForm({ resetPassword, setCurrentUser, closeModal }) {
  const { addToast } = useToasts();
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "invalid email address";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 8) {
      errors.password = "password must be at least 8 characters length";
    }
    if (!reToken) {
      errors.reCa = "reCaptcha is required";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    authUser(values, setSubmitting, setCurrentUser, addToast).then(() => {
      closeModal();
    });
    reRef.current.reset();
    setReToken();
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: validate,
    onSubmit: onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const emailRef = useRef();
  const emailInputRef = useRef();
  const passwordRef = useRef();
  const passwordInputRef = useRef();

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

  //recaptcha

  const reRef = useRef();
  const [reToken, setReToken] = useState();

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <div onClick={() => resetPassword(true)} className="reset-password">
        Forgot your password?
      </div>
      <button type="submit" disabled={formik.isSubmitting}>
        Sign In
      </button>
      <ReCAPTCHA
        sitekey={process.env.REACT_APP_RE_SITE_KEY}
        onChange={(val) => setReToken(val)}
        ref={reRef}
      />
      {formik.errors.reCa && (
        <p className="input-error-msg">{formik.errors.reCa}</p>
      )}
    </form>
  );
}

export default LoginForm;
