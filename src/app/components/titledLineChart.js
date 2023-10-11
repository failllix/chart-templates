"use client";

import { ChartTitle } from "./chartTitle";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card } from "./card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const TitledLineChart = ({children, data, options}) => {
  return (
    <Card className="flex flex-col">
      <ChartTitle>{children}</ChartTitle>
      <div className="max-h-128 grow">
      <Line data={data} options={options}></Line>
      </div>
    </Card>
  );
};
