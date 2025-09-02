"use client";

import React, { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '../utils'; // Utility function for conditional classNames
 
// Define the toast variants with Tailwind classes
const toastVariants = cva(
  "font-bold rounded-md shadow-md py-[14px] px-4 gap-4 flex items-center z-50", // Shared base classes
  {
    variants: {
      position: {
        top: "fixed top-4 left-1/2 -translate-x-1/2",
        bottom: "fixed bottom-4 left-1/2 -translate-x-1/2",
        topLeft: "fixed top-4 left-4",
        topRight: "fixed top-4 right-4",
        bottomLeft: "fixed bottom-4 left-4",
        bottomRight: "fixed bottom-4 right-4",
      },
      bgColor: {
        success: "bg-primary100 text-brandBlack",
        error: "bg-[#e16645] text-brandWhite",
        info: "bg-blue-500 text-brandWhite",
        warning: "bg-[#25a9ef] text-brandWhite"
      },
    },
    defaultVariants: {
      position: "top", // Default position
      bgColor: "info", // Default background color
    },
  }
);
 
export type ToastProps = VariantProps<typeof toastVariants> & {
  message: React.ReactNode; // Allow HTML or components in message
  autoCloseDuration?: number; // Optionally define auto-close duration
  onClose: () => void; // Function to notify the parent to close the toast
  className?: string; // Custom className for additional styling
  closeButton?: React.ReactNode; // Custom close button (optional)
};
 
export const Toast: React.FC<ToastProps> = ({
  position,
  bgColor,
  message,
  autoCloseDuration = 3000,
  onClose,
  className,
  closeButton = (
    <span className="demo-icon cursor-pointer text-[20px]">&times;</span>
  ),
}) => {
  const [isVisible, setIsVisible] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, autoCloseDuration);
 
    return () => clearTimeout(timer);
  }, [autoCloseDuration, onClose]);
 
  if (!isVisible) return null;
 
  return (
    <div
      className={cn(toastVariants({ position, bgColor }), className)}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      {message && <div className="flex-1">{message}</div>}
 
      {/* Render the passed close button */}
        {React.cloneElement(closeButton as React.ReactElement, {
          onClick: () => {
            setIsVisible(false);
            onClose();
          },
        })}
    </div>
  );
};