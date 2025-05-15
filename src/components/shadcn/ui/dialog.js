import React, { useState, useEffect, useCallback, Fragment } from "react";
import { cn } from "../../../lib/utils";
import { X } from "lucide-react";

const DialogContext = React.createContext({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
});

export function Dialog({
  children,
  isOpen: isOpenProp,
  onClose,
  initialFocusRef,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(isOpenProp || false);

  useEffect(() => {
    if (isOpenProp !== undefined) {
      setIsOpen(isOpenProp);
    }
  }, [isOpenProp]);

  const handleClose = useCallback(() => {
    if (isOpenProp === undefined) {
      setIsOpen(false);
    }
    if (onClose) {
      onClose();
    }
  }, [isOpenProp, onClose]);

  const handleOpen = useCallback(() => {
    if (isOpenProp === undefined) {
      setIsOpen(true);
    }
  }, [isOpenProp]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  // Focus the initial ref when dialog opens
  useEffect(() => {
    if (isOpen && initialFocusRef && initialFocusRef.current) {
      setTimeout(() => {
        initialFocusRef.current.focus();
      }, 0);
    }
  }, [isOpen, initialFocusRef]);

  const contextValue = {
    isOpen,
    onOpen: handleOpen,
    onClose: handleClose,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
      {isOpen && <DialogPortal onClose={handleClose} {...props} />}
    </DialogContext.Provider>
  );
}

function DialogPortal({ children, onClose, ...props }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose} 
        aria-hidden="true"
      />
      <div 
        className="relative z-50 bg-white dark:bg-navy-800 rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-auto"
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogTrigger({ children, onClick, ...props }) {
  const { onOpen } = React.useContext(DialogContext);

  const handleClick = (e) => {
    onOpen();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div onClick={handleClick} {...props}>
      {children}
    </div>
  );
}

export function DialogContent({ children, className, ...props }) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function DialogHeader({ children, className, ...props }) {
  return (
    <div className={cn("flex items-center justify-between mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className, ...props }) {
  return (
    <h3 className={cn("text-lg font-bold text-gray-900 dark:text-white", className)} {...props}>
      {children}
    </h3>
  );
}

export function DialogDescription({ children, className, ...props }) {
  return (
    <p className={cn("text-sm text-gray-600 dark:text-gray-400", className)} {...props}>
      {children}
    </p>
  );
}

export function DialogFooter({ children, className, ...props }) {
  return (
    <div className={cn("flex justify-end space-x-2 mt-6", className)} {...props}>
      {children}
    </div>
  );
}

export function DialogCloseButton({ className, ...props }) {
  const { onClose } = React.useContext(DialogContext);

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full w-8 h-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
        className
      )}
      onClick={onClose}
      aria-label="Close"
      {...props}
    >
      <X className="w-5 h-5" />
    </button>
  );
}

export function useDialog(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onOpen, onClose };
} 