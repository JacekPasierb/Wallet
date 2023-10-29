import React from "react";
import btnAdd from "../../images/btnAdd.png";
import css from "./ButtonAddTransaction.module.css";

const ButtonAddTransaction = () => {
  return (
    <button className={`${css.button} ${css.position}`}>
      <img  className={css.iconn} src={btnAdd} />
    </button>
  );
};

export default ButtonAddTransaction;
