import React, { createContext, useContext, useState, useCallback } from "react";
import { cn } from "../../../lib/utils";
import { X, Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

// Toast Context
const ToastContext = createContext({
  toasts: [],
  toast: () => {},
  closeToast: () => {},
});

// Toast Provider
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const closeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback(({ title, description, status, duration = 5000, isClosable = true }) => {
    const id = Math.random().toString(36).substring(2, 9);
    
    const newToast = {
      id,
      title,
      description,
      status,
      isClosable,
    };
    
    setToasts((prev) => [...prev, newToast]);
    
    if (duration > 0) {
      setTimeout(() => {
        closeToast(id);
      }, duration);
    }
    
    return id;
  }, [closeToast]);

  return (
    <ToastContext.Provider value={{ toasts, toast, closeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

// Toast Container
function ToastContainer() {
  const { toasts, closeToast } = useContext(ToastContext);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-0 right-0 z-50 p-4 space-y-2 max-w-md w-full">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClose={() => closeToast(toast.id)}
        />
      ))}
    </div>
  );
}

// Toast Component
function Toast({ toast, onClose }) {
  const { title, description, status, isClosable } = toast;

  const statusStyles = {
    info: {
      icon: Info,
      bg: "bg-blue-500",
    },
    success: {
      icon: CheckCircle,
      bg: "bg-green-500",
    },
    warning: {
      icon: AlertTriangle,
      bg: "bg-orange-500",
    },
    error: {
      icon: XCircle,
      bg: "bg-red-500",
    },
  };

  const StatusIcon = statusStyles[status]?.icon || Info;
  const bgColor = statusStyles[status]?.bg || "bg-blue-500";

  return (
    <div
      className={cn(
        "flex w-full bg-white dark:bg-navy-800 shadow-md rounded-lg overflow-hidden",
        "transform transition-all duration-500 ease-in-out",
        "animate-slideIn"
      )}
      role="alert"
    >
      <div className={cn("flex items-center justify-center p-4", bgColor)}>
        <StatusIcon className="h-6 w-6 text-white" />
      </div>
      <div className="flex-1 p-4">
        {title && (
          <div className="font-semibold text-gray-900 dark:text-white">{title}</div>
        )}
        {description && (
          <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
        )}
      </div>
      {isClosable && (
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

// Hook for using toast
export function useToast() {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context.toast;
} 