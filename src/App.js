import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

let newArr = [];
function App() {
  const [newExpenses, setNewExpenses] = useState(expenses);
  // const [filterYears, setFilterYears] = useState("2020");

  const addExpenseHandler = async (expense) => {
    // setNewExpenses((prevExpense) => {
    //   return [expense, ...prevExpense];
    // });
    getData()
  };

 
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://tracker-lesson-default-rtdb.firebaseio.com/expense.json"
      );
      const result = response.data;
      for (const key in result) {
        newArr.unshift(result[key]);
      }
      const showArr = newArr.map((item, index, array) => ({
        id: index + array.length,
        amount: item.amount,
        date: new Date(item.date),
        title: item.title,
      }));
      console.log(showArr);
      setNewExpenses([...showArr, ...expenses]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={newExpenses} />
    </div>
  );
}

export default App;
