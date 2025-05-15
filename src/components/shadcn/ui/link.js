import React from "react";
import { cn } from "../../../lib/utils";
import { Link as RouterLink } from "react-router-dom";

const Link = React.forwardRef(({ 
  className, 
  children,
  variant = "default",
  href,
  to,
  isExternal = false,
  color,
  ...props 
}, ref) => {
  // Color styles
  const colorStyles = {
    brand: "text-brand-500 hover:text-brand-600",
    red: "text-red-500 hover:text-red-600",
    green: "text-green-500 hover:text-green-600",
    blue: "text-blue-500 hover:text-blue-600",
    orange: "text-orange-500 hover:text-orange-600",
    teal: "text-teal-500 hover:text-teal-600",
    gray: "text-gray-500 hover:text-gray-600",
    default: "text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-200"
  };

  // Variant styles
  const variantStyles = {
    default: "no-underline hover:underline",
    underline: "underline",
    ghost: "no-underline"
  };

  // External link props
  const externalProps = isExternal ? {
    target: "_blank",
    rel: "noopener noreferrer",
  } : {};

  // If 'to' prop is provided, use RouterLink
  if (to) {
    return (
      <RouterLink
        ref={ref}
        to={to}
        className={cn(
          "transition-colors",
          variantStyles[variant],
          color && colorStyles[color] || colorStyles.default,
          className
        )}
        {...externalProps}
        {...props}
      >
        {children}
      </RouterLink>
    );
  }

  // Regular anchor tag for hrefs
  return (
    <a
      ref={ref}
      href={href || "#"}
      className={cn(
        "transition-colors",
        variantStyles[variant],
        color && colorStyles[color] || colorStyles.default,
        className
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";

export { Link }; 