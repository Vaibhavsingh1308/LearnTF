"use client";

import React, { useState } from "react";
import { Radio } from "@/components/Radio"; // Adjust path accordingly

const RadioExamplePage = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <main className="p-10">
      <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Radio button Component</h1>
            <p className="text-[15px] mb-4">This Radio component is a custom-styled radio input built using:</p>
            </div>

            <div className="wrapper mb-10">
            <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
            <ul className="list-disc pl-4 text-[15px] text-gray-700 leading-[30px]">
                <li>React with forwardRef for ref forwarding.</li>
                <li>Tailwind CSS for custom appearance (overriding default radio styling).</li>
                <li>cn utility for merging class names.</li>
                <li>before and after pseudo-elements to mimic the appearance of a traditional radio input (outer circle and inner dot).</li>
            </ul>
        </div>

      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-4">Choose an option:</h2>
        <form>
          <label className="flex items-center space-x-2 mb-3 cursor-pointer">
            <Radio
              name="example"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleChange}
            />
            <span>Option 1</span>
          </label>
          <label className="flex items-center space-x-2 mb-3 cursor-pointer">
            <Radio
              name="example"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleChange}
            />
            <span>Option 2</span>
          </label>
          <label className="flex items-center space-x-2 mb-3 cursor-pointer">
            <Radio
              name="example"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleChange}
            />
            <span>Option 3</span>
          </label>
        </form>

        <p className="mt-6">Selected: <strong>{selectedOption}</strong></p>
      </div>
    </main>
  );
};

export default RadioExamplePage;
