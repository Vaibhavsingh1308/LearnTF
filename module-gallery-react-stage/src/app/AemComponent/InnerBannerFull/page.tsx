'use client';

import React from "react";
import { InnerBannerFull } from "@/components/InnerBannerFull/";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";

export default function HomePage() {
  return (
    <div className="p-10 max-w-[1440px]">
       <div className="flex flex-wrap items-top">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Image Banner Full</h1>
            <p className="text-[15px] mb-4">The Banner Component is a highly customizable hero module designed to highlight key messaging, promotional content, or brand imagery. It supports flexible layouts, responsive image handling, CTA configuration, and theming options to align with brand and campaign requirements.</p>
          </div>

          <div className="wrapper mb-5">
              <h2><b>Layout & Structure Options</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[30px]">
                <li><b>Banner Width</b> Choose between Container Width (aligned with page content) or Full Width (edge-to-edge layout).</li>
                <li><b>Right Side Image</b></li>
                <li><b>Left Side Image</b></li>
                <li><b>Two CTAs (Right Aligned)</b></li>
                <li><b>Two-Column Ratio</b> layout split between text and image using customizable ratios such as 50:50, 80:20, 75:25, etc. Content Section</li>
                <li><b>Banner Title</b> – Main heading text</li>
                <li><b>Description</b> – Supporting paragraph or messaging</li>
                <li><b>Content Block</b> Background Image – Optional background image for the text block</li>
              </ul>
            </div>

            <div className="wrapper mb-5">
              <h2><b>Image Section</b></h2>
              <p>Supports responsive imagery for optimal display across devices:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[30px]">
                <li><b>Banner Image</b> – Default image for desktop</li>
                <li><b>Tablet Image</b> – Optional image for tablet viewports</li>
                <li><b>Mobile Image</b> – Optional image for mobile viewports</li>
                <li><b>Banner Image</b> Alt Text – Descriptive text for accessibility</li>
                <li><b>Logo Image</b> – Optional brand or promotional logo</li>
                <li><b>Logo Image Alt Text</b> – Alt text for logo accessibility</li>
              </ul>
            </div>

            <div className="wrapper mb-5">
              <h2><b>CTA (Call-To-Action) Options</b></h2>
              <p>Multiple CTAs can be added with the following configurations:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[30px]">
                <li><b>Link Title</b> – CTA label text</li>
                <li><b>Link to Page</b> – Destination URL with open in new tab option</li>
                <li><b>Link Type</b> – Choose from:</li>
                <li><b>Plain Link</b></li>
                <li><b>Button</b></li>
                <li><b>Link ARIA Label</b> – Accessibility support for screen readers</li>
              </ul>
            </div>

            <div className="wrapper mb-5">
              <h2><b>Theme Color Settings</b></h2>
              <p>Customize visual appearance using predefined color palettes:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[30px]">
                <li><b>Background Color</b> – Set background tone for the banner area</li>
                <li><b>Text Color</b> – Define text color for improved readability and contrast</li>
              </ul>
            </div>

        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/banner_full.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/banner_full.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h2 className="text-xl font-bold mb-4">Inner Banner Full</h2>
        <div className="w-full max-w-[1920px] shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
          <div className="h-full flex items-center">
            {/* Desktop content goes here */}
            <InnerBannerFull
              className="w-full"
              imageSrc="/images/Panache-banner-Desktop.svg"
              imageAlt="Full Width Banner"
              color="green"
              contentClass="text-white space-y-0 bg-[#44266E]"
              imageClass="rounded-bl-[40px]"
            >
              <Image
                src="/images/Panache-brand-logo.svg"
                width={150}
                height={100}
                className="mx-left mb-2"
                alt="product image"
              />
              <h3 className="text-5xl font-bold">Panache</h3>
              <p className="text-[14px] pt-2">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
            </InnerBannerFull>
          </div>
        </div>
      </div>
    </div>
  );
}
