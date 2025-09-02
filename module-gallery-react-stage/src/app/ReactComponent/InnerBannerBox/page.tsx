'use client';

import React from 'react';
import { InnerBannerBox } from '@/components/InnerBannerBox'; // Adjust the import path as per your project
import { Button } from '@/components';
import { InnerBannerIpad } from '@/components/InnerBannerIpad';

export default function HomePage() {
  return (
    <div className='p-10'>
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">InnerBannerBox</h1>
        <p className="text-[15px] mb-4">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">InnerBannerBox</mark> is a visually striking, responsive banner component designed to present a content block alongside an image. It's ideal for use in marketing sections, hero banners, or informational panels where text and media are combined elegantly.</p>
        <p className="text-[15px]">Built using Tailwind CSS, <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">class-variance-authority (cva)</mark> for variant-based styling, and <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Next.js Image</mark> for optimized image handling, this component is flexible, reusable, and fully responsive.</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Responsive Layout</li>
          <li>Background Variants</li>
          <li>Image Optimization</li>
          <li>Flexible Content Area</li>
          <li>Composable</li>
          <li>Reusable Structure</li>
          <li>Accessible</li>
          <li>Utility-Friendly</li>
        </ul>
      </div>

      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h4 className="text-xl font-bold mb-4">Desktop</h4>
        <div className="w-full max-w-[1920px] rounded bg-white">
          {/* Desktop content goes here */}
          <InnerBannerBox
            ClassName={"mb-0"}
            imageUrl="/images/Mobile-View.jpg" // Make sure this image exists in your `public/images` folder
            altText="Special Offer Banner"
            bgColor="green" // Options: "green", "blue", "red"
            contentClassName="text-white" // Additional content styling
          >
            <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
            <p className="text-[14px] pt-1 pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <Button className="bg-white w-[150px] text-black hover:bg-gray-200">Shop Now</Button>
          </InnerBannerBox>
        </div>

        {/* iPad View */}
        <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
        <div className="w-full max-w-[834px] rounded bg-white">
          {/* Desktop content goes here */}
          <InnerBannerBox
            ClassName={"mb-0"}
            imageUrl="/images/Mobile-View.jpg" // Make sure this image exists in your `public/images` folder
            altText="Special Offer Banner"
            bgColor="green" // Options: "green", "blue", "red"
            contentClassName="text-white" // Additional content styling
          >
            <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
            <p className="text-[14px] pt-1 pb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Button className="bg-white w-[150px] text-black hover:bg-gray-200">Shop Now</Button>
          </InnerBannerBox>
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
              <Button className="bg-white w-[150px] text-black hover:bg-gray-100 medium">Shop Now</Button>
            </InnerBannerIpad>
          </div>
        </div>
      </div>
    </div>
  );
}
