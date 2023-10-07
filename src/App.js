import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses= [
    {title: 'Car Insurance', amount: '15000' , place: 'Kolkata', date: new Date(2021,2,23)},
    {title: 'New TV', amount: '55000' , place: 'Kolkata' , date: new Date(2021,3,23)},
    {title: 'New Phone', amount: '95000' , place: 'Noida', date: new Date(2021,5,27)},
    {title: 'Toilet Paper', amount: '150' , place: 'Pune', date: new Date(2021,8,2)}
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
        <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        place={expenses[0].place}
        date={expenses[0].date}
       ></ExpenseItem>
        <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        place={expenses[1].place}
        date={expenses[1].date}
       ></ExpenseItem>
        <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        place={expenses[2].place}
        date={expenses[2].date}
       ></ExpenseItem>
        <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        place={expenses[3].place}
        date={expenses[3].date}
       ></ExpenseItem>
        
    </div>
  );
}

export default App;
