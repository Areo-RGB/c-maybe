import React from "react";
import { cn } from "../../../lib/utils";

const Text = React.forwardRef(({ 
  className, 
  children,
  size = "md",
  color = "default",
  fontWeight = "normal",
  as: Component = "p",
  truncate = false,
  ...props 
}, ref) => {
  // Size styles
  const sizeStyles = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl"
  };

  // Color styles
  const colorStyles = {
    default: "text-gray-700 dark:text-white",
    muted: "text-gray-600 dark:text-gray-400",
    accent: "text-brand-500 dark:text-brand-400",
    success: "text-green-500",
    warning: "text-orange-500",
    danger: "text-red-500",
    info: "text-blue-500",
  };

  // Font weight styles
  const fontWeightStyles = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };

  return (
    <Component
      ref={ref}
      className={cn(
        sizeStyles[size],
        colorStyles[color],
        fontWeightStyles[fontWeight],
        truncate && "truncate",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Text.displayName = "Text";

export { Text }; 