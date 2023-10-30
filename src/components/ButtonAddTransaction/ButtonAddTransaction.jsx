import React from "react";
import btnAdd from "../../images/btnAdd.png";
import css from "./ButtonAddTransaction.module.css";
import { useDispatch } from "react-redux";
import transactionsOperations from "../../redux/transactions/transactionsOperations";
import { setIsModalAddTransactionOpen } from "../../redux/global/globalSlice";

const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setIsModalAddTransactionOpen(true));
  }
  return (
    <button className={`${css.button} ${css.position}`} onClick={onClick}>
      <img  className={css.iconn} src={btnAdd} />
    </button>
  );
};

export default ButtonAddTransaction;
