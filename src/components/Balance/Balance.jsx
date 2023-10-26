import React from "react";
import css from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={css.balanceBox}>
      <p className={css.headerVisibility}>YOUR BALANCE</p>
      <div className={css.balanceBox__content}>
        <p>$</p>
        <p>1000</p>
      </div>
    </div>
  );
};

export default Balance;
