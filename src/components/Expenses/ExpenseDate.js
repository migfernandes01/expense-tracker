import './ExpenseDate.css'  //import css

//create component
const ExpenseDate = (props) =>{
    const month = props.date.toLocaleString('en-US', {month: 'long'}); //extract month from props date
    const day = props.date.toLocaleString('un-US', {day: '2-digit'});  //extract day from props date
    const year = props.date.getFullYear();                             //extract year from props date

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

//export component
export default ExpenseDate;