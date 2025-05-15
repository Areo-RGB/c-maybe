import React from "react";
import { cn } from "../../../lib/utils";
import { Card } from "./card";
import { Flex } from "./flex";
import { Text } from "./text";
import { Box } from "./box";

export function MiniStatistics({
  startContent,
  endContent,
  name,
  growth,
  value,
  className,
  ...props
}) {
  return (
    <Card className={cn("py-4", className)} {...props}>
      <Flex
        className="h-full"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent && (
          <Box className="flex-shrink-0">
            {startContent}
          </Box>
        )}

        <Box className={cn("flex flex-col", startContent ? "ml-4" : "")}>
          <Text
            className="text-sm leading-none mb-1"
            color="muted">
            {name}
          </Text>
          <Text
            className="text-2xl font-semibold mb-1">
            {value}
          </Text>
          {growth && (
            <Flex className="items-center">
              <Text className="text-xs font-bold text-green-500 mr-1">
                {growth}
              </Text>
              <Text className="text-xs text-gray-600 dark:text-gray-400">
                since last month
              </Text>
            </Flex>
          )}
        </Box>
        
        {endContent && (
          <Box className="ml-auto">
            {endContent}
          </Box>
        )}
      </Flex>
    </Card>
  );
} 