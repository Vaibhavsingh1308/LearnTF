"use client";

import { ReactNode } from "react";
import Link from "next/link";
import "./megaMenu.css";
export type { HeaderData };


interface HeaderData {
  dropdown: DocType[];
}

interface DocType {
  label?: string;
  title?: string;
  sameLevelList?: boolean | null;
  link?: string;
  target?: string;
  isDropdown?: boolean;
  dropdown?: DocType[];
  bottomContent?: boolean;
}

interface NavigationMenuTriggerProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  level?: number;
}

const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
  children,
  className,
  isOpen,
  onClick,
  level,
}) => (
  <button
    className={`menu-trigger ${isOpen ? `${!level ? "active" : `active-${level}`}` : ""} ${className || ""}`}
    aria-label={`click to ${children}`}
    onClick={(event) => {
      let levelDup: number = level as number;
      if (isOpen) {
        document.querySelectorAll(".menu-display-none").forEach((el) => {
          el.classList.remove("menu-display-none");
        });
      } else {
        while (--levelDup) {
          const elements = document.getElementsByClassName(`active-${levelDup}`);
          for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add("menu-display-none");
          }
        }
      }
      onClick(event);
    }}
  >
    {children}
  </button>
);

interface NavigationMenuContentProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
}

const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
  children,
  className,
  isOpen,
}) => (isOpen ? <div className={`menu-content ${className}`}>{children}</div> : null);

interface NavigationMenuItemProps {
  id: string;
  children?: ReactNode;
  label: string;
  isDropdown?: boolean;
  className?: string;
  link?: string;
  openItems: Record<string, boolean>;
  setOpenItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  closeAll: ({ allowPanel }: { allowPanel?: boolean }) => void;
  haveSameLevel: boolean;
  target?: string;
  isViewAll?: boolean;
  isLastChildElement: boolean;
  hasNestedChildren: boolean;
}

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
  id,
  children,
  label,
  link,
  isDropdown,
  openItems,
  className,
  isViewAll,
  setOpenItems,
  closeAll,
  target,
  haveSameLevel,
}) => {
  const isOpen = openItems[id] || false;
  const level = id.split("-").length;
  const toggleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpenItems((prev) => {
      const newOpenItems: Record<string, boolean> = {};
      const currentPath = id.split("-");
      const parentKey = currentPath.slice(0, -1).join("-");
      const isTopLevel = currentPath.length === 2;

      if (isTopLevel) return { [id]: !isOpen };

      Object.keys(prev).forEach((key) => {
        if (key.startsWith(parentKey)) {
          newOpenItems[key] = prev[key];
        }
      });

      Object.keys(prev).forEach((key) => {
        const keyPath = key.split("-");
        const isSameLevel = keyPath.length === currentPath.length;
        const isSibling = key.startsWith(parentKey) && key !== id;

        if (isSameLevel && isSibling) {
          newOpenItems[key] = false;
        }
      });

      return { ...newOpenItems, [id]: !isOpen };
    });
  };

  return (
    <div
      className={`menu-item ${className || ""} ${isDropdown ? "dropdown" : ""} ${haveSameLevel ? "is-parent" : ""}`}
      onKeyDown={(e) => {
        const menuRoot = document.querySelector(".menu-content");
        if (!menuRoot || e.key !== "Tab") return;
        const focusable = menuRoot.querySelectorAll<HTMLElement>('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) closeAll({ allowPanel: true });
        else if (!e.shiftKey && document.activeElement === last) closeAll({ allowPanel: true });
      }}
    >
      {isDropdown ? (
        <>
          <NavigationMenuTrigger onClick={toggleOpen} isOpen={isOpen} level={level} className={`menu-button-level-${level}`}>
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent isOpen={isOpen} className={`menu-content-level-${level}`}>
            {children}
          </NavigationMenuContent>
        </>
      ) : (
        <Link
          href={link || "#"}
          target={target}
          aria-label={`click to ${label}`}
          className={`menu-link mt-0 menu-link-level-${level} ${isDropdown && haveSameLevel ? "no-icon" : ""} ${isViewAll ? "view-all-link" : ""}`}
          onClick={() => closeAll({ allowPanel: true })}
        >
          <span className="inline-flex">{label}</span>
        </Link>
      )}
    </div>
  );
};
