import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses=(props)=>{
    return(
        <Card className="expenses">
            <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            place={props.items[0].place}
            date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            place={props.items[1].place}
            date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            place={props.items[2].place}
            date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            place={props.items[3].place}
            date={props.items[3].date}
            ></ExpenseItem>

        </Card>
    )

}

export default Expenses;