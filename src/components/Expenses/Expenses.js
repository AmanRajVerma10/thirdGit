import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
