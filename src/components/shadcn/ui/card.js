import React from "react";
import { cn } from "../../../lib/utils";

const Card = React.forwardRef(({ 
  className, 
  children,
  variant = "default",
  ...props 
}, ref) => {
  const variantStyles = {
    default: "bg-white dark:bg-navy-800 shadow-sm",
    elevated: "bg-white dark:bg-navy-800 shadow-md",
    outline: "bg-white dark:bg-navy-800 border border-gray-200 dark:border-navy-600",
    filled: "bg-gray-100 dark:bg-navy-700",
    unstyled: "bg-transparent"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(
        "text-lg font-semibold text-gray-900 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "p-6 pt-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-6 pt-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }; 