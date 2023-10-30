import React, { useEffect, useState } from "react";
import css from "./ModalAddTransaction.module.css";
import { useDispatch } from "react-redux";
import { setIsModalAddTransactionOpen } from "../../redux/global/globalSlice";
import Header from "../Header/Header";
import Switch from "./Switch/Switch";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import transactionsOperations from "../../redux/transactions/transactionsOperations";
import {
  MyData,
  MySelect,
  MyTextArea,
  MyTextInput,
} from "./FormField/FormField";

const ModalAddTransaction = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  const dispatch = useDispatch();

  const onClickClose = () => {
    dispatch(setIsModalAddTransactionOpen(false));
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClickClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleSubmit = (values) => {
    console.log("valu", values);
    dispatch(
      transactionsOperations.addTransaction({
        sum: values.sum,
        comment: values.comment,
        date: values.date,
        income: isChecked,
        category: isChecked ? "income" : values.category,
      })
    );
  };
  return (
    <div className={css.backdrop}>
      {" "}
      <div className={css.modal}>
        <Formik
          initialValues={{
            comment: " ",
            sum: "",
            income: isChecked,
            category: "",
            date: new Date(),
          }}
          validationSchema={Yup.object({
            income: Yup.bool(),
            comment: Yup.string().max(150, "Must be 150 characters or less"),
            sum: Yup.number().required("Amount is required"),
            category: Yup.mixed().when("income", {
              is: true,
              then: () =>
                Yup.mixed().required("Please choose transaction category."),
              otherwise: () => Yup.mixed().notRequired(),
            }),
          })}
          onSubmit={(values, { resetForm }) => {
            console.log("hhh");
            handleSubmit(values);
            resetForm();

            onClickClose();
          }}
        >
          <Form className={css.form}>
            <p className={css.title}>Add transaction </p>

            <Switch
              name="income"
              checked={isChecked}
              onChange={handleCheckboxChange}
              type="checkbox"
            />

            {!isChecked && (
              <div className={css.selectWrapper}>
                <MySelect className={css.select} name="category">
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Main expenses">Main expenses</option>
                  <option value="Products">Products</option>
                  <option value="Car">Car</option>
                  <option value="Self care">Self care</option>
                  <option value="Child care">Child care</option>
                  <option value="Household products">Household products</option>
                  <option value="Education">Education</option>
                  <option value="Leisure">Leisure</option>
                </MySelect>
              </div>
            )}

            <div className={css.amountAndDate}>
              <div className={css.numberWrapper}>
                <MyTextInput
                  name="sum"
                  type="number"
                  placeholder="0.00"
                  className={css.amountInput}
                />
              </div>

              <div className={css.dateWrapper}>
                <MyData
                  name="date"
                  dateFormat="dd.MM.yyyy"
                  className={css.date}
                />
              </div>
            </div>

            <MyTextArea
              name="comment"
              type="text"
              placeholder="Comment"
              className={css.comment}
            />

            <button type="submit" className={`${css.btn} ${css.btnAdd}`}>
              Add
            </button>

            <button
              onClick={onClickClose}
              className={`${css.btn} ${css.btnClose}`}
            >
              cancel
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ModalAddTransaction;
