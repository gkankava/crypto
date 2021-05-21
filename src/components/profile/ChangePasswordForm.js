import React from "react";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";

import { changePassword } from "../../store/actions/user";

function ChangePasswordForm() {
  const { addToast } = useToasts();

  const validate = (values) => {
    const errors = {};
    if (!values.currentPassword) {
      errors.currentPassword = "current password is required";
    }
    if (!values.newPassword) {
      errors.newPassword = "new password is required";
    } else if (values.newPassword.length < 8) {
      errors.newPassword = "password must be at least 8 characters length";
    }
    if (!values.reNewPassword) {
      errors.reNewPassword = "retype password";
    } else if (values.reNewPassword !== values.newPassword) {
      errors.reNewPassword = "passwords don't match";
    }
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    changePassword(
      {
        current_password: values.currentPassword,
        new_password: values.newPassword,
      },
      addToast,
      setSubmitting
    );
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: { currentPassword: "", newPassword: "", reNewPassword: "" },
    validate: validate,
    onSubmit: onSubmit,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <form className="reset-pass-form" onSubmit={formik.handleSubmit}>
      <input
        id="currentPassword"
        name="currentPassword"
        type="password"
        placeholder="Current Password"
        onChange={formik.handleChange}
        value={formik.values.currentPassword}
        className={
          formik.errors.currentPassword
            ? "reset-input reset-input-error"
            : "reset-input"
        }
      />

      <input
        id="newPassword"
        name="newPassword"
        type="password"
        placeholder="New Password"
        onChange={formik.handleChange}
        value={formik.values.newPassword}
        className={
          formik.errors.newPassword
            ? "reset-input reset-input-error"
            : "reset-input"
        }
      />
      <input
        id="reNewPassword"
        name="reNewPassword"
        type="password"
        placeholder="Repeat New Password"
        onChange={formik.handleChange}
        value={formik.values.reNewPassword}
        className={
          formik.errors.reNewPassword
            ? "reset-input reset-input-error"
            : "reset-input"
        }
      />
      <button id="reset-btn" type="submit" disabled={formik.isSubmitting}>
        Save Changes
      </button>
    </form>
  );
}

export default ChangePasswordForm;
