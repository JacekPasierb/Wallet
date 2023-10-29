import React from "react";
import { useSelector } from "react-redux";
import { transactions } from "../../redux/transactionsSelector";
import css from "./HomePage.module.css";
import ButtonAddTransaction from "../../components/ButtonAddTransaction/ButtonAddTransaction";

const HomePage = () => {
  const transactionsAll = useSelector(transactions);
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
    </>
  );
};

export default HomePage;
