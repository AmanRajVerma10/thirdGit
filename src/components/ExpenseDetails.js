import "./ExpenseItem.css";

function ExpenseDetails(props){
    const title=props.title;
    const amount=props.amount;
    const place=props.place;
    return(
        <div className="expense-item__description">
            <h2>{title}</h2>
            <h2>At {place}</h2>
            <div className="expense-item__price">Rs {amount}</div>
        </div>

    )

}

export default ExpenseDetails;