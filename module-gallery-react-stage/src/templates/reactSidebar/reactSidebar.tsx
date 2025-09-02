'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ReactSidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return ( 
    <aside className="w-80 bg-gray-800 text-white min-h-screen p-4 hidden md:block">
      <ul className="space-y-2">
        {/* Home */}
        <li className="border-b border-gray-700 pb-2"><Link href="/" className="block px-3 py-2 hover:bg-gray-700 rounded">Home</Link></li>

        {/* Content Modules */}
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('services')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
           Form Controls
            {activeMenu === 'services' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'services' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
            <li><Link href="/ReactComponent/Input" className="block px-2 py-1 hover:bg-gray-600 rounded">Input</Link></li>
            <li><Link href="/ReactComponent/checkbox" className="block px-2 py-1 hover:bg-gray-600 rounded">Checkbox</Link></li>
            <li><Link href="/ReactComponent/select" className="block px-2 py-1 hover:bg-gray-600 rounded">Select</Link></li>
            <li><Link href="/ReactComponent/Switch" className="block px-2 py-1 hover:bg-gray-600 rounded">Switch</Link></li>
            <li><Link href="/ReactComponent/radio" className="block px-2 py-1 hover:bg-gray-600 rounded">Radio</Link></li>
            <li><Link href="/ReactComponent/RangeSlider" className="block px-2 py-1 hover:bg-gray-600 rounded">Range Slider</Link></li>
            <li><Link href="/ReactComponent/datepicker" className="block px-2 py-1 hover:bg-gray-600 rounded">Date Picker</Link></li>          
            </ul>
          </div>
        </li>

         {/* CTA Modules */}
         <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('CtaModule')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
           Buttons & Actions
            {activeMenu === 'CtaModule' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'CtaModule' ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/ReactComponent/button" className="block px-2 py-1 hover:bg-gray-600 rounded">Button</Link></li>
              <li><Link href="/ReactComponent/FavoriteButton" className="block px-2 py-1 hover:bg-gray-600 rounded">Favorite Button</Link></li>
              <li><Link href="/ReactComponent/QuantityButton" className="block px-2 py-1 hover:bg-gray-600 rounded">Quantity Button</Link></li>
            </ul>
          </div>
        </li> 

         {/* Media Modules */}
         <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('MediaModules')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Navigation
          {activeMenu === 'MediaModules' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'MediaModules' ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/ReactComponent/pagination" className="block px-2 py-1 hover:bg-gray-600 rounded">Pagination</Link></li>
              <li><Link href="/ReactComponent/MegaMenus" className="block px-2 py-1 hover:bg-gray-600 rounded">Mega Menu</Link></li>
              <li><Link href="/ReactComponent/DropdownMenu" className="block px-2 py-1 hover:bg-gray-600 rounded">Dropdown Menu</Link></li>
              <li><Link href="/ReactComponent/SlidePanel" className="block px-2 py-1 hover:bg-gray-600 rounded">Slide Panel</Link></li>
            </ul>
            </div>
          </li>

        {/* Image Title Modules */}
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('ImageTitle')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
          Layout & Banners
            {activeMenu === 'ImageTitle' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'ImageTitle' ? 'max-h-[500px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/ReactComponent/InnerBannerBox" className="block px-2 py-1 hover:bg-gray-600 rounded">Inner Banner Box</Link></li>
              <li><Link href="/ReactComponent/InnerBannerFull" className="block px-2 py-1 hover:bg-gray-600 rounded">Inner Banner Full</Link></li>
              {/* <li><Link href="/ReactComponent/InnerBannerText" className="block px-2 py-1 hover:bg-gray-600 rounded">Inner Banner Text</Link></li>  */}
              <li><Link href="/ReactComponent/box" className="block px-2 py-1 hover:bg-gray-600 rounded">Box</Link></li>
              <li><Link href="/ReactComponent/card" className="block px-2 py-1 hover:bg-gray-600 rounded">Card</Link></li>
            </ul>
          </div>
        </li>


        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('MediaDisplay')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Media & Visuals
            {activeMenu === 'MediaDisplay' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'MediaDisplay' ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/ReactComponent/Carousel" className="block px-2 py-1 hover:bg-gray-600 rounded">Slider</Link></li> 
              <li><Link href="/ReactComponent/MultipleSlider" className="block px-2 py-1 hover:bg-gray-600 rounded">Multi Item Carousel</Link></li>    
              <li><Link href="/ReactComponent/ImageMagnifier" className="block px-2 py-1 hover:bg-gray-600 rounded">Image Magnifier</Link></li>
            </ul>
          </div>
        </li>

        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('OverlaysNotifications')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Overlays & Notifications
            {activeMenu === 'OverlaysNotifications' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'OverlaysNotifications' ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
                <li><Link href="/ReactComponent/toast" className="block px-2 py-1 hover:bg-gray-600 rounded">Toast</Link></li>
                <li><Link href="/ReactComponent/tooltip" className="block px-2 py-1 hover:bg-gray-600 rounded">Tooltip</Link></li>
                <li><Link href="/ReactComponent/dialog" className="block px-2 py-1 hover:bg-gray-600 rounded">Dialog</Link></li> 
            </ul>
          </div>
        </li>

        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('StructureUtility')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Structure & Utility
            {activeMenu === 'StructureUtility' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'StructureUtility' ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
                <li><Link href="/ReactComponent/tabs" className="block px-2 py-1 hover:bg-gray-600 rounded">Tabs</Link></li>
                <li><Link href="/ReactComponent/Separator" className="block px-2 py-1 hover:bg-gray-600 rounded">Separator</Link></li>
                <li><Link href="/ReactComponent/accordian" className="block px-2 py-1 hover:bg-gray-600 rounded">Accordion</Link></li>
            </ul>
          </div>
        </li>

        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('Miscellaneous')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
          Tags and Quotes
            {activeMenu === 'Miscellaneous' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'Miscellaneous' ? 'max-h-40' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
            <li><Link href="/ReactComponent/quotes" className="block px-2 py-1 hover:bg-gray-600 rounded">Quotes</Link></li>   
              <li><Link href="/ReactComponent/tag" className="block px-2 py-1 hover:bg-gray-600 rounded">tag</Link></li>  
            </ul>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default ReactSidebar;
