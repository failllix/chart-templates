import { TitledLineChart } from "./components/titledLineChart";
import { TitledPieChart } from "./components/titledPieChart";

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const lineChartLabels = ["January", "February", "March", "April", "May", "June", "July"];

export const lineChartData = {
  labels: lineChartLabels,
  datasets: [
    {
      label: "Random data",
      data: lineChartLabels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Linear data",
      data: lineChartLabels.map((_, index) => index * 15),
      borderColor: "rgb(0, 99, 200)",
      backgroundColor: "rgba(0, 99, 200, 0.5)",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">
        This won't be your last dashboard ✌
      </h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <TitledLineChart data={lineChartData} options={lineChartOptions}>Look at me the most boring chart ever</TitledLineChart>
        <TitledPieChart>Try to avoid using me</TitledPieChart>
      </div>
    </main>
  );
}
