import React, {useState} from 'react';  //import react
import './NewExpense.css';  //import css
import ExpenseForm from './ExpenseForm';    //import component

const NewExpense = (props) =>{

    const [isEditing, setIsEditing] =useState(false);

    //customized prop to get data from child
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);    //call a prop function to pass data to parent component
        setIsEditing(false);   //set stateful variable to false when form is submitted
    };

    //function to set stateful variable to true
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    //function to set stateful variable to false
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/> /*form to add new expense(with customized prop)*/}            
        </div>
    );
};

export default NewExpense;