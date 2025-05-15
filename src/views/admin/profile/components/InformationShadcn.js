// Shadcn imports
import { Box } from "components/shadcn/ui/box";
import { Text } from "components/shadcn/ui/text";
import { Card } from "components/shadcn/ui/card";
import React from "react";

export default function InformationShadcn(props) {
  const { title, value, className, ...rest } = props;
  // Tailwind dark mode classes
  const textColorPrimary = "text-gray-900 dark:text-white";
  const textColorSecondary = "text-gray-400";
  const bgColor = "bg-white dark:bg-navy-700";
  
  return (
    <Card className={`${bgColor} ${className}`} {...rest}>
      <Box className="p-4">
        <Text className={`${textColorSecondary} text-sm font-medium`}>
          {title}
        </Text>
        <Text className={`${textColorPrimary} text-md font-medium`}>
          {value}
        </Text>
      </Box>
    </Card>
  );
} 