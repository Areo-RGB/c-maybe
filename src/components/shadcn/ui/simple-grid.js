import React from "react";
import { cn } from "../../../lib/utils";

export function SimpleGrid({
  children,
  columns = { base: 1 },
  spacing,
  gap,
  className,
  ...props
}) {
  // Convert Chakra-style responsive object to Tailwind classes
  const getColumnsClasses = () => {
    let columnClasses = [];
    
    if (typeof columns === 'number') {
      columnClasses.push(`grid-cols-${columns}`);
    } else {
      // Handle responsive object like { base: 1, md: 2, lg: 3 }
      if (columns.base) columnClasses.push(`grid-cols-${columns.base}`);
      if (columns.sm) columnClasses.push(`sm:grid-cols-${columns.sm}`);
      if (columns.md) columnClasses.push(`md:grid-cols-${columns.md}`);
      if (columns.lg) columnClasses.push(`lg:grid-cols-${columns.lg}`);
      if (columns.xl) columnClasses.push(`xl:grid-cols-${columns.xl}`);
      if (columns["2xl"]) columnClasses.push(`2xl:grid-cols-${columns["2xl"]}`);
    }
    
    return columnClasses.join(' ');
  };

  // Handle gap (passed as '20px', needs to be converted to Tailwind)
  const getGapClass = () => {
    const gapValue = gap || spacing;
    if (!gapValue) return '';
    
    if (typeof gapValue === 'string') {
      // Convert '20px' to '5' (assuming 4px = 1 in Tailwind's spacing scale)
      const numValue = parseInt(gapValue);
      if (isNaN(numValue)) return '';
      
      const tailwindValue = Math.round(numValue / 4);
      return `gap-${tailwindValue}`;
    }
    
    return `gap-${gapValue}`;
  };

  return (
    <div 
      className={cn(
        "grid",
        getColumnsClasses(),
        getGapClass(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 