import React from "react";
import { cn } from "../../../lib/utils";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const Alert = React.forwardRef(({ 
  className, 
  children,
  status = "info",
  variant = "subtle",
  ...props 
}, ref) => {
  const statusConfig = {
    info: {
      icon: Info,
      color: {
        subtle: "bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
        solid: "bg-blue-500 text-white",
        outline: "border border-blue-500 text-blue-800 dark:text-blue-300",
        left: "border-l-4 border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      }
    },
    success: {
      icon: CheckCircle,
      color: {
        subtle: "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300",
        solid: "bg-green-500 text-white",
        outline: "border border-green-500 text-green-800 dark:text-green-300",
        left: "border-l-4 border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      }
    },
    warning: {
      icon: AlertTriangle,
      color: {
        subtle: "bg-orange-50 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
        solid: "bg-orange-500 text-white",
        outline: "border border-orange-500 text-orange-800 dark:text-orange-300",
        left: "border-l-4 border-orange-500 bg-orange-50 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      }
    },
    error: {
      icon: XCircle,
      color: {
        subtle: "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300",
        solid: "bg-red-500 text-white",
        outline: "border border-red-500 text-red-800 dark:text-red-300",
        left: "border-l-4 border-red-500 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      }
    }
  };

  const StatusIcon = statusConfig[status]?.icon;
  const colorClass = statusConfig[status]?.color[variant] || statusConfig.info.color.subtle;

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "flex items-start p-4 rounded-md",
        colorClass,
        className
      )}
      {...props}
    >
      {StatusIcon && (
        <StatusIcon className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
      )}
      <div>{children}</div>
    </div>
  );
});

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "font-semibold text-lg mb-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "text-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription }; 