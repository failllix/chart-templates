"use client";

import { ChartTitle } from "./chartTitle";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card } from "./card";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    }
  },
};

const labels = ["January", "February", "March"]

export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
export const TitledPieChart = ({ children }) => {
  return (
    <Card className="flex flex-col">
      <ChartTitle>{children}</ChartTitle>
      <div className="max-h-128 grow">
      <Pie data={data} options={options}></Pie>
      </div>
    </Card>
  );
};
