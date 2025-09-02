'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PriceRangeSlider from '@/components/RangeSlider';
import ImageModal from '@/components/ImageModal';
import Image from 'next/image';

const categories = [
  { name: 'Bread & bakery', count: 1 },
  { name: 'Cheese & Deli', count: 2 },
  { name: 'DXP_PIMBulk_Update', count: 5 },
  { name: 'Drinks', count: 1 },
  { name: 'Frozen', count: 2 },
  { name: 'Meat', count: 3 },
  { name: 'Pantry', count: 1 },
  { name: 'Snacks & Candy', count: 1 },
];

const sortingOptions = [
  { label: 'Alphabetical: A-Z', value: 'dxp_product_en_name_asc' },
  { label: 'Alphabetical: Z-A', value: 'dxp_product_en_name_desc' },
  { label: 'Price: Low to High', value: 'dxp_product_en_price_asc' },
  { label: 'Price: High to Low', value: 'dxp_product_en_price_desc' },
];

export default function Sidebar() {
  const [showCategory, setShowCategory] = useState(true);
  const [selectedSort, setSelectedSort] = useState('');
  const [sortOpen, setSortOpen] = useState(false);
  // const [minPrice, setMinPrice] = useState(3);
  // const [maxPrice, setMaxPrice] = useState(17);

  const [priceRange, setPriceRange] = useState({ min: 20, max: 75 });

  const handlePriceChange = (min: number, max: number) => {
    console.log("Changing: ", min, max);
    setPriceRange({ min, max });
  };

  const handlePriceChangeEnd = (min: number, max: number) => {
    console.log("Change complete: ", min, max);
    // You can now fetch offers or update Redux filter
  };

  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center mb-10">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <div className="mb-10">
              <h1 className="text-[20px] font-bold mb-2">Sort and Filter Component</h1>
              <p className="text-[15px]">The <b>Sort and Filter Component</b> provides a flexible interface for filtering and sorting content across various page types. It enhances user experience by allowing visitors to easily browse through content based on predefined criteria.</p>
            </div>
          </div>

          <div className="wrapper mb-5">
            <h2 className='mb-2'><b>Key Configuration Options:</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[30px]">
                <li><b>Page Type</b> Select the type of content to be filtered. Available options include: <b>Recipe Gallery, Article Gallery, Ready For You</b>, and <b>Product Gallery</b>.</li>
                <li><b>Labels Configuration</b> Customize the text labels displayed in the filter UI:</li>
                <li><b>Sort Title</b> – Heading for the sort options section (e.g., "Sort By")</li>
                <li><b>Sorting Options</b> – Define sorting methods such as A–Z, Z–A, Newest, and Oldest</li>
                <li><b>Categories Title</b> – Label for the content category filter section</li>
                <li><b>Filters Title</b> – Heading for the filter group container</li>
                <li><b>Filter 1 Title</b> – Title for the first filter category (e.g., “Meal Type”)</li>
                <li><b>Filter 2 Title</b> – Title for the second filter category (e.g., “Dietary Preference”)</li>
                <li><b>Clear All</b> Title Text label for the "Clear All" action button used to reset filters.</li>
              </ul>
            </div>

        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/FilterSideBarEdit.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/FilterSideBarEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="lg:w-[250px] xl:w-[220px] mb-[38px] sideBar">
        <div className="flex flex-col gap-4">
          {/* Sort Dropdown */}
          <div>
            <h2 className="font-bold text-base capitalize mb-2">Sort</h2>
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="w-full text-left border border-[#d6d6d6] rounded-[4px] pt-[15px] pb-[12px] pl-[20px] pr-[40px] text-brandBlack text-[14px] leading-normal relative"
              >
                <span>{selectedSort ? sortingOptions.find(opt => opt.value === selectedSort)?.label : 'Select Sorting...'}</span>
                <span className="absolute top-1/2 -translate-y-1/2 right-[20px]">
                  <ChevronDown size={12} className="text-brandBlack" />
                </span>
              </button>
              {sortOpen && (
                <ul className="absolute z-10 w-full bg-white rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.07)] mt-1">
                  {sortingOptions.map(option => (
                    <li
                      key={option.value}
                      onClick={() => {
                        setSelectedSort(option.value);
                        setSortOpen(false);
                      }}
                      className="cursor-pointer px-4 py-2 text-base text-brandBlack hover:bg-grey300"
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Category Accordion */}
          <div className="border-b border-grey350">
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="flex items-center justify-between w-full text-left py-3 font-bold text-[16px] lg:text-[14px]"
            >
              <span>Categories</span>
              <span>{showCategory ? <ChevronUp size={14} /> : <ChevronDown size={14} />}</span>
            </button>
            {showCategory && (
              <ul className="pl-2 mt-2 max-h-[320px] overflow-y-auto scroll-bar-grey text-left">
                {categories.map((cat, index) => (
                  <li key={index} className="mb-2">
                    <button className="text-left w-full hover:underline">
                      {cat.name} ({cat.count})
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <PriceRangeSlider
            minPrice={1}
            maxPrice={100}
            initialMin={priceRange.min}
            initialMax={priceRange.max}
            midPoint={50}
            onChange={handlePriceChange}
            onChangeEnd={handlePriceChangeEnd}
            resetTrigger={0} // change this value to force slider reset
          />
        </div>
        <div className='text-[#003D2A] pt-8'>
          <button>clear All</button>
        </div>

      </aside>
    </main>
  );
}
