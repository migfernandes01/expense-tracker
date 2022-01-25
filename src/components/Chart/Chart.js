import React from "react";          //import react

import ChartBar from "./ChartBar";  //import component

import './Chart.css';               //import css

const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);   //create new array with dataPoints values
    const totalMaximum = Math.max(...dataPointValues);  //get maximum value

    return (
        <div className="chart">
            {props.dataPoints.map(
                (dataPoint) => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}
                /> 
            )}
        </div>
    );
};

export default Chart;
