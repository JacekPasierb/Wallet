import React from "react";
import { useSelector } from "react-redux";
import { transactions } from "../../redux/transactionsSelector";
import css from "./HomePage.module.css";

const HomePage = () => {
  const transactionsAll = useSelector(transactions);
  return (
    <ul>
      {transactionsAll.map(({ id, date, category, comment, sum }) => (
        <li key={id}>
          <table className={css.transactionTable}>
            <thead className={css.thead}>
              <tr className={css.headString}>
                <th className={css.headDate}>Date</th>
                <th className={css.headCategory}>Category</th>
                <th className={css.headComment}>Comment</th>
                <th className={css.headSum}>Sum</th>
              </tr>
            </thead>
            <tbody >
              <tr className={css.bodyString}>
                <td className={css.headDate}>{date}</td>
                <td className={css.headCategory}>{category}</td>
                <td className={css.headComment}>
                  {comment === "" ? "-" : comment}
                </td>

                <td className={css.headSum}>{sum}</td>
              </tr>
            </tbody>
          </table>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
