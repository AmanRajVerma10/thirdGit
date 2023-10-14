import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses= [
  {id:'e1', title: 'Car Insurance', amount: '15000' , place: 'Kolkata', date: new Date(2020,2,23)},
  {id:'e2', title: 'New TV', amount: '55000' , place: 'Kolkata' , date: new Date(2021,3,23)},
  {id:'e3', title: 'New Phone', amount: '95000' , place: 'Noida', date: new Date(2021,5,27)},
  {id:'e4', title: 'Toilet Paper', amount: '150' , place: 'Pune', date: new Date(2019,8,2)}
];
const App=()=> {
  const[expenses,setExpenses]=useState(dummyExpenses);

  const addExpsenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpsenseHandler} />
      <Expenses items={expenses} />
    
    </div>
  );
}

export default App;
