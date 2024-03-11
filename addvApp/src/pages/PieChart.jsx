import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 0, value: 35, label: "Jio", color: "#2954D6" },
  { id: 1, value: 28, label: "Airtel", color: "#FC5454" },
  { id: 2, value: 25, label: "Vodafone", color: "#f58178" },
  { id: 3, value: 12, label: "BSNL", color: "#8fff92" },
];

export default function PieChartC() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={200}
    />
  );
}
