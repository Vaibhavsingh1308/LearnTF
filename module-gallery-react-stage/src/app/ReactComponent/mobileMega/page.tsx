"use client";

import React, { useState, useCallback } from "react";
import { NavigationMenuItem } from "@/components/mobileMega";

// ✅ Define the correct type
interface MenuItem {
  label: string;
  link: string;
  dropdown?: MenuItem[];
  sameLevel?: boolean;
  target?: string;
  isViewAll?: boolean;
}

// ✅ Use the type here
const mockMenuData: MenuItem[] = [
  {
    label: "Electronics",
    link: "/electronics",
    dropdown: [
      { label: "Mobiles", link: "/electronics/mobiles" },
      { label: "Laptops", link: "/electronics/laptops" },
    ],
  },
  {
    label: "Fashion",
    link: "/fashion",
    dropdown: [
      { label: "Men", link: "/fashion/men" },
      { label: "Women", link: "/fashion/women" },
    ],
  },
];

export default function Page() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [showMenu, setShowMenu] = useState(false);

  const closeAll = useCallback(({ allowPanel = false }) => {
    if (!allowPanel) {
      setOpenItems({});
    }
  }, []);

  const renderMenuItems = (
    items: MenuItem[], // ✅ type used here
    parentId = "menu",
    level = 1,
    sameLevel = false
  ) =>
    items.map((item, index) => {
      const id = `${parentId}-${index}`;
      const hasChildren = item.dropdown && item.dropdown.length > 0;
      return (
        <NavigationMenuItem
          key={id}
          id={id}
          label={item.label}
          link={item.link}
          isDropdown={hasChildren}
          openItems={openItems}
          setOpenItems={setOpenItems}
          closeAll={closeAll}
          haveSameLevel={sameLevel}
          target={item.target}
          isViewAll={item.isViewAll}
          isLastChildElement={index === items.length - 1}
          hasNestedChildren={!!hasChildren} // ensures it's boolean
        >
          {hasChildren &&
            renderMenuItems(item.dropdown!, id, level + 1, item.sameLevel)}
        </NavigationMenuItem>
      );
    });

  return (
    <nav className="navigation-menu">
      <button
        className="hamburger-button"
        onClick={() => setShowMenu((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {showMenu && <div className="menu-list">{renderMenuItems(mockMenuData)}</div>}
    </nav>
  );
}
