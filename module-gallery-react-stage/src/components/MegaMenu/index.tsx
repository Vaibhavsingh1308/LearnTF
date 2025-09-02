"use client";

import { useState, useEffect, ReactNode, useCallback } from "react";
import Link from "next/link";
import { Box } from "@/components";
import "./megaMenu.css";
export type { HeaderData };

interface MenuItem {
  label: string;
  level?: number;
  link?: string;
  sameLevel?: boolean;
  children?: MenuItem[];
  hasSameLevel?: boolean;
  isViewAll?: boolean;
  target?: string;
  dropdown?: MenuItem[]; // You can keep this or remove if using `children`
}

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
interface MenuItem {
  label: string;
  target?: string;
  dropdown?: MenuItem[];
  // ... other props matching your data
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
  <button className={`menu-trigger ${isOpen ? `${!level ? "active" : `active-${level}`}` : ""} ${className || ""}`} aria-label={`click to ${children}`}
    onClick={(event) => {
      let levelDup: number = level as number;
      console.log(levelDup);
      if (isOpen) {
        // If the menu is already open, remove the `menu-display-none` class from all levels
        document.querySelectorAll(".menu-display-none").forEach((el) => {
          el.classList.remove("menu-display-none");
        });
      } else {
        // If opening, add `menu-display-none` to previous levels
        while (--levelDup) {
          console.log(levelDup);
          const elements = document.getElementsByClassName(
            `active-${levelDup}`
          );
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
}) =>
  isOpen ? <div className={`menu-content ${className}`}>{children}</div> : null;

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

const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
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

    // addDataLayer({
    //   event: "nav_header",
    //   click_text: label,
    //   click_url: link ?? "",
    //   page_title: document.title,
    // });

    setOpenItems((prev) => {
      const newOpenItems: Record<string, boolean> = {};
      const currentPath = id.split("-");
      const parentKey = currentPath.slice(0, -1).join("-"); // Parent path
      const isTopLevel = currentPath.length === 2; // Level 1 items have two parts in ID (e.g., "root-0")

      if (isTopLevel) {
        return { [id]: !isOpen };
      }

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
        const isTab = e.key === "Tab";
        if (!menuRoot || !isTab) return;
        const focusable = menuRoot.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          closeAll({ allowPanel: true });
        } else if (!e.shiftKey && document.activeElement === last) {
          closeAll({ allowPanel: true });
        }
      }}
    >
      {isDropdown ? (
        <>
          <NavigationMenuTrigger
            onClick={toggleOpen}
            isOpen={isOpen}
            level={level}
            className={`menu-button-level-${level}`}
          >
            {label}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            isOpen={isOpen}
            className={`menu-content-level-${level}`}
          >
            {children}
          </NavigationMenuContent>
        </>
      ) : (
        <Link
          href={link || "#"}
          target={target}
          aria-label={`click to ${label}`}
          className={`menu-link mt-0 menu-link-level-${level} ${isDropdown && haveSameLevel ? "no-icon" : ""} ${isViewAll ? "view-all-link" : ""}`}
          onClick={() => {
            // addDataLayer({
            //   event: "nav_header",
            //   click_text: label,
            //   click_url: link ?? "",
            //   page_title: document.title,
            // });
            closeAll({ allowPanel: true }); // Close all menus when clicking the last item
          }}
        >
          {label}
        </Link>
      )}
    </div>
  );
};

interface NavigationMenuListProps {
  items: MenuItem[];
  parentId: string;
  className?: string;
  openItems: Record<string, boolean>;
  setOpenItems: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  level: number;
  closeAll: ({ allowPanel }: { allowPanel?: boolean }) => void;
  isChild: boolean;
  hasNestedChildren?: boolean;
}

