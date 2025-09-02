import React from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal';
import BannerWithBackground from '@/components/BannerWithBackground';

export default function FeaatureOfferCard() {

  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center mb-10">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className='text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title'>Banner With Background</h1>
            <p className="text-[15px] mt-2 mb-4">The component is a fully responsive, hero-style banner section built with Next.js and Tailwind CSS. It celebrates the 110-year history of Canada's 150th anniversary, featuring a clean layout with overlaid content and background imagery</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/BannerWithBackground.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/BannerWithBackground.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BannerWithBackground />
    </main>
  );
}