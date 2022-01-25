import React, {useState} from 'react';      //import react
import './ExpenseForm.css';     //import css

const ExpenseForm = (props) =>{
    //useState for the title(starts empty)
    const [enteredTitle, setEnteredTitle] = useState('');
    //useState for the amount(starts empty)
    const [enteredAmount, setEnteredAmount] = useState('');
    //useState for the date(starts empty)
    const [enteredDate, setEnteredDate] = useState('');

    //set title to last event.target.value
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    //set amount to last event.target.value
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    //set date to last event.target.value
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //function to handle form submition
    const submitHandler = (event) => {
        event.preventDefault(); //prevent page to reload

        //expenseData object with the entered data from form fields
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate + 'T00:00:00')
        }

        props.onSaveExpenseData(expenseData);  //execute props to pass data to parent component

        //reset data fields
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="">Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="">Date</label>
                    <input type="date" min="2022-01-01" max="2025-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

//export component
export default ExpenseForm;