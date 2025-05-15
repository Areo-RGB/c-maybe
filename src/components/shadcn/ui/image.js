import React, { useState } from "react";
import { cn } from "../../../lib/utils";

const Image = React.forwardRef(({ 
  className, 
  src,
  alt = "",
  fallbackSrc,
  width,
  height,
  objectFit = "cover",
  borderRadius,
  ...props 
}, ref) => {
  const [isError, setIsError] = useState(false);
  
  // Handle image error by showing fallback
  const handleError = () => {
    if (fallbackSrc) {
      setIsError(true);
    }
  };

  // Object fit styles
  const objectFitStyles = {
    contain: "object-contain",
    cover: "object-cover",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down"
  };

  // Border radius styles
  let radiusClass = "";
  if (borderRadius) {
    if (borderRadius === "full") {
      radiusClass = "rounded-full";
    } else {
      radiusClass = `rounded-${borderRadius}`;
    }
  }

  // Width and height styles
  const widthStyle = width ? { width: typeof width === 'number' ? `${width}px` : width } : {};
  const heightStyle = height ? { height: typeof height === 'number' ? `${height}px` : height } : {};

  return (
    <img
      ref={ref}
      src={isError ? fallbackSrc : src}
      alt={alt}
      onError={handleError}
      style={{
        ...widthStyle,
        ...heightStyle,
        ...props.style
      }}
      className={cn(
        objectFitStyles[objectFit],
        radiusClass,
        className
      )}
      {...props}
    />
  );
});

Image.displayName = "Image";

export { Image }; 