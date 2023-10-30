import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./HomePage.module.css";
import ButtonAddTransaction from "../../components/ButtonAddTransaction/ButtonAddTransaction";
import transactionsOperations from "../../redux/transactions/transactionsOperations";
import { selectTransactions } from "../../redux/transactions/transactionsSelectors";
import { setTransactions } from "../../redux/transactions/transactionsSlice";
import { TransactionPagination } from "../../components/RegistrationForm/Pagination/Pagination";
import { setIsModalAddTransactionOpen } from "../../redux/global/globalSlice";
import { selectIsModalAddTransactionOpen } from "../../redux/global/globalSelectors";
import ModalAddTransaction from "../../components/ModalAddTransaction/ModalAddTransaction";

const HomePage = () => {
  const dispatch = useDispatch();
  const transactionsAll = useSelector(selectTransactions);
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );
  useEffect(() => {
     if (!isModalAddTransactionOpen) {
       dispatch(transactionsOperations.getTransactions({ page: 1 }));
     }
  }, [isModalAddTransactionOpen]);

  return (
    <>
      <ButtonAddTransaction />
      {isModalAddTransactionOpen && <ModalAddTransaction />}
      {transactionsAll.length === 0 && (
        <p> You haven`t made any transactions yet</p>
      )}
      {transactionsAll.length > 0 &&
        transactionsAll.map(({ _id, date, income, category, comment, sum }) => (
          <table
            key={_id}
            className={`${css.transactionTable} ${
              income ? css.income : css.expens
            }`}
          >
            <tbody className={css.tbody}>
              <tr className={css.tableR}>
                <td className={css.tableH}>Date</td>
                <td className={css.tableD}>{date}</td>
              </tr>
              <tr className={css.tableR}>
                <td className={css.tableH}>Type</td>
                <td className={css.tableD}>{income ? "+" : "-"}</td>
              </tr>
              <tr className={css.tableR}>
                <td className={css.tableH}>Category</td>
                <td className={css.tableD}>{category}</td>
              </tr>
              <tr className={css.tableR}>
                <td className={css.tableH}>Comment</td>
                <td className={css.tableD}>{comment || "-"}</td>
              </tr>
              <tr className={css.tableR}>
                <td className={css.tableH}>Sum</td>
                <td className={`${income ? css.incomeSum : css.expensSum}`}>
                  {sum}
                </td>
              </tr>
              <tr className={css.tableR}>
                <td className={css.tableH}>
                  <button type="button" className={css.btnDelete}>
                    Delete
                  </button>
                </td>
                <td className={css.tableD}>
                  <button className={css.editBtn}>
                    <p className={css.btnText}>Edit</p>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ))}
      {/* <TransactionPagination/> */}
    </>
  );
};

export default HomePage;
