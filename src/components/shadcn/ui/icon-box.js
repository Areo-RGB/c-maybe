import React from "react";
import { cn } from "../../../lib/utils";
import { Flex } from "./flex";

export function IconBox({
  icon,
  className,
  ...props
}) {
  return (
    <Flex
      className={cn("items-center justify-center rounded-full", className)}
      {...props}>
      {icon}
    </Flex>
  );
} 