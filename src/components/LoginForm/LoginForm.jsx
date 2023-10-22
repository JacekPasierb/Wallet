import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

import css from "./LoginForm.module.css";
import LogoEmail from "../../images/LogoEmail.png";
import LogoPassword from "../../images/LogoPassword.png";
import Logo from "../../images/Logo.png";

const LoginForm = () => {
  return (
    <Formik initialValues={{ email: "", password: "" }}>
      <Form className={css.loginFormContainer}>
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
          <button
            className={`${css.button} ${css.registrationButton}`}
            type="submit"
          >
            REGISTER
          </button>
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
