'use client';
import React, { useState, useRef, useEffect, ReactNode, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { cn } from "../utils"; // Utility function for conditional class names.

// Define the context structure for the modal
const ModalContext = createContext<{
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
} | null>(null);

// Modal component props
interface ModalProps {
  children?: ReactNode;
  initialOpen?: boolean; // Determines if the modal is open by default
}

// Modal provides context for its child components
export const Modal: React.FC<ModalProps> = ({ children, initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// ModalTrigger props
interface ModalTriggerProps {
  children?: ReactNode;
  asChild?: boolean;
}

// ModalTrigger to open the modal
export const ModalTrigger: React.FC<ModalTriggerProps> = ({ children, asChild }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalTrigger must be used within a Modal");

  const { openModal } = context;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: openModal,
    });
  }

  return (
    <button
      onClick={openModal}
      className={cn("inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-brandWhite rounded-md")}
    >
      {children}
    </button>
  );
};

// ModalContent props
interface ModalContentProps {
  children?: ReactNode;
  className?: string;
}

// ModalContent displays modal content
export const ModalContent: React.FC<ModalContentProps> = ({ children, className }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalContent must be used within a Modal");

  const { isOpen, closeModal } = context;
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const focusableSelectors = [
      "a[href]",
      "button",
      "textarea",
      "input[type='text']",
      "input[type='radio']",
      "input[type='checkbox']",
      "select",
      "[tabindex]:not([tabindex='-1'])",
    ];

    const handleFocusTrap = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const focusableElements = modalRef.current
          ? Array.from(modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors.join(",")))
          : [];
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      // triggerRef.current = document.activeElement as HTMLElement;
      // modalRef.current?.focus();
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keydown", handleFocusTrap);
      document.body.style.overflow = "hidden";
    } else {
      triggerRef.current?.focus();
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keydown", handleFocusTrap);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className={cn("fixed inset-0 z-50 flex items-center justify-center bg-brandBlack/50 backdrop-blur-sm")}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={cn(
          "bg-white p-6 rounded-lg shadow-xl w-full max-w-md transform transition-transform scale-100 animate-modal-scale",
          className
        )}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

// ModalHeader props
interface ModalHeaderProps {
  children?: ReactNode;
  className?: string;
}

// ModalHeader for header content
export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => (
  <header className={cn("flex justify-between items-center border-b pb-2", className)}>
    {children}
  </header>
);

// ModalBody props
interface ModalBodyProps {
  children?: ReactNode;
  className?: string;
}

// ModalBody for main body content
export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => (
  <div className={cn("mt-4", className)}>{children}</div>
);

// ModalFooter props
interface ModalFooterProps {
  children?: ReactNode;
  className?: string;
}

// ModalFooter for footer content
export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => (
  <footer className={cn("mt-6 flex justify-end border-t pt-2", className)}>
    {children}
  </footer>
);

// ModalClose props
interface ModalCloseProps {
  asChild?: boolean;
  children?: ReactNode;
}

// ModalClose to close the modal
export const ModalClose: React.FC<ModalCloseProps> = ({ asChild, children }) => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("ModalClose must be used within a Modal");

  const { closeModal } = context;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: closeModal,
    });
  }

  return (
    <button onClick={closeModal} aria-label="Close" className={cn("text-grey400 hover:text-grey600")}>
      ✕
    </button>
  );
};
