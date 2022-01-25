import React from "react";          //import react
import Chart from "../Chart/Chart"; //import component

const ExpensesChart = (props) => {
    //array with 12 objects(with labels and values)
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    //for each expense in the expenses received by props
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();   //get and expense month, starting at 0
        chartDataPoints[expenseMonth].value += expense.amount;  //set value adding amount of expenses for a month
    }

    return (
        <Chart dataPoints={chartDataPoints}/>
    );
};

export default ExpensesChart;