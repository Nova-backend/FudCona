import React from "react";

import { Line } from "react-chartjs-2";
import 'chart.js'
// import Chart from "chart.js/auto"
import Chart from "chart.js/auto"
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#e8e8da",
    
      borderColor: "rgba(75,192,192,1)",
      tension:0.4
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
      tension:0.4
    }
  ]
};

export default function Graph() {
  return (
    <div className="App">
      <Line data={data}/>
    </div>
  );
}
