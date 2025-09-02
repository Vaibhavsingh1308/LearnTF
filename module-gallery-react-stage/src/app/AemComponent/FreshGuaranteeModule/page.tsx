import React from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import FreshGuaranteeModule from '@/components/FreshGuaranteeModule';

export default function FeaatureOfferCard() {

  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center mb-40">
        <div className="w-full md:w-1/2">
          <div className="mb-5">
            <h1 className='text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title'>Fresh Guarantee Module Component</h1>
            <p className="text-[15px] mt-2 mb-4">The DepartmentGrid component displays a responsive grid layout showcasing various product departments in a Tru-style design. Built with React, Next.js, and Tailwind CSS, this component highlights product categories with an image, title, and description, followed by a guarantee message and terms section.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              <Image src="/images/NewIconCard.png" width={400} height={400} className="w-full h-auto cursor-pointer" alt="Voila"/>
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/NewIconCard.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FreshGuaranteeModule />
    </main>
  );
}