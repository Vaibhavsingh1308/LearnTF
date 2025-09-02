 "use client";
import PriceRangeSlider from "@/components/RangeSlider";
import { useState } from "react";

const OffersPage = () => {
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
     <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Price-Range Slider Component</h1>
        <p className="text-[15px]"><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">PriceRangeSlider</mark> is a highly customizable, accessible, and responsive React component for selecting a price range using two draggable slider thumbs. It's ideal for filtering products or listings by price in e-commerce or marketplace applications.</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Features Implemented</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><mark className="ml-2 bg-red-50"><b>Dual-thumb range slider</b>: Allows users to select minimum and maximum price values within a specified range.</mark></li>
          <li><mark className="ml-2 bg-red-50"><b>Fully responsive</b>: Works well across screen sizes.</mark></li>
          <li><mark className="ml-2 bg-red-50"><b>Interactive dragging</b>: Handles both mouse and touch input for drag-and-drop slider handles.</mark></li>
          <li><mark className="ml-2 bg-red-50"><b>Click-to-jump</b>: Clicking on the track jumps the nearest handle.</mark></li>
          <li><mark className="ml-2 bg-red-50"><b>Live value display</b>: Shows selected min and max prices in a readable format.</mark></li>
          <li><mark className="ml-2 bg-red-50"><b>Styling support</b>: Uses utility-first classes (Tailwind CSS) for easy theming and branding.</mark></li>
         
        </ul>
      </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Filter by Price</h2>
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
     </main>
  );
};

export default OffersPage;
