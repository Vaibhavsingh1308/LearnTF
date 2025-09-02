"use client";

import React, { useState } from "react";
import { SlidePanel } from "@/components/SlidePanel";
import { Button } from "@/components";

const Page = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">SlidePanel Component</h1>
        <p className="text-[15px] pr-[130px] mb-2">
          The SlidePanel is a highly customizable, accessible slide-in panel (or
          drawer) that appears from a chosen side of the screen (left, right,
          top, or bottom). It is ideal for use cases such as:
        </p>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
          <li>Side navigations</li>
          <li>Settings/config panels</li>
          <li>Cart views</li>
          <li>Filter panels</li>
          <li>Quick-view popouts</li>
        </ul>
      </div>

      <div className="wrapper">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Multi-directional</li>
          <li>Focus Management</li>
          <li>Keyboard Interactions</li>
          <li>Accessibility</li>
          <li>Overlay Support</li>
          <li>Class Customization</li>
          <li>Smooth Animations</li>
          <li>Mobile-Friendly</li>
        </ul>
      </div>
      <div className="p-1 max-w-md mt-10">
        <h2 className="text-2xl font-bold mb-4">Slide Panel Demo</h2>

        {/* <button onClick={() => setIsPanelOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">Open Slide Panel</button> */}
        <Button variant="primary"  onClick={() => setIsPanelOpen(true)}>Open Slide Panel</Button>
        <SlidePanel
          side="right"
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          className="w-[500px] p-4"
        >
          <h2 className="text-lg font-semibold mb-4">Panel Content</h2>
          <p className="text-sm text-gray-700">
            This is the content inside the slide panel. You can close it by
            clicking outside or pressing <kbd>ESC</kbd>. Use this panel to view
            details, edit information, or perform additional actions without
            leaving the current page. Your changes will be saved automatically
            as you work.
          </p>

          <Button
            onClick={() => setIsPanelOpen(false)}
            className="mt-6 px-3 p-7 py-2 "
            variant="danger"
          >
            Close Panel
          </Button>
        </SlidePanel>
      </div>
    </div>
  );
};

export default Page;
