import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">${props.expensePrice}</div>
        <button onClick={props.changeHandler}>Change title</button>

        {/* <button onClick={changedTitle}>changed title </button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
