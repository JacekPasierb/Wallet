import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./RegistrationPage.module.css";
import Frame from "../../images/Frame.png";
import ellipse2 from "../../images/Ellipse2.png";
import ellipse1 from "../../images/Ellipse1.png";
import blur from "../../images/blur.png";
export const RegistrationPage = () => {
  return (
    <div className={css.loginPage}>
      <div className={css.mobile}></div>
      <div className={css.tablet}>
        <div className={css.topSection}>
          <img className={css.svg} src={Frame} alt="SVG" />
          <p className={css.p}> Finance App</p>
          <img className={css.ellipse2} src={ellipse2} alt="Elipsa" />
        </div>
        <div className={css.bottomSection}>
          <img className={css.blur} src={blur} alt="Ractangle" />

          <img className={css.ellipse1} src={ellipse1} alt="Elipsa" />
        </div>
      </div>
    </div>
  );
};
