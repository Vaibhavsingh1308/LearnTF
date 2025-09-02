import React from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import Foodheroapp from '@/components/Foodheroapp';

export default function FeaatureOfferCard() {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-top mb-10">
      <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h3 className='text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title '>Food Hero App Component</h3>
            <p className="text-[15px] mt-4 mb-4">The <b>FoodHero App Component</b> is designed to promote the FoodHero mobile application with visual and interactive elements that encourage users to download the app from their respective app stores. It includes branding, QR code support, and accessibility features.</p>
          </div>
          <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2"><b>Component Configuration Options</b> Content Section</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Heading</b> – Main title or promotional message for the app section</li>
                <li><b>Description</b> – Rich text field to provide supporting information or promotional content</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>QR Code Sections</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>QR Image</b> – QR code graphic for quick mobile access</li>
                <li><b>QR Image Alt Text</b> – Descriptive text for accessibility and screen readers</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>Apple Store Section</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Apple Store Image</b> – App Store badge/logo</li>
                <li><b>Apple Store Alt Text</b> – Alt text for the image</li>
                <li><b>Apple Store Link</b> – URL to the iOS App Store (with open in new tab option)</li>
                <li><b>Apple Store ARIA Label</b> – Screen reader label to improve accessibility</li>
              </ul>
            </div>
            <div className="wrapper mb-10">
              <h2><b>Google Play Store Section</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Google Play Store Image</b>– Google Play badge/logo</li>
                <li><b>Google Play Alt Text</b> – Alt text for the image</li>
                <li><b>Google Play Link</b>– URL to the Google Play Store (with <b>open in new tab</b> option)</li>
                <li><b>Google Play ARIA Label</b> – Screen reader label to improve accessibility</li>
              </ul>
            </div>

            <div className="wrapper mb-10">
              <h2><b>Additional Label</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Download Message</b> – A custom label or message shown near the download links (e.g., "Download the app now")</li>
              </ul>
            </div>
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/foodheroapp.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/Foodheroapp.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Foodheroapp />
    </main>
  );
}