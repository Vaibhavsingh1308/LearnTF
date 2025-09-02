import React from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import LogoImage from '@/components/LogoImage';

export default function FeaatureOfferCard() {

  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-top mb-20">
      <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Logo Images Component </h1>
            <p className="text-[15px] pr-[130px] mb-2">The Logo Images Component is designed to showcase a group of logo images, typically representing partner brands, sponsors, or affiliations. It allows authors to link each logo to an external or internal destination, with full accessibility support.</p>

            <h2 className='mb-2'><strong>Component Configuration Options</strong> Text Section</h2>
            <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li><strong>Text</strong> – A rich text editor field used to add introductory content, context, or heading above the logo grid.</li>
            </ul>

            <h2 className='mb-2'><strong>Logo Images Section (Repeatable)</strong> Authors can add multiple logos using the <b>Add button</b>. Each logo entry includes:</h2>
            <p className="text-[15px] mb-5">Authors can add multiple carousel slides using the repeater functionality. Each item includes the following sections:</p>
            <ul className="list-disc mb-5 pl-4 text-[15px] text-gray-700 leading-[25px]">
              <li><b>Image</b> – The logo graphic to be displayed</li>
              <li><b>Image Alt Text</b> – Descriptive alt text for accessibility and screen readers</li>
              <li><b>Link</b> – URL to navigate when the logo is clicked, with an option to open in a new tab</li>
              <li><b>ARIA Label</b> – Optional accessibility label to describe the link purpose for screen readers</li>
            </ul>
          </div>
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/LogoImage.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/LogoImage.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LogoImage />
    </main>
  );
}