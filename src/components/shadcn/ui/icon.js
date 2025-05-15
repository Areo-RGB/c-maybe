import React from "react";
import { cn } from "../../../lib/utils";

const Icon = React.forwardRef(({ 
  className, 
  as: Component,
  color = "currentColor",
  size,
  boxSize,
  ...props 
}, ref) => {
  // Size classes
  const getSize = () => {
    const iconSize = size || boxSize || 'md';
    
    if (typeof iconSize === 'number') {
      return {
        width: `${iconSize}px`,
        height: `${iconSize}px`
      };
    }
    
    const sizeMap = {
      xs: { width: '0.75rem', height: '0.75rem' },
      sm: { width: '1rem', height: '1rem' },
      md: { width: '1.25rem', height: '1.25rem' },
      lg: { width: '1.5rem', height: '1.5rem' },
      xl: { width: '2rem', height: '2rem' }
    };
    
    return sizeMap[iconSize] || sizeMap.md;
  };

  // Color classes
  const getColorClass = () => {
    if (color === 'currentColor') return '';
    
    const colorMap = {
      brand: 'text-brand-500',
      red: 'text-red-500',
      green: 'text-green-500',
      blue: 'text-blue-500',
      orange: 'text-orange-500',
      purple: 'text-purple-500',
      teal: 'text-teal-500',
      gray: 'text-gray-500',
      white: 'text-white',
      black: 'text-black'
    };
    
    return colorMap[color] || '';
  };

  // If no component is provided, return null
  if (!Component) {
    return null;
  }

  const sizeStyle = getSize();
  const colorClass = getColorClass();

  return (
    <Component
      ref={ref}
      className={cn(
        colorClass,
        className
      )}
      style={{
        ...sizeStyle,
        ...props.style
      }}
      {...props}
    />
  );
});

Icon.displayName = "Icon";

export { Icon }; 