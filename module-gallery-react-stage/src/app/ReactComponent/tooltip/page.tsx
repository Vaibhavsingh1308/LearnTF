'use client';

import React from 'react';
import { Tooltip } from '@/components/Tooltip';

const TooltipDemoPage = () => {
  return (
    <div className="p-10 space-y-8">
        <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Tooltip Component</h1>
        <p className="text-[15px] mb-4">The Tooltip component is a flexible and accessible hint bubble used to provide contextual information when a user hovers over, focuses, or interacts with an element. It enhances UI/UX by showing non-intrusive inline help, descriptions, or hints.</p>
        <p className="text-[15px]">This component supports multiple directions, optional arrows, keyboard accessibility, and customizable styling.</p>
     
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="pl-5 list-disc text-[15px] text-gray-700 leading-[30px]">
          <li>Custom Positioning</li>
          <li>Directional Arrows</li>
          <li>Smart Class Variants</li>
          <li>Composable Children</li>
          <li>Keyboard Accessible</li>
          <li>Customizable</li>
          <li>Lightweight</li>
        </ul>
      </div>
      <div className="p-1 max-w-md">
          <h2 className="text-[20px] font-bold mb-2">Tooltip Demo</h2>
          <div className="space-x-2">
            <Tooltip content="This is a top tooltip" direction="top" arrow>
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Top</button>
            </Tooltip>

            <Tooltip content="Bottom-start tooltip" direction="bottom-start" arrow>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Bottom</button>
            </Tooltip>

            <Tooltip content="Left aligned" direction="left" arrow>
              <span className="inline-block bg-red-500 text-white px-3 py-2 rounded">Left</span>
            </Tooltip>

            <Tooltip content="Right aligned" direction="right" arrow>
              <span className="inline-block bg-purple-500 text-white px-3 py-2 rounded">Right</span>
            </Tooltip>
          </div>
        </div>
  </div>
  );
};

export default TooltipDemoPage;
