import React from "react";
import { cn } from "../../../lib/utils";
import { Card } from "./card";
import { Box } from "./box";
import { Flex } from "./flex";
import { Button } from "./button";
import { Text } from "./text";
import { BarChart } from "./bar-chart";
import { MdBarChart } from "react-icons/md";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "../../../variables/charts";

export function WeeklyRevenue({
  className,
  ...props
}) {
  return (
    <Card 
      className={cn("w-full", className)} 
      {...props}
    >
      <Flex className="items-center w-full px-4 py-2.5">
        <Text
          className="mr-auto text-xl font-bold text-gray-900 dark:text-white leading-none"
        >
          Weekly Revenue
        </Text>
        <Button
          className="w-9 h-9 p-0 bg-gray-200 dark:bg-navy-700 rounded-xl"
          variant="ghost"
        >
          <MdBarChart className="w-6 h-6 text-brand-500 dark:text-white" />
        </Button>
      </Flex>

      <Box className="h-60 mt-auto">
        <BarChart
          chartData={barChartDataConsumption}
          chartOptions={barChartOptionsConsumption}
        />
      </Box>
    </Card>
  );
} 