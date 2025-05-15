import React from "react";
import { cn } from "../../../lib/utils";

const Separator = React.forwardRef(({ 
  className, 
  orientation = "horizontal",
  decorative = true,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
      role={decorative ? "none" : "separator"}
      aria-orientation={decorative ? undefined : orientation}
    />
  );
});

Separator.displayName = "Separator";

// Horizontal separator component (for backward compatibility)
const HSeparator = ({ mb, ...props }) => (
  <Separator 
    className={cn("bg-gray-200 dark:bg-navy-700", mb && `mb-${mb}`)}
    {...props}
  />
);

// Vertical separator component (for backward compatibility)
const VSeparator = ({ mr, ...props }) => (
  <Separator 
    orientation="vertical"
    className={cn("bg-gray-200 dark:bg-navy-700", mr && `mr-${mr}`)}
    {...props}
  />
);

export { Separator, HSeparator, VSeparator }; 