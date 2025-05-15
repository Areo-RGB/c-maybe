import React from "react";
import { cn } from "../../../lib/utils";

const Input = React.forwardRef(({ 
  className, 
  type = "text",
  size = "md",
  variant = "outline",
  disabled = false,
  error = false,
  placeholder,
  ...props 
}, ref) => {
  // Variant styles
  const variantStyles = {
    outline: "border border-gray-200 dark:border-navy-600 bg-transparent",
    filled: "border-0 bg-secondaryGray-300 dark:bg-navy-700",
    flushed: "rounded-none border-0 border-b-2 border-gray-200 dark:border-navy-600",
    unstyled: "border-0 bg-transparent"
  };

  // Size styles
  const sizeStyles = {
    xs: "h-7 text-xs px-2",
    sm: "h-8 text-sm px-3",
    md: "h-10 text-md px-4",
    lg: "h-12 text-lg px-4"
  };

  // State styles
  const stateStyles = {
    error: "border-red-500 focus:border-red-500 focus:ring-red-500/20",
    disabled: "opacity-60 cursor-not-allowed"
  };

  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-md bg-transparent transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
        variantStyles[variant],
        sizeStyles[size],
        disabled && stateStyles.disabled,
        error && stateStyles.error,
        className
      )}
      ref={ref}
      disabled={disabled}
      placeholder={placeholder}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input }; 