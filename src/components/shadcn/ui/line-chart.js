import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { cn } from "../../../lib/utils";

export function LineChart({
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
      <ReactApexChart
        options={options}
        series={data}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  );
} 