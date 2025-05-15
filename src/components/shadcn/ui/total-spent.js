import React from "react";
import { cn } from "../../../lib/utils";
import { Card } from "./card";
import { Box } from "./box";
import { Flex } from "./flex";
import { Button } from "./button";
import { Text } from "./text";
import { LineChart } from "./line-chart";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../../variables/charts";

export function TotalSpent({
  className,
  ...props
}) {
  return (
    <Card 
      className={cn("w-full", className)} 
      {...props}
    >
      <Flex className="justify-between px-5 pt-5">
        <Flex className="items-center w-full">
          <Button
            className="text-sm font-medium text-gray-600 dark:text-white bg-gray-200 dark:bg-navy-700 rounded-md"
            leftIcon={<MdOutlineCalendarToday className="mr-1" />}
          >
            This month
          </Button>
          <Button
            className="ml-auto w-9 h-9 p-0 bg-gray-200 dark:bg-navy-700 rounded-xl"
            variant="ghost"
          >
            <MdBarChart className="w-6 h-6 text-brand-500 dark:text-white" />
          </Button>
        </Flex>
      </Flex>
      
      <Flex className="w-full flex-col lg:flex-row">
        <Flex className="flex-col mr-5 mt-7">
          <Text
            className="text-3xl text-start font-bold leading-none mb-2 text-gray-900 dark:text-white"
          >
            $37.5K
          </Text>
          
          <Flex className="items-center mb-5">
            <Text
              className="text-sm font-medium text-gray-600 dark:text-gray-400 mr-3"
            >
              Total Spent
            </Text>
            <Flex className="items-center">
              <RiArrowUpSFill className="text-green-500 text-xl" />
              <Text className="text-sm font-bold text-green-500">
                +2.45%
              </Text>
            </Flex>
          </Flex>

          <Flex className="items-center">
            <IoCheckmarkCircle className="text-green-500 mr-1" />
            <Text className="text-md font-bold text-green-500">
              On track
            </Text>
          </Flex>
        </Flex>
        
        <Box className="min-h-[260px] min-w-[75%] mt-auto">
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  );
} 