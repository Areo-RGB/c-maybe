import React, { createContext, useContext, useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

const DrawerContext = createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

const Drawer = ({
  children,
  isOpen: isOpenProp,
  onClose,
  placement = "left",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  const onOpen = () => setIsOpen(true);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <DrawerContext.Provider value={{ isOpen, onOpen, onClose: handleClose }}>
      {children}
    </DrawerContext.Provider>
  );
};

Drawer.displayName = "Drawer";

const DrawerOverlay = ({ className, ...props }) => {
  const { isOpen, onClose } = useContext(DrawerContext);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-40 bg-black/50 transition-opacity",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
      onClick={onClose}
      {...props}
    />
  );
};

DrawerOverlay.displayName = "DrawerOverlay";

const DrawerContent = ({ className, children, placement = "left", ...props }) => {
  const { isOpen } = useContext(DrawerContext);

  const placementClasses = {
    left: "left-0 transform -translate-x-full",
    right: "right-0 transform translate-x-full",
    top: "top-0 transform -translate-y-full",
    bottom: "bottom-0 transform translate-y-full",
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed z-50 bg-white dark:bg-navy-800 shadow-lg transition-transform duration-300 ease-in-out h-full flex flex-col",
        isOpen ? "transform-none" : placementClasses[placement],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

DrawerContent.displayName = "DrawerContent";

const DrawerCloseButton = ({ className, ...props }) => {
  const { onClose } = useContext(DrawerContext);

  return (
    <button
      className={cn(
        "absolute top-2 right-2 p-1 rounded-md text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white focus:outline-none",
        className
      )}
      onClick={onClose}
      {...props}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
};

DrawerCloseButton.displayName = "DrawerCloseButton";

const DrawerBody = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("flex-1 overflow-y-auto p-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

DrawerBody.displayName = "DrawerBody";

// Create a useDisclosure hook similar to Chakra's
const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);
  
  return { isOpen, onOpen, onClose, onToggle };
};

export { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure }; 