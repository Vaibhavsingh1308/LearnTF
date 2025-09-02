'use client';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const AemSidebar = () => {

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };


  return (
    <aside className="w-80 bg-gray-800 text-white min-h-screen p-4 hidden md:block">
      <ul className="space-y-2">
        {/* Home */}
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('services')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Global
            {activeMenu === 'services' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'services' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/Header" className="block px-3 py-1 hover:bg-gray-700 rounded">Header</Link></li>
              <li><Link href="/AemComponent/Footer" className="block px-3 py-1 hover:bg-gray-700 rounded">Footer</Link></li>
              <li><Link href="/AemComponent/Breadcrumb" className="block px-3 py-1 hover:bg-gray-700 rounded">Breadcrumb</Link></li>
              <li><Link href="/AemComponent/BsCard" className="block px-3 py-1 hover:bg-gray-700 rounded">Bs Card</Link></li>
              <li><Link href="/AemComponent/offers" className="block px-3 py-1 hover:bg-gray-700 rounded">Offer Card</Link></li>
              <li><Link href="/AemComponent/MoreItem" className="block px-3 py-1 hover:bg-gray-700 rounded">More Item</Link></li>
              <li><Link href="/AemComponent/accordion" className="block px-3 py-1 hover:bg-gray-700 rounded">Accordion</Link></li>
              <li><Link href="/AemComponent/button" className="block px-3 py-1 hover:bg-gray-700 rounded">Button</Link></li>
              <li><Link href="/AemComponent/AppLink" className="block px-3 py-1 hover:bg-gray-700 rounded">App Link</Link></li>
              <li><Link href="/AemComponent/Testimonial" className="block px-3 py-1 hover:bg-gray-700 rounded">Testimonial</Link></li>
              <li><Link href="/AemComponent/StoreDetails" className="block px-3 py-1 hover:bg-gray-700 rounded">Store Details</Link></li>
              <li><Link href="/AemComponent/MultiBsCards" className="block px-3 py-1 hover:bg-gray-700 rounded">Multi Bs Cards</Link></li>
              <li><Link href="/AemComponent/ImgVideoContentBlock" className="block px-3 py-1 hover:bg-gray-700 rounded">Img Video Content Block</Link></li>
              <li><Link href="/AemComponent/RicardoBanner" className="block px-3 py-1 hover:bg-gray-700 rounded">Ricardo Banner</Link></li>
              <li><Link href="/AemComponent/Teaser" className="block px-3 py-1 hover:bg-gray-700 rounded">Teaser</Link></li>
              <li><Link href="/AemComponent/TabSide" className="block px-3 py-1 hover:bg-gray-700 rounded">Tab</Link></li>
              <li><Link href="/AemComponent/Contest" className="block px-3 py-1 hover:bg-gray-700 rounded">Contest</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('homePage')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Home Page
            {activeMenu === 'homePage' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'homePage' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/latestCatchUp" className="block px-3 py-1 hover:bg-gray-700 rounded">Latest Catch Up</Link></li>
              <li><Link href="/AemComponent/SceneTile" className="block px-3 py-1 hover:bg-gray-700 rounded">Scene Tile</Link></li>
              <li> <Link href="/AemComponent/category" className="block px-3 py-1 hover:bg-gray-700 rounded">Category</Link></li>
              <li><Link href="/AemComponent/FeatureOfferCard" className="block px-3 py-1 hover:bg-gray-700 rounded">Feature Offers Card</Link></li>
              <li><Link href="/AemComponent/BannerSlider" className="block px-3 py-1 hover:bg-gray-700 rounded">Banner Slider</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('RecipeGalleryPage')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Recipes
            {activeMenu === 'RecipeGalleryPage' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'RecipeGalleryPage' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/recipe" className="block px-3 py-1 hover:bg-gray-700 rounded">Recipe</Link></li>
              <li><Link href="/AemComponent/RecipesCategory" className="block px-3 py-1 hover:bg-gray-700 rounded">Recipes Category</Link></li>
              <li><Link href="/AemComponent/Recipesforyou" className="block px-3 py-1 hover:bg-gray-700 rounded">Recipes for you</Link></li>
            </ul>
          </div>
        </li>

       

        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('Timeline')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Timeline
            {activeMenu === 'Timeline' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'Timeline' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/BannerWithBackground" className="block px-3 py-1 hover:bg-gray-700 rounded">Banner With Background</Link></li>
              <li><Link href="/AemComponent/Timeline" className="block px-3 py-1 hover:bg-gray-700 rounded">Time line Slider</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('ValueFlyer')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
          Value Flyer
            {activeMenu === 'ValueFlyer' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'ValueFlyer' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/FreshGuaranteeModule" className="block px-3 py-1 hover:bg-gray-700 rounded">Fresh Guarantee Module</Link></li>
              <li><Link href="/AemComponent/EarnPointsModule" className="block px-3 py-1 hover:bg-gray-700 rounded">Earn Points Module</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('Panache')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Panache Page
            {activeMenu === 'Panache' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'Panache' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/SideBar" className="block px-3 py-1 hover:bg-gray-700 rounded">Filter Sidebar</Link></li>
              <li><Link href="/AemComponent/InnerBannerFull" className="block px-3 py-1 hover:bg-gray-700 rounded">Inner Banner Full</Link></li>
              <li><Link href="/AemComponent/DescriptionBanner" className="block px-3 py-1 hover:bg-gray-700 rounded">Description Banner</Link></li>
            </ul>
          </div>
        </li>

        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('ContactPage')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Contact Page
            {activeMenu === 'ContactPage' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'ContactPage' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/ContactUs" className="block px-3 py-1 hover:bg-gray-700 rounded">Contact Us</Link></li>
              <li><Link href="/AemComponent/ContactInfo" className="block px-3 py-1 hover:bg-gray-700 rounded">Contact Info</Link></li>
              <li><Link href="/AemComponent/TextComponent" className="block px-3 py-1 hover:bg-gray-700 rounded">Contact Text</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('entertaining')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Entertaining
            {activeMenu === 'entertaining' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'entertaining' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/EasyEntertaining" className="block px-3 py-1 hover:bg-gray-700 rounded">Icon Cards</Link></li>
              <li><Link href="/AemComponent/CardSlider" className="block px-3 py-1 hover:bg-gray-700 rounded">Card Slider</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('foodrescue')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Food Rescue
            {activeMenu === 'foodrescue' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'foodrescue' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/FoodRescueOverlayCard" className="block px-3 py-1 hover:bg-gray-700 rounded">Food Rescue</Link></li>
              <li><Link href="/AemComponent/OurPartFoodRescue" className="block px-3 py-1 hover:bg-gray-700 rounded">Our Part Food Rescue</Link></li>
              <li><Link href="/AemComponent/VideoSlider" className="block px-3 py-1 hover:bg-gray-700 rounded">Video Slider</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('Compliments')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Compliments Page
            {activeMenu === 'Compliments' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'Compliments' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/TextComponent" className="block px-3 py-1 hover:bg-gray-700 rounded">Text Component</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('RoastCalculatorPage')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Roast Calculator Page
            {activeMenu === 'RoastCalculatorPage' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'RoastCalculatorPage' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/RoastCalculator" className="block px-3 py-1 hover:bg-gray-700 rounded">Roast Calculator</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('LogoImage')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
              Gift Card every Occasion
            {activeMenu === 'LogoImage' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'LogoImage' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/LogoImage" className="block px-3 py-1 hover:bg-gray-700 rounded">Logo Image</Link></li>
            </ul>
          </div>
        </li>
        <li className="border-b border-gray-700 pb-2">
          <button onClick={() => toggleMenu('Foodheroapp')} className="w-full flex justify-between items-center px-3 py-2 hover:bg-gray-700 rounded">
            Food Hero App
            {activeMenu === 'Foodheroapp' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeMenu === 'Foodheroapp' ? 'max-h-[1000px]' : 'max-h-0'}`}>
            <ul className="ml-4 mt-1 space-y-1 py-1">
              <li><Link href="/AemComponent/Foodheroapp" className="block px-3 py-1 hover:bg-gray-700 rounded">Food Hero</Link></li>
            </ul>
          </div>
        </li>
        {/* Content Modules */}
      </ul>
    </aside>
  );
};

export default AemSidebar;
