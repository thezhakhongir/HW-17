import axios from "axios";
import React, { useState } from "react";
import "./ExpenseForm.css";

const defaultValues = {
  enteredTitle: "",
  enteredDate: "",
  enteredAmount: "",
};

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(defaultValues);

  const submitHandler = async (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    await postData(expenseData);

    props.onSaveExpenseData(expenseData);

    setUserInput(defaultValues);
  };

  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://tracker-lesson-default-rtdb.firebaseio.com/expense.json",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const changeValuesHadler = (key) => {
    return (event) => {
      setUserInput((prevState) => {
        return {
          ...prevState,
          [key]: event.target.value,
        };
      });
    };
  };

  // const isFormNotFilled = Object.values(userInput).some((value) => !value)
  // if (!isFormNotFilled) {
  //   return alert('Please, fill all fields')
  // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={changeValuesHadler("enteredTitle")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            onChange={changeValuesHadler("enteredAmount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enteredDate}
            onChange={changeValuesHadler("enteredDate")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
