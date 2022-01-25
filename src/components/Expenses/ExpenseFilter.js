import React from "react";      //import react
import './ExpenseFilter.css';   //import css


const ExpenseFilter = (props) => {

    //function to handle filter change
    const filterChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);   //call props function to pass data to parent component
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label htmlFor="">Filter by year</label>
                <select value={props.selected} onChange={filterChangeHandler}>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;