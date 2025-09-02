'use client';

import React, { 
  createContext, 
  useContext, 
  useState, 
  useRef, 
  useEffect, 
  ReactNode, 
  ReactElement,
  useCallback 
} from 'react';
import { cn } from "../utils";
import { Button } from '../Button';

// Context
type DropdownContextType = {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  closeOnItemClick: boolean;
};

export const DropdownContext = createContext<DropdownContextType | undefined>(undefined);

const useDropdown = (): DropdownContextType => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('useDropdown must be used within a DropdownMenu');
  }
  return context;
};

// Prop Types
export type DropdownMenuProps = {
  children: ReactNode;
  className?: string;
  initialOpen?: boolean;
  closeOnItemClick?: boolean;
  controlledOpen?: boolean;
  onClose?: () => void;
};

export type DropdownTriggerProps = {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  activeClassName?: string;
};

export type DropdownContentProps = {
  children: ReactNode;
  className?: string;
};

// DropdownMenu Component
export const DropdownMenu = ({ 
  children, 
  className, 
  initialOpen = false, 
  closeOnItemClick = true, 
  controlledOpen,
  onClose
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentIsOpen = controlledOpen !== undefined ? controlledOpen : isOpen;

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  }, [closeDropdown]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const contextValue = React.useMemo(
    () => ({
      isOpen: currentIsOpen,
      toggleDropdown,
      closeDropdown,
      closeOnItemClick,
    }),
    [currentIsOpen, toggleDropdown, closeDropdown, closeOnItemClick]
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      <div
        ref={menuRef}
        className={cn("relative inline-block", className)}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

// DropdownTrigger Component
export const DropdownTrigger = ({ 
  children, 
  asChild, 
  className, 
  activeClassName 
}: DropdownTriggerProps) => {
  const { toggleDropdown, isOpen } = useDropdown();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDropdown();
    }
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as ReactElement, {
      onClick: (e: React.MouseEvent) => {
        children.props.onClick?.(e);
        toggleDropdown();
      },
      onKeyDown: (e: React.KeyboardEvent) => {
        children.props.onKeyDown?.(e);
        handleKeyDown(e);
      },
      'aria-haspopup': 'menu',
      'aria-expanded': isOpen,
      className: cn(
        children.props.className, 
        className, 
        isOpen && activeClassName
      ),
    });
  }

  return (
    <Button
      onClick={toggleDropdown}
      onKeyDown={handleKeyDown}
      aria-haspopup="menu"
      aria-expanded={isOpen}
      variant="primary"
      className={cn(
        "outline-none",
        className,
        isOpen && activeClassName
      )}
    >
      {children}
    </Button>
  );
};

// DropdownContent Component
export const DropdownContent = ({ 
  children, 
  className 
}: DropdownContentProps) => {
  const { isOpen, closeDropdown, closeOnItemClick } = useDropdown();
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const animationTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, 10);

      return () => clearTimeout(animationTimeout);
    } else {
      setIsAnimating(false);
      const removeTimeout = setTimeout(() => {
        setShouldRender(false);
      }, 300);

      return () => clearTimeout(removeTimeout);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleItemClick = (event: React.MouseEvent) => {
    if (closeOnItemClick) {
      closeDropdown();
    } else {
      event.stopPropagation();
    }
  };

  return (
    <div
      className={cn(
        "absolute left-0 mt-2 min-w-[279px] p-3 bg-brandWhite rounded-lg shadow-lg z-[999] transform transition-all duration-300 ease-in-out",
        isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95",
        className
      )}
      role="menu"
      tabIndex={-1}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement, {
            onClick: (e: React.MouseEvent) => {
              child.props.onClick?.(e);
              handleItemClick(e);
            },
          });
        }
        return child;
      })}
    </div>
  );
};
