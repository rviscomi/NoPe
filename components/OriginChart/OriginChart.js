import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function OriginChart({ originData }) {
  if (!originData) {
    return;
  }

  let accept = [],
    dismiss = [],
    deny = [],
    ignore = [];
  originData.forEach((data) => {
    accept.push(data[0]);
    dismiss.push(data[1]);
    deny.push(data[2]);
    ignore.push(data[3]);
  });

  const data = {
    labels: Array.from({ length: originData.length }, (_, i) =>
      indexToMonth(i + 1)
    ),
    datasets: [
      {
        label: "Accept",
        data: accept,
        backgroundColor: "rgba(52, 168, 83, 1)", // Green
        fill: true,
        pointRadius: 0,
        pointHitRadius: 10,
        stack: "Stack 0"
      },
      {
        label: "Dismiss",
        data: dismiss,
        backgroundColor: "rgba(251, 188, 4, 1)", // Orange
        fill: true,
        pointRadius: 0,
        pointHitRadius: 10,
        stack: "Stack 0"
      },
      {
        label: "Deny",
        data: deny,
        backgroundColor: "rgba(234, 67, 53, 1)", // Red
        fill: true,
        pointRadius: 0,
        pointHitRadius: 10,
        stack: "Stack 0"
      },
      {
        label: "Ignore",
        data: ignore,
        backgroundColor: "rgba(67, 67, 67, 1)", // Gray
        fill: true,
        pointRadius: 0,
        pointHitRadius: 10,
        stack: "Stack 0"
      },
    ]
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        max: 100,
        min: 0,
        ticks: {
          callback: (value) => {
            return value + "%";
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.parsed.y;
            return label + ": " + value + "%";
          },
        },
      },
    },
  };

  return <Line options={options} data={data} />
}

function indexToMonth(index) {
  const startDate = new Date(2020, 0); // January 2020
  const targetDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + index - 1
  );

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
  }).format(targetDate);
}

export default OriginChart;