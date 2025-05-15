import React from "react";
import { cn } from "../../../lib/utils";

const Flex = React.forwardRef(({ 
  className, 
  children,
  direction = "row",
  wrap = "nowrap",
  justify = "start",
  align = "start",
  gap,
  as: Component = "div",
  ...props 
}, ref) => {
  // Direction styles
  const directionStyles = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  };

  // Wrap styles
  const wrapStyles = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse"
  };

  // Justify styles (content)
  const justifyStyles = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly"
  };

  // Align styles (items)
  const alignStyles = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch"
  };

  // Gap styles
  const gapValue = gap ? `gap-${gap}` : "";

  return (
    <Component
      ref={ref}
      className={cn(
        "flex",
        directionStyles[direction],
        wrapStyles[wrap],
        justifyStyles[justify],
        alignStyles[align],
        gapValue,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Flex.displayName = "Flex";

export { Flex }; 