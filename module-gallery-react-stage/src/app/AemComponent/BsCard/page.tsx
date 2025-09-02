'use client';

import React from "react";
import { InnerBannerIpad } from "@/components/InnerBannerIpad/index";
import Image from "next/image";


import { Button } from "@/components";
import ImageModal from "@/components/ImageModal";

export default function HomePage() {
  return (
    <main className="p-10">
      <div className="flex flex-wrap items-top">
        <div className="flex-[8] w-full md:w-8/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className='text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title '>BS Card Component</h1>
            <p className="text-[15px] mt-2 mb-4">The <b>BS Card Component</b> is a flexible, visually engaging content block designed to present key information alongside images and actionable CTAs. It supports a variety of customization options for layout, color, and interactivity.</p>
          </div>

          <div className="pb-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Column 1 */}
              <div className="overflow-x-auto flex-1 border p-4">
                <h2 className="mb-[20px] font-bold text-lg">Main Configuration Fields</h2>
                <table className="min-w-full border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 font-semibold text-gray-900 border border-gray-300">Field Name</th>
                      <th className="px-4 py-2 font-semibold text-gray-900 border border-gray-300">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Heading</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Main title or headline of the card.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Description</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Supporting text or content under the heading.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Image</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Image displayed within the card (e.g., top or side layout).</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Image Alt Text</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Descriptive alt text for screen readers and accessibility.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Text Color</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Choose between black or white for card text, depending on background.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Theme Background Color</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Select background color from the predefined color palette.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Content Block Background Image</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Optional background image for the entire card content area.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Border Option</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Enable or disable card border and box shadow styling.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Column 2 (Duplicate or Modified) */}
              <div className="overflow-x-auto flex-1 border p-4">
                <h2 className="mb-1 font-bold text-lg">CTA List (Repeatable Section)</h2>
                <p className="text-[12px] mb-3">Authors can add multiple call-to-action (CTA) items using the Add CTA button. Each CTA includes the following options:</p>
                <table className="min-w-full border border-gray-300 text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 font-semibold text-gray-900 border border-gray-300">Field Name</th>
                      <th className="px-4 py-2 font-semibold text-gray-900 border border-gray-300">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">CTA Text</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">	Label or text for the link or button (e.g., "Learn More").</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">CTA Link</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">	URL or internal page path to navigate to.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">Open in New Tab</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">	Option to open the link in a new browser tab.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">ARIA Label</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">	Optional label for screen readers to describe the purpose of the link/button.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">CTA Type</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Choose from: Plain Link, Button, Outline Button, or Voila Button.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-gray-300 font-medium text-gray-800">CTA Icon</td>
                      <td className="px-4 py-2 border border-gray-300 text-gray-700">Optional icon class to display alongside the CTA text.</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[12px] mt-2">Use the repeater to add multiple CTAs, each with unique styling and behavior as needed.</p>
              </div>
            </div>
          </div>
          
          <div className="wrapper mb-7">
              <h2><b>Authoring Tips</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li>Use <b>Image Alt Text</b> and <b>ARIA Labels</b> to ensure accessibility compliance.</li>
                <li>Select <b>text color</b> based on your background to maintain readability.</li>
                <li>Mix and match CTAs (e.g., primary button + plain link) to guide user interactions effectively.</li>
              </ul>
            </div>
        </div>


        <div className="flex-[2] w-full md:w-2/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/BsCardEditFiled.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/BsCardEditFiled.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[708px] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-5 bg-white">
        <div className="h-full bg-gray-100 flex items-center justify-center">
          {/* iPad content goes here */}
          <InnerBannerIpad
            imageSrc="/images/freshly_baked_bread_700x465.jpg"
            imageAlt="Store Banner"
            color="green"
            contentClass="text-white space-y-4"
            imageClass="rounded-t-[20px]"
            imageHeightClass="h-[464px]"
          >
            <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
            <p className="text-[14px] pb-3">{`Enjoy the warmth of freshly baked bread, crafted daily for perfect crunch and softness. From sourdough to baguettes, find the freshest loaves for every occasion!`}</p>
            <Button className="bg-white w-[150px] text-black hover:bg-gray-100 medium">View Products</Button>
          </InnerBannerIpad>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
