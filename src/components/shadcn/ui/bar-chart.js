import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { cn } from "../../../lib/utils";

export function BarChart({
  chartData,
  chartOptions,
  className,
  ...props
}) {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    setData(chartData || []);
    setOptions(chartOptions || {});
  }, [chartData, chartOptions]);

  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <Chart
        options={options}
        series={data}
        type="bar"
        width="100%"
        height="100%"
      />
    </div>
  );
} 