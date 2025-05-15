import React from "react";
import { cn } from "../../../lib/utils";

const Table = React.forwardRef(({ 
  className, 
  children,
  variant = "simple",
  size = "md",
  ...props 
}, ref) => {
  // Variant styles
  const variantStyles = {
    simple: "border-collapse",
    striped: "border-collapse [&>tbody>tr:nth-of-type(odd)]:bg-gray-50 dark:[&>tbody>tr:nth-of-type(odd)]:bg-navy-700",
    unstyled: "border-collapse"
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg"
  };

  return (
    <div className="w-full overflow-x-auto">
      <table
        ref={ref}
        className={cn(
          "w-full",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
});

Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <thead
      ref={ref}
      className={cn(
        "bg-gray-50 dark:bg-navy-800",
        className
      )}
      {...props}
    >
      {children}
    </thead>
  );
});

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <tbody
      ref={ref}
      className={cn(className)}
      {...props}
    >
      {children}
    </tbody>
  );
});

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <tfoot
      ref={ref}
      className={cn(
        "bg-gray-50 dark:bg-navy-800 font-medium",
        className
      )}
      {...props}
    >
      {children}
    </tfoot>
  );
});

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className, children, isHighlighted, ...props }, ref) => {
  return (
    <tr
      ref={ref}
      className={cn(
        "border-b border-gray-200 dark:border-navy-700",
        "transition-colors hover:bg-gray-100 dark:hover:bg-navy-700",
        isHighlighted && "bg-gray-100 dark:bg-navy-700",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
});

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <th
      ref={ref}
      className={cn(
        "px-4 py-3 text-left font-semibold text-gray-700 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
});

TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <td
      ref={ref}
      className={cn(
        "px-4 py-3 text-gray-700 dark:text-white",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
});

TableCell.displayName = "TableCell";

export { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell }; 