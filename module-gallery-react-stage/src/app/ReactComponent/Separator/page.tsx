"use client";

import React from "react";
import { Separator } from "@/components/Separator";

export default function HomePage() {
  return (
    <div className="p-10">
        <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Separator Component</h1>
        <p className="text-[15px] mb-4">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Separator</mark> component is a lightweight, flexible UI divider used to visually separate content blocks within layouts. It supports both horizontal and vertical orientations and can be styled with various colors using the powerful <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">class-variance-authority (cva)</mark> utility for scalable theming.</p>
        <p className="text-[15px]">It follows accessibility best practices using the <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">role="separator"</mark> and the appropriate <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">aria-orientation.</mark></p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="pl-5 list-disc text-[15px] text-gray-700 leading-[30px]">
          <li>Responsive Layout</li>
          <li>Background Variants</li>
          <li>Accessibility-Friendly</li>
          <li>Composable & Lightweight</li>
          <li>Extendable Styling</li>
        </ul>
      </div>
      <h2 className="text-2xl font-bold mb-4">Section 1</h2>
      <p>This is some content above the separator.</p>

      {/* Horizontal gray separator (default) */}
      <Separator className="my-6" />

      <h2 className="text-xl font-semibold mb-4">Section 2</h2>
      <p>This is some content below the separator.</p>

      {/* Vertical blue separator example */}
      <div className="flex items-center mt-10">
        <div className="flex-1">Left side content</div>
        <Separator orientation="vertical" color="blue" className="mx-4 h-12" />
        <div className="flex-1">Right side content</div>
      </div>
    </div>
  );
}
