"use client";
import React, { useRef, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { cn } from '../utils'; // Utility function for conditional classNames

// Props for the main Dialog component
interface ModalProps {
  isOpen: boolean; // Determines if the dialog is open
  onClose: () => void; // Callback function to handle dialog close
  children: ReactNode; // Content to render inside the dialog
  closeOnOverlayClick?: boolean; // Optional prop to control if clicking on the overlay closes the dialog (default: true)
  className?: string; // Optional custom className for the dialog
  positionClass?: string;
}

// Props for Dialog subcomponents (Header, Body, Footer)
interface ModalSubComponentProps {
  children: ReactNode; // Content for the subcomponent
  className?: string; // Optional custom className for styling
}

// Main Dialog component
export const Dialog: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeOnOverlayClick = true, // Default value is true
  className,
  positionClass

}) => {
  const modalRef = useRef<HTMLDivElement>(null); // Ref to the dialog container
  const previousActiveElement = useRef<HTMLElement | null>(null); // Stores the element that was focused before opening the dialog

  // Handle side effects when the dialog opens or closes
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement; // Save the currently focused element
      modalRef.current?.focus(); // Focus the modal for accessibility
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      document.body.style.touchAction = 'none'; // Prevent iOS touch scroll
    } else {
      document.body.style.overflow = ''; // Restore background scrolling
      document.body.style.touchAction = '';
      previousActiveElement.current?.focus(); // Return focus to the previously active element
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [isOpen]);

  // Handle keyboard interactions
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose(); // Close dialog when Escape key is pressed
    }

    if (event.key === 'Tab' && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
      );      

      const firstElement = focusableElements[0]; // First focusable element in the dialog
      const lastElement = focusableElements[focusableElements.length - 1]; // Last focusable element in the dialog

      // Handle shift+Tab to loop focus back to the last element
      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
      // Handle Tab to loop focus back to the first element
      else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  };

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose(); // Close dialog if overlay is clicked (if enabled)
    }
  };

  // Render nothing if the dialog is not open
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      role="dialog" // Accessibility role
      aria-modal="true" // Accessibility attribute indicating the dialog is modal
      className={cn("fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(76,76,76,0.5)]", positionClass)}
      onClick={handleOverlayClick} // Handle overlay click
      onKeyDown={(e) => handleKeyDown(e as unknown as KeyboardEvent)} // Handle keyboard interactions
    >
      <div
        ref={modalRef} // Ref to the dialog container
        tabIndex={-1} // Make the dialog focusable
        className={cn(
          "bg-white p-6 rounded-lg shadow-xl w-full max-w-md transform transition-transform scale-100 animate-modal-scale",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the dialog from closing it
      >
        {children}
      </div>
    </div>,
    document.body // Render dialog into the root of the document
  );
};

// Subcomponents with reusable styles and optional className

/**
 * DialogHeader: A styled header for the dialog.
 */
export const DialogHeader: React.FC<ModalSubComponentProps> = ({ children, className }) => (
  <header className={cn("flex justify-between items-start text-[20px] font-bold", className)}>
    {children}
  </header>
);

/**
 * DialogBody: A styled body section for the dialog.
 */
export const DialogBody: React.FC<ModalSubComponentProps> = ({ children, className }) => (
  <div className={cn("py-4", className)}>{children}</div>
);

/**
 * DialogFooter: A styled footer for the dialog.
 */
export const DialogFooter: React.FC<ModalSubComponentProps> = ({ children, className }) => (
  <footer className={cn("text-right", className)}>
    {children}
  </footer>
);
