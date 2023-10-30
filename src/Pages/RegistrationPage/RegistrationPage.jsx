import React from "react";

import css from "./RegistrationPage.module.css";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
export const RegistrationPage = () => {
  return (
    <div className={css.pageContainer}>
      <div className={css.content}>
        <div className={css.desktopLogo}>
          <h2 className={css.headerRegistration}>Finance App</h2>
        </div>
        <div className={css.registrationFormContainer}>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};
