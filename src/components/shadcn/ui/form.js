import React from "react";
import { cn } from "../../../lib/utils";

// FormControl - Wrapper for form elements
const FormControl = React.forwardRef(({ 
  className, 
  children,
  isRequired = false,
  isInvalid = false,
  isDisabled = false,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full mb-4",
        isDisabled && "opacity-60",
        className
      )}
      data-required={isRequired}
      data-invalid={isInvalid}
      data-disabled={isDisabled}
      {...props}
    >
      {children}
    </div>
  );
});

FormControl.displayName = "FormControl";

// FormLabel - Label for form elements
const FormLabel = React.forwardRef(({ 
  className, 
  children,
  htmlFor,
  isRequired = false,
  ...props 
}, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        "block text-sm font-medium text-secondaryGray-900 dark:text-white mb-2",
        className
      )}
      {...props}
    >
      {children}
      {isRequired && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
});

FormLabel.displayName = "FormLabel";

// FormErrorMessage - Error message for form elements
const FormErrorMessage = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-1 text-sm text-red-500 flex items-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

FormErrorMessage.displayName = "FormErrorMessage";

// FormHelperText - Helper text for form elements
const FormHelperText = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mt-1 text-xs text-secondaryGray-600 dark:text-secondaryGray-400",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

FormHelperText.displayName = "FormHelperText";

export { FormControl, FormLabel, FormErrorMessage, FormHelperText }; 