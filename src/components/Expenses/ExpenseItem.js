import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem= (props)=> {
    const clickHandler=()=> console.log("button clicked");
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <ExpenseDetails title={props.title} amount={props.amount} place={props.place}></ExpenseDetails>
            <button onClick={clickHandler}>Change Title</button>
        </Card> 
    );

}

export default ExpenseItem;