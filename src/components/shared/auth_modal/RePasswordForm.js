import React, { useRef } from "react";
import { useFormik } from "formik";

function RePasswordForm() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "invalid email address";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const formik = useFormik({
    initialValues: { email: "" },
    validate: validate,
    onSubmit: onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const emailRef = useRef();
  const emailInputRef = useRef();

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
      <button type="submit" style={{ marginTop: "10px" }}>
        Send
      </button>
    </form>
  );
}

export default RePasswordForm;
