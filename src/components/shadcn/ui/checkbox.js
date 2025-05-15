import React from "react";
import { cn } from "../../../lib/utils";
import { CheckIcon } from "lucide-react";

const Checkbox = React.forwardRef(({ 
  className, 
  checked,
  defaultChecked,
  disabled,
  onChange,
  size = "md",
  colorScheme = "brand",
  isIndeterminate = false,
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

  // Size styles
  const sizeStyles = {
    sm: "h-3.5 w-3.5 rounded-[4px]",
    md: "h-4 w-4 rounded-[5px]",
    lg: "h-5 w-5 rounded-[6px]"
  };

  // Color scheme styles
  const colorSchemes = {
    brand: "text-white bg-brand-500 border-brand-500",
    red: "text-white bg-red-500 border-red-500",
    green: "text-white bg-green-500 border-green-500",
    blue: "text-white bg-blue-500 border-blue-500",
    orange: "text-white bg-orange-500 border-orange-500",
    purple: "text-white bg-purple-500 border-purple-500",
    teal: "text-white bg-teal-500 border-teal-500",
    gray: "text-white bg-gray-500 border-gray-500"
  };

  const handleChange = (e) => {
    const newChecked = e.target.checked;
    
    if (checked === undefined) {
      setIsChecked(newChecked);
    }
    
    if (onChange) {
      onChange(e);
    }
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
            "border-2 border-gray-300 dark:border-navy-600",
            "flex items-center justify-center",
            isChecked ? colorSchemes[colorScheme] : "bg-transparent",
            disabled && "opacity-60 cursor-not-allowed",
            "transition-colors",
            sizeStyles[size]
          )}
        >
          {isChecked && !isIndeterminate && (
            <CheckIcon className={cn(
              "stroke-current stroke-[3px]",
              size === "sm" ? "h-2 w-2" : size === "md" ? "h-2.5 w-2.5" : "h-3 w-3"
            )} />
          )}
          {isIndeterminate && (
            <div className={cn(
              "bg-current",
              size === "sm" ? "h-0.5 w-2" : size === "md" ? "h-0.5 w-2.5" : "h-0.5 w-3"
            )} />
          )}
        </div>
      </div>
    </label>
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox }; 