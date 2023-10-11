import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let [title, setTitle] = useState(props.title);
  const [amount, setAmount]= useState(props.amount);
  const clickHandler2 =()=>{
    setAmount(100);

  }
  const clickHandler = () => {
    setTitle("Updated");
    
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>At {props.place}</h2>
        <div className="expense-item__price">Rs {amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler2}>Make expense 100</button>
    </Card>
  );
};

export default ExpenseItem;
