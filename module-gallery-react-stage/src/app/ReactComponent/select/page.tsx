"use client";

import React, { useState } from "react";
import { Select, type Option } from "@/components/Select"; // Adjust path

const options: Option[] = [
  { optionname: "Option 1", optionval: "option1" },
  { optionname: "Option 2", optionval: "option2" },
  { optionname: "Option 3", optionval: "option3" },
];

export default function SelectExamplePage() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div className="p-10">
       <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Select Component</h1>
        <p className="text-[15px]">This is a fully customizable and accessible Select (Dropdown) component built with React and styled using Tailwind CSS. It is designed to replicate the native select element’s behavior while providing enhanced styling and interaction flexibility suitable for modern UIs.</p>
      </div>
      <div className="wrapper">
        <h2 className="text-[20px] font-bold mb-2">Features Implemented</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><mark className="ml-2 bg-red-50">Keyboard navigation (Enter, Space, Arrow keys, Tab)</mark></li>
          <li><mark className="ml-2 bg-red-50">Aria attributes for accessibility</mark></li>
          <li><mark className="ml-2 bg-red-50">Custom icon support</mark></li>
          <li><mark className="ml-2 bg-red-50">Click outside to close</mark></li>
          <li><mark className="ml-2 bg-red-50">Highlight selected option with optional checkmark</mark></li>
          <li><mark className="ml-2 bg-red-50">Supports default Value and default Label</mark></li>
        </ul>
      </div>

      <div className="mt-10 max-w-md">
          {/* <h1 className="text-xl font-bold mt-5 mb-5">3. Final View</h1> */}
          <h2 className="text-base font-semibold mb-4">Custom Select Example</h2>
          <Select
            options={options}
            defaultLabel="Please select an option"
            defaultValue={selectedValue}
            onChange={(value) => setSelectedValue(value)}
            checked
            scroll
            className="mb-6"
            selectAriaLabel="Custom select dropdown"
          />
          <p>Selected value: <strong>{selectedValue || "None"}</strong></p>
        </div>
      </div>
  );
}
