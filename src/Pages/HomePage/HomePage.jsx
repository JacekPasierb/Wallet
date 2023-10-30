import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./HomePage.module.css";
import ButtonAddTransaction from "../../components/ButtonAddTransaction/ButtonAddTransaction";
import transactionsOperations from "../../redux/transactions/transactionsOperations";
import { selectTransactions } from "../../redux/transactions/transactionsSelectors";
import { setTransactions } from "../../redux/transactions/transactionsSlice";
import { TransactionPagination } from "../../components/RegistrationForm/Pagination/Pagination";

const HomePage = () => {
  const dispatch = useDispatch();

  const transactionsAll = useSelector(selectTransactions);
  console.log(transactionsAll);
  return (
    <>
      <ButtonAddTransaction />

      {transactionsAll.length === 0 && (
        <p> You haven`t made any transactions yet</p>
      )}
      {transactionsAll.length > 0 &&
        transactionsAll.map(({ id, date, income, category, comment, sum }) => (
          <table
            key={id}
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
      <TransactionPagination/>
    </>
  );
};

export default HomePage;