const NavigationMenuList: React.FC<NavigationMenuListProps> = ({
  items,
  parentId,
  openItems,
  className,
  setOpenItems,
  level,
  closeAll,
  isChild,
  hasNestedChildren,
}) => {
  return (
    <ul className={`menu-list ${className || ""}`}>
      {items.map((item, index) => (
        <li
          key={index}
          id={`menu-item-${index + 1}`}
          className={`${item.sameLevel ? "same-level-child" : "mega-menu-items"} menu-item-list-level-${level}${index != 0 ? ` top-level-1` : ""}`}
        >
          <NavigationMenuItem
            id={`${parentId}-${index}`}
            className={`menu-item-level-${level}`}
            label={item.label}
            link={item?.link}
            isDropdown={!!item.children?.length}
            openItems={openItems}
            setOpenItems={setOpenItems}
            closeAll={closeAll}
            haveSameLevel={!!item.hasSameLevel}
            isViewAll={item?.isViewAll}
            isLastChildElement={isChild && index === items.length - 1}
            hasNestedChildren={
              hasNestedChildren && index + 1 === items.length ? true : false
            }
            target={item?.target ?? "_self"}
          >
            {item.children && (
              <NavigationMenuList
                items={item.children}
                parentId={`${parentId}-${index}`}
                openItems={openItems}
                setOpenItems={setOpenItems}
                level={level + 1}
                closeAll={closeAll}
                isChild={true}
                hasNestedChildren={item?.children?.length ? true : false}
              />
            )}
          </NavigationMenuItem>
        </li>
      ))}
    </ul>
  );
};

interface NavigationMenuProps {
  menuData: MenuItem[];
  className?: string;
  setIsPanelOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  menuData,
  className,
  setIsPanelOpen,
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const closeAll = useCallback(({ allowPanel }: { allowPanel?: boolean }) => {
    if (allowPanel && setIsPanelOpen) {
      setIsPanelOpen(false);
    }
    setOpenItems({});
  }, [setIsPanelOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".navigation-menu")) {
        closeAll({ allowPanel: false });
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [closeAll]); // ✅ include closeAll

  return (
    <nav className={`border pt-15 pb-10 p-8 relative navigation-menu ${className || ""}`}>
      <NavigationMenuList
        items={menuData}
        parentId="root"
        openItems={openItems}
        setOpenItems={setOpenItems}
        level={1}
        closeAll={closeAll}
        isChild={false}
      />
    </nav>
  );
};

interface MegaMenuProps {
  setIsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
  headerData: HeaderData;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ setIsPanelOpen, headerData}) => {
  const [navigationData, setNavigationData] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (headerData?.dropdown) {
      const recursive = (navInfo: DocType[], level = 1): MenuItem[] => {
        return navInfo.flatMap((doc) => {
          const currentItem: MenuItem = {
            label: doc.label || doc.title || "",  // <-- convert title to label here
            hasSameLevel: !!doc.sameLevelList,
            link: doc.link,
            level,
            target: doc.target,
          };
  
          if (doc.isDropdown) {
            let childItems = recursive(
              doc.dropdown || [],
              level + (doc.sameLevelList ? 0 : 1)
            );
  
            if (doc.link) {
              childItems = [
                {
                  label: `View All ${doc.label || doc.title}`,
                  link: doc.link,
                  isViewAll: true,
                  level: level + 1,
                },
                ...childItems,
              ];
            }
  
            return doc.sameLevelList
              ? [
                  currentItem,
                  ...childItems.map((child) => ({ ...child, sameLevel: true })),
                ]
              : [{ ...currentItem, children: childItems }];
          }
  
          return currentItem;
        });
      };
  
      setNavigationData(recursive(headerData.dropdown));
    }
  }, [headerData]);
  
    

  return (
    <Box className="block lg:flex navbar navbar-expand-lg component_mega_menu bg-brandWhite h-auto px-6 lg:p-0 max-w-[100%]  lg:max-w-full relative">
      <NavigationMenu
        className="flex flex-row w-full pt-[18px] pb-[18px]"
        menuData={navigationData}
        setIsPanelOpen={setIsPanelOpen}
      />
    </Box>
  );
};

export default MegaMenu;