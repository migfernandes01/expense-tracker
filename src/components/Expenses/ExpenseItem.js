//ExpenseItem component

import React from 'react';

import ExpenseDate from './ExpenseDate';    //import component
import Card from '../UI/Card';              //import component
import './ExpenseItem.css'; //import stylesheets

//declare a function(with HTML inside(JSX)) and then export it
const ExpenseItem = (props) =>{ //use props to get data

    //use className instead of class
    return (
        <li>
            <Card className='expense-item'>  
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;