"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
  useId,
} from "react";

export type AccordionContextType = {
  openItems: string[];
  toggleItem: (id: string) => void;
  multiplePanelOpen: boolean;
};

export const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  defaultActiveKey?: string | string[];
  multiplePanelOpen?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  defaultActiveKey = [],
  multiplePanelOpen = false,
}) => {
  const accordionId = useId();
  const [openItems, setOpenItems] = useState<string[]>(
    Array.isArray(defaultActiveKey) ? defaultActiveKey : [defaultActiveKey]
  );

  const toggleItem = (id: string) => {
    if (multiplePanelOpen) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, multiplePanelOpen }}>
      <div role="region" aria-labelledby={accordionId} className={className}>
        <h2 id={accordionId} className="sr-only">
          Accordion Section
        </h2>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export type AccordionItemProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  children,
  className,
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { openItems } = context;
  const isOpen = openItems.includes(id);

  return (
    <div
      role="presentation"
      data-open={isOpen}
      className={`border-b border-grey350 last:border-b-0 ${className}`}
    >
      {children}
    </div>
  );
};

export type AccordionHeaderProps = {
  id: string;
  children: ReactNode;
  iconOpen?: ReactNode;
  iconClosed?: ReactNode;
  iconPosition?: "start" | "end";
  className?: string;
};

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  id,
  children,
  iconOpen,
  iconClosed,
  iconPosition = "end",
  className,
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionHeader must be used within an Accordion");
  }

  const { openItems, toggleItem } = context;
  const isOpen = openItems.includes(id);

  const handleClick = () => toggleItem(id);

  const defaultIconOpen = <span className="demo-icon text-xl">-</span>;
  const defaultIconClosed = <span className="demo-icon text-xl">+</span>;

  return (
    <button
      tabIndex={0}
      id={`${id}-header`}
      aria-controls={`${id}-panel`}
      aria-expanded={isOpen ? "true" : "false"}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleItem(id);
        }
      }}
      className={`flex items-center w-full text-left py-3 px-4 ${
        iconPosition === "start" ? "justify-start" : "justify-between"
      } ${isOpen ? "bg-gray-100 font-semibold" : ""} ${className}`}
    >
      {iconPosition === "start" && (
        <span className="mr-2 flex items-center">
          {isOpen ? iconOpen || defaultIconOpen : iconClosed || defaultIconClosed}
        </span>
      )}
      <span>{children}</span>
      {iconPosition === "end" && (
        <span className="ml-2 flex items-center">
          {isOpen ? iconOpen || defaultIconOpen : iconClosed || defaultIconClosed}
        </span>
      )}
    </button>
  );
};

export type AccordionPanelProps = {
  id: string;
  children: ReactNode;
  className?: string;
  customRef?: React.RefObject<HTMLDivElement>;
};

export const AccordionPanel: React.FC<AccordionPanelProps> = ({
  id,
  children,
  className,
  customRef,
}) => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionPanel must be used within an Accordion");
  }

  const { openItems } = context;
  const isOpen = openItems.includes(id);

  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    let timer: NodeJS.Timeout;

    if (isOpen) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      timer = setTimeout(() => {
        panel.style.overflow = "visible";
        panel.style.maxHeight = "none";
      }, 200);
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      requestAnimationFrame(() => {
        panel.style.overflow = "hidden";
        panel.style.maxHeight = "0";
      });
    }

    const focusableElements = panel.querySelectorAll<HTMLElement>(
      "a, button, input, select, textarea, [tabindex]"
    );
    focusableElements.forEach((el) => {
      el.tabIndex = isOpen ? 0 : -1;
    });

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      ref={panelRef}
      id={`${id}-panel`}
      role="region"
      aria-labelledby={`${id}-header`}
      aria-hidden={!isOpen}
      className={`overflow-hidden max-h-0 transition-all duration-300 ease-in-out ${className}`}
    >
      <div ref={customRef} className="p-4" {...(!isOpen ? { tabIndex: -1 } : {})}>
        {children}
      </div>
    </div>
  );
};
