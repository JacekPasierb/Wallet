import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "../../redux/auth/selectors";
import { useFormik } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
    },

    onSubmit: (values, { resetForm }) => {
      dispatch(
        register({
          name: values.firstName,
          email: values.email,
          password: values.password,
        })
      );

      resetForm();
    },
  });

  return (
    <div className={css.formWrapper}>
      {error ? <div>Error:{error.message}</div> : null}

      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div className={css.inputWrapper}>
          <label htmlFor="email">
            {/* <MdEmail className={css.icons} /> */}
          </label>
          <input
            className={css.input}
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="password">
            {/* <MdLock className={css.icons} /> */}
          </label>
          <input
            className={css.input}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="confirmPassword">
            {/* <MdLock className={css.icons} /> */}
          </label>
          <input
            className={css.input}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>

        <div className={css.inputWrapper}>
          <label htmlFor="firstName">
            {/* <BiSolidUserRectangle className={css.icons} /> */}
          </label>
          <input
            className={css.input}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className={css.btnWrapper}>
          <button className={`${css.btn} ${css.btnRegister}`} type="submit">
            Register
          </button>

          <Link className={`${css.btn} ${css.btnLogin}`} to="/login">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
