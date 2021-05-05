import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";

function ContactForm({ user }) {
  const { addToast } = useToasts();

  const onSubmit = (values, { setSubmitting }) => {
    addToast("Email has been sent. We'll get in touch as soon as possible", {
      appearance: "info",
    });
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "name is required";
    } else if (values.name.length < 2) {
      errors.name = "name must be at least 8 characters length";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "invalid email address";
    }
    if (!values.message) {
      errors.message = "message is required";
    } else if (values.message.length < 6) {
      errors.message = "message must be at least 6 characters length";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validate: validate,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    if (user.isAuthenticated) {
      formik.values.name = `${user.user.name} ${user.user.surname}`;
      formik.values.email = user.user.email;
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="cont-name"
        name="name"
        type="text"
        placeholder="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        disabled={user.isAuthenticated}
        className={`contact-input ${
          formik.errors.name && "contact-input-error"
        }`}
      />
      <input
        id="cont-email"
        name="email"
        type="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        disabled={user.isAuthenticated}
        className={`contact-input ${
          formik.errors.email && "contact-input-error"
        }`}
      />
      <textarea
        id="cont-message"
        name="message"
        type="text"
        placeholder="message"
        onChange={formik.handleChange}
        value={formik.values.message}
        className={`contact-input ${
          formik.errors.message && "contact-input-error"
        }`}
      />
      <button type="submit" disabled={formik.isSubmitting}>
        SEND
      </button>
    </form>
  );
}

export default ContactForm;
