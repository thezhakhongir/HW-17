import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints = [] }) => {
  const datPoingsValues = dataPoints.map((poing) => poing.value);
  const totalMax = Math.max(...datPoingsValues);

  return (
    <div className="chart">
      {dataPoints.map((point, index) => (
        <ChartBar
          key={index}
          maxValue={totalMax}
          label={point.label}
          value={point.value}
        />
      ))}
    </div>
  );
};

export default Chart;
