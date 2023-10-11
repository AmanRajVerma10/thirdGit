
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App=()=> {
  const expenses= [
    {title: 'Car Insurance', amount: '15000' , place: 'Kolkata', date: new Date(2021,2,23)},
    {title: 'New TV', amount: '55000' , place: 'Kolkata' , date: new Date(2021,3,23)},
    {title: 'New Phone', amount: '95000' , place: 'Noida', date: new Date(2021,5,27)},
    {title: 'Toilet Paper', amount: '150' , place: 'Pune', date: new Date(2021,8,2)}
  ]
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    
    </div>
  );
}

export default App;
