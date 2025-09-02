'use client';

import React from "react";
import { InnerBannerFull } from "@/components/InnerBannerFull/";
import { InnerBannerIpad } from "@/components/InnerBannerIpad/index";


import { Button } from "@/components";

export default function HomePage() {
  return (
    <main className="p-10">
     <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">InnerBannerFull</h1>
        <p className="text-[15px] mb-4">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">InnerBannerFull</mark> component is a full-width, responsive banner layout designed to deliver a blend of visual storytelling and content presentation. Perfect for use as a header section, promotional block, or informational callout, this component elegantly places content beside an image with responsive design adjustments for various screen sizes.</p>
        <p className="text-[15px]">Built with Tailwind CSS, <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">class-variance-authority (cva)</mark> for dynamic styling, and Next.js’s <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Image</mark> component for performance-optimized image rendering, <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">InnerBannerFull</mark> is flexible and extendable.</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Responsive Layout</li>
          <li>Background Variants</li>
          <li>Optimized Image Handling</li>
          <li>Customizable via Props</li>
          <li>Mobile-First Behavior</li>
          <li>Accessible</li>
          <li>Composable Structure</li>
        </ul>
      </div>

    <div className="flex-wrap gap-6 mt-10">
          {/* Desktop View */}
          <h4 className="text-xl font-bold mb-4">Desktop</h4>
          <div className="w-full max-w-[1920px] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
            <div className="h-full flex items-center">
              {/* Desktop content goes here */}
              <InnerBannerFull
                className="w-full"
                imageSrc="/images/Banner_1070.jpg" 
                imageAlt="Full Width Banner"
                color="green"
                contentClass="text-white space-y-0"
                imageClass="rounded-bl-[40px]"
              >
                <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
                <p className="text-[14px] pt-2 pb-3">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
                <Button className="bg-white w-[150px] text-black hover:bg-gray-100 medium">Explore Now</Button>
              </InnerBannerFull> 
            </div>
          </div>

          {/* iPad View */}
          <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
          <div className="w-full max-w-[834px] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-5 bg-white">
            <div className="h-full bg-gray-100 flex items-center justify-center">
              {/* iPad content goes here */}
              <InnerBannerIpad
                imageSrc="/images/Banner_Ipad.jpg"
                imageAlt="Store Banner"
                color="green"
                contentClass="text-white space-y-4"
                imageClass="rounded-t-[10px]"
                imageHeightClass="h-[270px]"
              >
                <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
                <p className="text-[14px] pb-3">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
                <Button className="bg-white w-[150px] text-black hover:bg-gray-100 medium">Explore Now</Button>
              </InnerBannerIpad>
            </div>
          </div>

          {/* Mobile View */}
          <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
          <div className="w-full max-w-[480px] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
            <div className="h-full bg-gray-100 flex items-center justify-center">
              {/* Mobile content goes here */}
              <InnerBannerIpad
                imageSrc="/images/Mobile375.jpg"
                imageAlt="Store Banner"
                color="green"
                contentClass="text-white space-y-4"
                imageClass=""
                imageHeightClass="h-[200px]"
              >
                <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
                <p className="text-[14px] pb-3">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
                <Button className="bg-white w-[150px] text-black hover:bg-gray-100 medium">Explore Now</Button>
              </InnerBannerIpad>
            </div>
          </div>
    </div>
    </main>
  );
}
