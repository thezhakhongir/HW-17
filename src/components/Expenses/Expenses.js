import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {

  const [selectedYear, setSelectedYear] = useState("All");

  const selectChangeHandler = ({ target: { value } }) => {
    setSelectedYear(value);
  };

  const getCurrentExpenses = () => {
    if (selectedYear === 'All') {
      return expenses
    }
    return expenses.filter((expense) => (
      expense.date.getFullYear().toString() === selectedYear.toString()
    ))
  }
  const renderedExpenses = getCurrentExpenses()

  return (
    <Card className="expenses">
      <ExpensesChart item={renderedExpenses}/>
      <ExpensesFilter selectedYear={selectedYear} onchangeSelectedYear={selectChangeHandler} />
      <ExpensesList item={renderedExpenses} />
    </Card>
  );
}

export default Expenses;
