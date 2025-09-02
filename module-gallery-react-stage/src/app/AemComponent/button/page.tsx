"use client";
import { Button } from '@/components';
import ImageModal from '@/components/ImageModal';
import React from 'react'
import Image from 'next/image';

const Page = () => {
  return (
    <main className='p-10'>
      {/* <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">class-variance-authority</mark> */}
      <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <div className="mb-10">
              <h1 className="text-[20px] font-bold mb-2">Button Component</h1>
              <p className="text-[15px]">The Button Component is a configurable call-to-action (CTA) element that allows content authors and developers to customize its appearance and behavior through various options:</p>
              <ul className="pl-5 list-disc text-[15px] text-gray-700 mt-5 leading-[25px] space-y-3">
                <li><b>CTA Text</b> Allows you to set the visible button label or call-to-action message (e.g., "Learn More", "Shop Now").</li>
                <li><b>CTA Hyperlink:</b> You can define the destination URL the button should link to.</li>
                <li><b>Link Target Option:</b> Supports opening the link in the same window or a new tab (_blank) using checkbox, based on user preference.</li>
                <li><b>Icon Support:</b> Enables inclusion of an icon by specifying a CSS class (e.g., icon-arrow-right). The icon can be positioned alongside the button text.</li>
                <li><b>ID Attribute (for Click Tracking):</b> Allows adding a custom id to the button for analytics or tag-based tracking.</li>
                <li><b>ARIA Label (Accessibility):</b> Provides an optional aria-label attribute to describe the button's purpose for screen readers, enhancing accessibility compliance.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/ButtonEdit.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/ButtonEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      <Button variant="primary" className='py-3 px-10'>Primary</Button>
    </main>
  )
}

export default Page;