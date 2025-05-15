import React, { createContext, useContext, useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";

const MenuContext = createContext({
  isOpen: false,
  toggle: () => {},
  close: () => {},
});

const Menu = ({ children, className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  
  return (
    <MenuContext.Provider value={{ isOpen, toggle, close }}>
      <div className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </MenuContext.Provider>
  );
};

Menu.displayName = "Menu";

const MenuButton = React.forwardRef(({ className, children, ...props }, ref) => {
  const { toggle } = useContext(MenuContext);
  
  return (
    <button
      ref={ref}
      className={cn("inline-flex items-center", className)}
      onClick={toggle}
      {...props}
    >
      {children}
    </button>
  );
});

MenuButton.displayName = "MenuButton";

const MenuList = ({ className, children, ...props }) => {
  const { isOpen, close } = useContext(MenuContext);
  const menuRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        close();
      }
    };
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, close]);
  
  if (!isOpen) return null;
  
  return (
    <div
      ref={menuRef}
      className={cn(
        "absolute right-0 z-10 mt-2 w-auto min-w-[10rem] rounded-md bg-white dark:bg-navy-800 shadow-light dark:shadow-dark p-1 border border-gray-200 dark:border-navy-700",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

MenuList.displayName = "MenuList";

const MenuItem = React.forwardRef(({ className, children, onClick, ...props }, ref) => {
  const { close } = useContext(MenuContext);
  
  const handleClick = (e) => {
    if (onClick) onClick(e);
    close();
  };
  
  return (
    <button
      ref={ref}
      className={cn(
        "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-navy-700 focus:outline-none",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
});

MenuItem.displayName = "MenuItem";

export { Menu, MenuButton, MenuList, MenuItem }; 