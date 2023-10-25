import React from "react";
//import grraphocs
import LogoHeaderMobile from "../../images/LogoHeaderMobile.png";
import icon from "../../svg/exitHeaderMobile.svg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <div className={css.headerLogo}>
        <img src={LogoHeaderMobile} />
      </div>
      <div className={css.headerUser}>
        <span className={css.userName}>Name</span>
              <button className={ css.exitBtn}type="button">
                  <svg className={css.exitBtn__icon} width="18" height="18">
            <use href={icon + `#icon__exit`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
