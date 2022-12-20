import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ item }) => {
    if (item.length < 0) {
        return <h1 className="">No Expenses Found</h1>
    }
  return (
    <div>
      {item.map((item) => {
        return (
          <ExpenseItem
            expenseTitle={item.title}
            expensePrice={item.amount}
            expenseDate={item.date}
            // changeHandler={changeHandler}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default ExpensesList;
