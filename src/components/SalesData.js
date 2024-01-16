import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";
import jsonData from "../data/stackline_frontend_assessment_data_2021.json";

Chart.register(...registerables);

const salesData = jsonData[0];
const dateObjects = salesData.sales.map((week) => new Date(week.weekEnding));
const months = dateObjects.map(
  (date) =>
    `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`
);

const monthlyRetailSalesData = months.reduce((acc, month, index) => {
  acc[month] = (acc[month] || 0) + salesData.sales[index].retailSales;
  return acc;
}, {});

const SalesData = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: Object.keys(monthlyRetailSalesData),
        datasets: [
          {
            label: "Retail Sales",
            data: Object.values(monthlyRetailSalesData),
            borderColor: "rgba(137, 196, 244)",
            fill: false,
            borderCapStyle: "round",
            borderJoinStyle: "round",
          },
        ],
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SalesData;
