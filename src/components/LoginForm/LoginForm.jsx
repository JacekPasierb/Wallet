import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import css from "./LoginForm.module.css";
import LogoEmail from "../../images/LogoEmail.png";
import LogoPassword from "../../images/LogoPassword.png";
import Logo from "../../images/Logo.png";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email adress")
    .required("Email adress is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password can have up to 12 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const handleSubmit = () =>{}
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.loginFormContainer} autoComplete="off">
        <img className={css.logoSvg} src={Logo} alt="wallet icon" />
        <div className={css.inputContainer}>
          <img className={css.inputIcon} src={LogoEmail} alt="Email icon" />
          <Field type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div className={css.inputContainer}>
          <img
            className={css.inputIcon}
            src={LogoPassword}
            alt="Password icon"
          />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <div className={css.buttonContainer}>
          <button className={`${css.button} ${css.loginButton}`} type="submit">
            LOG IN
          </button>
          <Link to="/register">
            <button
              className={`${css.button} ${css.registrationButton}`}
              type="submit"
            >
              REGISTER
            </button>
          </Link>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;

{
  /* <form className={css.form}>
  <div className={css.inputContainer}>
    <label htmlFor="email"></label>
    <img className={css.inputIcon} src={LogoEmail} />
    <input
      className={css.input}
      type="email"
      name="email1"
      placeholder="E-mail"
    />
  </div>
  <div className={css.inputContainer}>
    <label htmlFor="password"></label>
    <img className={css.inputIcon} src={LogoPassword} />
    <input
      className={css.input}
      type="password"
      name="password"
      placeholder="Password"
    />
  </div>
  <button type="button">LOG IN </button>
  <button type="button">REGISTER</button>
</form> */
}
