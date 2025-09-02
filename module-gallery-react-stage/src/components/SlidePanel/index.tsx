"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "../utils";

interface SlidePanelProps {
  side?: "left" | "right" | "top" | "bottom";
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  overlayClass?: string;
}

export const SlidePanel: React.FC<SlidePanelProps> = ({
  side = "left",
  isOpen,
  onClose,
  children,
  className,
  overlayClass,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      lastFocusedElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        panelRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";

      lastFocusedElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }

      if (event.key === "Tab") {
        const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
          "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!panelRef.current) return;

    // Set tabIndex=-1 on all focusable elements when closed
    const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
      "a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])"
    );

    focusableElements.forEach((el) => {
      el.tabIndex = isOpen ? 0 : -1;
    });
  }, [isOpen]);

  const handleOverlayClick = () => {
    onClose?.();
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleOverlayClick}
          className={cn("w-full h-full bg-brandBlack opacity-75 fixed left-0 top-0 z-[99999]", overlayClass)}
        />
      )}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        className={cn(
          "fixed bg-brandWhite shadow-lg transition-transform duration-300 ease-in-out z-[99999] outline-none",
          side === "left" && "top-0 bottom-0 left-0 w-72",
          side === "right" && "top-0 bottom-0 right-0 w-72",
          side === "top" && "left-0 right-0 top-0 h-72",
          side === "bottom" && "left-0 right-0 bottom-0 h-72",
          isOpen
            ? "transform translate-x-0 translate-y-0"
            : side === "left"
            ? "transform -translate-x-full"
            : side === "right"
            ? "transform translate-x-full"
            : side === "top"
            ? "transform -translate-y-[110%]"
            : "transform translate-y-full",
          !isOpen && "pointer-events-none",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Stop panel click propagation
      >
        {children}
      </div>
    </>
  );
};
