import { topMenuData } from "../../../../utils/menuData";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface CollapsibleMenuProps {
  title: string;
  items: MenuItem[];
  isOpen: boolean;
  toggle: () => void;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({ title, items, isOpen, toggle }) => {
  return (
    <li className=" border-b-[1px] border-gray-600">
      <button
        onClick={toggle}
        className="flex items-center w-full py-2 pr-[4px] mb-[6px] text-base text-gray-900 transition duration-75 rounded-lg group"
      >
        <span className="flex-1 text-left rtl:text-right whitespace-nowrap">{title}</span>
        <svg
          className={`w-3 h-3 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Collapsible submenu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <ul className="py-2 space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex  items-center w-full p-0 text-gray-900 font-light transition duration-75 pl-3 pb-[10px] group "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const HeaderDrawer: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      {/* Button to trigger drawer */}
      <div className="text-center">
        <button
          className="text-white mt-[6px]"
          onClick={toggleDrawer}
        >
          <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666748 15.5129V13.5129H23.3334V15.5129H0.666748ZM0.666748 9.00007V7.00014H23.3334V9.00007H0.666748ZM0.666748 2.48727V0.487305H23.3334V2.48727H0.666748Z" fill="white" />
          </svg>
        </button>
      </div>

      {/* Drawer Component */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-0 overflow-y-auto transition-transform duration-300 min-w-[100%] ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} bg-blackOpacity w-64 dark:bg-gray-800`}
        aria-labelledby="drawer-navigation-label"
      >
        <div className="bg-white h-screen p-4 overflow-y-auto max-w-[100%] md:max-w-[60%] relative">
          <h5 id="drawer-navigation-label" className="text-base font-semibold text-black uppercase dark:text-gray-400 min-h-[35px]"></h5>
          
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 left-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              {topMenuData.map((menu, index) => (
                <CollapsibleMenu
                  key={index}
                  title={menu.title}
                  items={menu.items}
                  isOpen={openSection === menu.title.toLowerCase().replace(/\s+/g, '')}
                  toggle={() => toggleSection(menu.title.toLowerCase().replace(/\s+/g, ''))}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDrawer;
