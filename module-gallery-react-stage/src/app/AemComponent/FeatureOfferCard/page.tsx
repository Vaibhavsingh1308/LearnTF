import React from 'react';
import OffersBox from "../offersBox/page";
import { InnerBannerIpad } from '@/components/InnerBannerIpad';
import { Button } from '@/components/Button';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';

export default function FeaatureOfferCard() {
  const cards = new Array(6).fill(0); // Array to map 6 cards

  return (
    <main className="p-10">
      <div className="flex flex-wrap items-top mb-10">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title">
              Feature Offer Card Component
            </h1>
            <p className="text-[15px] mt-4 mb-4">
              The <b>Feature Offer Card Component</b> highlights a promotional section combining a banner and featured products to engage users effectively.
            </p>
          </div>

          <div className="wrapper mb-7">
            <h2 className="text-[20px] font-bold mb-2">
              Component Structure
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li>
                <b>Left Section (Freshly Baked Bread Card)</b> – Displays a large banner with a promotional message, image, and a call-to-action button using the <code>InnerBannerIpad</code> component.
              </li>
              <li>
                <b>Right Section (Featured Products Grid)</b> – Shows a responsive grid of product cards using the <code>OffersBox</code> component.
              </li>
              <li>
                <b>Image Modal</b> – The main image has zoom functionality enabled via the <code>ImageModal</code> component.
              </li>
              <li>
                <b>Responsive Design</b> – The layout adapts seamlessly to different screen sizes with appropriate spacing and styling.
              </li>
            </ul>
          </div>

          <div className="wrapper mb-10">
            <h2 className="text-[20px] font-bold mb-2">
              Key Features
            </h2>
            <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li>Prominent call-to-action button encourages user engagement.</li>
              <li>Clean card design with shadows and rounded corners for better UI.</li>
              <li>Dynamic product listing allows easy content updates.</li>
              <li>Accessibility supported with alt text and semantic HTML.</li>
            </ul>
          </div>
        </div>

        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/featureoffer.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Feature Offer Banner"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/featureoffer.png"
                  imageAlt="Feature Offer Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recipes-outer-section bg-white pt-[24px] lg:pt-[48px]">
        <div className="recipes-for-you-section">
          <div className="container container-lg">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-[24px] md:gap-[16px]">
              <div className="w-full shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-8 bg-white rounded-[20px] overflow-hidden">
                <div className="h-full bg-gray-100 flex items-center justify-center">
                  <InnerBannerIpad
                    imageSrc="/freshly_baked_bread.jpg"
                    imageAlt="Store Banner"
                    color="green"
                    contentClass="text-white space-y-4"
                    imageClass="rounded-t-[20px]"
                    imageHeightClass="h-[464px]"
                  >
                    <h2 className="text-3xl font-bold">What is Lorem Ipsum?</h2>
                    <p className="text-[14px] pb-3">
                      {`Enjoy the warmth of freshly baked bread, crafted daily for perfect crunch and softness. From sourdough to baguettes, find the freshest loaves for every occasion!`}
                    </p>
                    <Button className="bg-white w-[150px] text-black hover:bg-gray-100 medium">
                      View Products
                    </Button>
                  </InnerBannerIpad>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[0px] py-4">
                {cards.map((_, index) => (
                  <div key={index} className="">
                    <OffersBox />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
