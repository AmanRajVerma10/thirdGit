import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })
  let expenseContent=<p> No Expense Found </p>;
  if(filteredExpenses.length>0)
  {
    expenseContent=filteredExpenses.map((expenses) => (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        place={expenses.place}
      ></ExpenseItem>
    ))
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={FilterChangeHandler}
        ></ExpensesFilter>
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
