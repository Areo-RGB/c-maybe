import React from "react";
import { cn } from "../../../lib/utils";

const Box = React.forwardRef(({ 
  className,
  children,
  as: Component = "div",
  w,
  h,
  minH,
  minW,
  maxH,
  maxW,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  bg,
  color,
  borderRadius,
  boxShadow,
  position,
  display,
  overflow,
  overflowX,
  overflowY,
  ...props 
}, ref) => {
  // Process sizing
  let widthClass = "";
  if (w) {
    if (w === "100%") widthClass = "w-full";
    else if (w === "auto") widthClass = "w-auto";
    else if (typeof w === "string" && w.includes("px")) widthClass = `w-[${w}]`;
    else if (typeof w === "string" && w.includes("%")) widthClass = `w-[${w}]`;
    else widthClass = `w-${w}`;
  }
  
  let heightClass = "";
  if (h) {
    if (h === "100%") heightClass = "h-full";
    else if (h === "100vh") heightClass = "h-screen";
    else if (h === "auto") heightClass = "h-auto";
    else if (typeof h === "string" && h.includes("px")) heightClass = `h-[${h}]`;
    else if (typeof h === "string" && h.includes("%")) heightClass = `h-[${h}]`;
    else heightClass = `h-${h}`;
  }
  
  // Min/max classes
  let minHeightClass = minH ? (minH.includes("px") ? `min-h-[${minH}]` : `min-h-${minH}`) : "";
  let minWidthClass = minW ? (minW.includes("px") ? `min-w-[${minW}]` : `min-w-${minW}`) : "";
  let maxHeightClass = maxH ? (maxH.includes("px") ? `max-h-[${maxH}]` : `max-h-${maxH}`) : "";
  let maxWidthClass = maxW ? (maxW.includes("px") ? `max-w-[${maxW}]` : `max-w-${maxW}`) : "";
  
  // Position and display classes
  let positionClass = position ? `position-${position}` : "";
  let displayClass = display ? `${display}` : "";
  
  // Overflow classes
  let overflowClass = overflow ? `overflow-${overflow}` : "";
  let overflowXClass = overflowX ? `overflow-x-${overflowX}` : "";
  let overflowYClass = overflowY ? `overflow-y-${overflowY}` : "";
  
  return (
    <Component
      ref={ref}
      className={cn(
        displayClass,
        widthClass,
        heightClass,
        minHeightClass,
        minWidthClass,
        maxHeightClass,
        maxWidthClass,
        // Padding
        p && `p-${p}`,
        px && `px-${px}`,
        py && `py-${py}`,
        pt && `pt-${pt}`,
        pr && `pr-${pr}`,
        pb && `pb-${pb}`,
        pl && `pl-${pl}`,
        // Margin
        m && `m-${m}`,
        mx && `mx-${mx}`,
        my && `my-${my}`,
        mt && `mt-${mt}`,
        mr && `mr-${mr}`,
        mb && `mb-${mb}`,
        ml && `ml-${ml}`,
        // Background and styling
        bg && `bg-${bg}`,
        color && `text-${color}`,
        borderRadius && `rounded-${borderRadius}`,
        boxShadow && `shadow-${boxShadow}`,
        positionClass,
        overflowClass,
        overflowXClass,
        overflowYClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Box.displayName = "Box";

export { Box }; 