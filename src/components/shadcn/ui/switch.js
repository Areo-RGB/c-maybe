import React from "react";
import { cn } from "../../../lib/utils";

const Switch = React.forwardRef(({ 
  className, 
  checked,
  defaultChecked,
  disabled,
  onChange,
  size = "md",
  colorScheme = "brand",
  ...props 
}, ref) => {
  const [isChecked, setIsChecked] = React.useState(
    defaultChecked || checked || false
  );

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    
    if (checked === undefined) {
      setIsChecked(newChecked);
    }
    
    if (onChange) {
      onChange(e);
    }
  };

  // Size styles
  const sizeStyles = {
    sm: {
      track: "h-3.5 w-7",
      thumb: "h-2.5 w-2.5",
      translate: "translate-x-3.5",
    },
    md: {
      track: "h-4 w-8",
      thumb: "h-3 w-3",
      translate: "translate-x-4",
    },
    lg: {
      track: "h-5 w-10",
      thumb: "h-4 w-4",
      translate: "translate-x-5",
    }
  };

  // Color scheme styles
  const colorSchemes = {
    brand: "bg-brand-500",
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    teal: "bg-teal-500",
    gray: "bg-gray-500"
  };

  return (
    <label
      className={cn(
        "inline-flex items-center",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            "rounded-full transition-colors",
            sizeStyles[size].track,
            isChecked 
              ? colorSchemes[colorScheme]
              : "bg-gray-300 dark:bg-navy-600",
            disabled && "opacity-60 cursor-not-allowed"
          )}
        >
          <div
            className={cn(
              "rounded-full bg-white shadow-md transform transition-transform",
              sizeStyles[size].thumb,
              isChecked 
                ? sizeStyles[size].translate
                : "translate-x-0.5"
            )}
          />
        </div>
      </div>
    </label>
  );
});

Switch.displayName = "Switch";

export { Switch }; 