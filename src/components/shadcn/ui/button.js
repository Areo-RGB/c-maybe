import React from "react";
import { cn } from "../../../lib/utils";

const Button = React.forwardRef(({ 
  className, 
  children,
  variant = "solid",
  size = "md",
  colorScheme = "brand",
  isLoading = false,
  loadingText,
  leftIcon,
  rightIcon,
  isDisabled = false,
  isFullWidth = false,
  ...props 
}, ref) => {
  // Variant styles
  const variantStyles = {
    solid: {
      brand: "bg-brand-500 hover:bg-brand-600 text-white",
      red: "bg-red-500 hover:bg-red-600 text-white",
      green: "bg-green-500 hover:bg-green-600 text-white",
      blue: "bg-blue-500 hover:bg-blue-600 text-white",
      orange: "bg-orange-500 hover:bg-orange-600 text-white",
      teal: "bg-teal-500 hover:bg-teal-600 text-white",
      gray: "bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-navy-700 dark:hover:bg-navy-600 dark:text-white"
    },
    outline: {
      brand: "border border-brand-500 text-brand-500 hover:bg-brand-50 dark:hover:bg-navy-800",
      red: "border border-red-500 text-red-500 hover:bg-red-50 dark:hover:bg-navy-800",
      green: "border border-green-500 text-green-500 hover:bg-green-50 dark:hover:bg-navy-800",
      blue: "border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-navy-800",
      orange: "border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-navy-800",
      teal: "border border-teal-500 text-teal-500 hover:bg-teal-50 dark:hover:bg-navy-800",
      gray: "border border-gray-200 text-gray-800 hover:bg-gray-50 dark:border-navy-600 dark:text-white dark:hover:bg-navy-800"
    },
    ghost: {
      brand: "text-brand-500 hover:bg-brand-50 dark:hover:bg-navy-800",
      red: "text-red-500 hover:bg-red-50 dark:hover:bg-navy-800",
      green: "text-green-500 hover:bg-green-50 dark:hover:bg-navy-800",
      blue: "text-blue-500 hover:bg-blue-50 dark:hover:bg-navy-800",
      orange: "text-orange-500 hover:bg-orange-50 dark:hover:bg-navy-800",
      teal: "text-teal-500 hover:bg-teal-50 dark:hover:bg-navy-800",
      gray: "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-navy-800"
    },
    link: {
      brand: "text-brand-500 hover:underline",
      red: "text-red-500 hover:underline",
      green: "text-green-500 hover:underline",
      blue: "text-blue-500 hover:underline",
      orange: "text-orange-500 hover:underline",
      teal: "text-teal-500 hover:underline",
      gray: "text-gray-800 hover:underline dark:text-white"
    }
  };

  // Size styles
  const sizeStyles = {
    xs: "h-7 min-w-[1.75rem] text-xs px-2",
    sm: "h-8 min-w-[2rem] text-sm px-3",
    md: "h-10 min-w-[2.5rem] text-md px-4",
    lg: "h-12 min-w-[3rem] text-lg px-6"
  };

  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant][colorScheme],
        sizeStyles[size],
        isFullWidth && "w-full",
        className
      )}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </span>
      )}
      <span className={cn(isLoading && "opacity-0", "inline-flex items-center")}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {isLoading && loadingText ? loadingText : children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </span>
    </button>
  );
});

Button.displayName = "Button";

export { Button }; 