import React, {useState} from 'react';          //import react
import './Expenses.css'                         //import css
import ExpenseFilter from './ExpenseFilter';    //import component
import Card from '../UI/Card';                  //import component
import ExpensesList from './ExpensesList';      //import component
import ExpensesChart from './ExpensesChart';    //import component

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2022');

    //custom prop function
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    //filter items array and return new array
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;