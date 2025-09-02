"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/Checkbox";

const Page = () => {
  const [variant, setVariant] = useState<"square" | "rounded" | "circle">("square");

  return (
    <>
      <div className="main p-8">
        <div className="mb-10">
          <h1 className="text-[20px] font-bold mb-2">Checkbox Component</h1>
          <p className="text-[15px]">The Checkbox component is a fully customizable React component styled with Tailwind CSS utility classes. It replaces the default browser checkbox with visually enhanced variants—such as square, rounded, and circular—selectable via a dropdown menu. The component maintains native checkbox functionality, integrates seamlessly with forms and UI libraries, and supports accessibility standards for a consistent user experience across devices.</p>
        </div>

        <div className="">
          <h2 className="text-md font-semibold text-gray-800 mb-4">Customize Checkbox Style</h2>
          <div className="mb-5 max-w-md">
            <label htmlFor="styleSelect" className="block text-[15px] font-medium text-gray-700 mb-2">Select options to preview:</label>
              <select
                id="styleSelect"
                value={variant}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setVariant(e.target.value as "square" | "rounded" | "circle")
                }
                className="w-full px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBlack"
              >
                <option value="square">Square</option>
                <option value="rounded">Rounded</option>
                <option value="circle">Circle</option>
              </select>
          </div>


          <div className="flex items-center gap-3">
            <Checkbox id="customCheckbox" variant={variant} />
            <label htmlFor="customCheckbox" className="text-gray-700 text-[14px]">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
