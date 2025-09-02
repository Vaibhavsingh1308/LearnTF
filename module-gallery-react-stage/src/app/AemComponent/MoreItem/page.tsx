import React from 'react'
import Link from "next/link";
import Image from "next/image"
import ImageModal from '@/components/ImageModal';

export default function MoreItems() {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-top mb-10">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-4">MoreItem Component</h1>
            <p className="text-[15px] mb-6">
              The <strong>MoreItem</strong> component is designed to showcase featured items with flexible column controls and an engaging visual presentation.
            </p>

            <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Component Overview</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><strong>Heading (Main):</strong> A prominent title to introduce the component.</li>
                <li><strong>Description Text:</strong> Brief explanation about column control options.</li>
                <li><strong>Image Section:</strong> Displays a main image with zoom/modal functionality for enhanced viewing.</li>
                <li><strong>Grid Layout Section:</strong> Responsive grid showcasing multiple item cards with customizable columns (supports 2 or 3 columns).</li>
                <li><strong>Card Design:</strong> Each card includes an image with rounded corners and subtle shadow, a bold title, and a “Learn More” link button.</li>
                <li><strong>Responsive Design:</strong> Layout adjusts across screen sizes for optimal usability and presentation.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-[3] w-full md:w-3/10 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/moreitem.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="MoreItem Preview"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/moreitem.png"
                  imageAlt="MoreItem Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="more-from-sobeys-section bg-white pb-[24px] lg:pb-[48px]">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[12px] md:gap-[0] lg:gap-[24px] pt-[12px] md:pt-[16px] lg:pt-[32px]">
            <div className="col-span-1 bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] md:mr-[12px] lg:mr-[0]">
              <div className="imageouter">
                <Image
                  src="/images/grid1.png"
                  width={464}
                  height={218}
                  className="mx-auto w-full md:h-auto rounded-t-xl h-[135px] object-cover"
                  alt="Entertaining Platter"
                />
              </div>
              <div className="contentouter p-[16px] lg:p-[24px]">
                <h3 className="text-black text-[20px] font-extrabold leading-normal mb-[4px] md:mb-[8px] lg:mb-[16px] common-sec-title">Entertaining Platter</h3>
                <Link href="#" className="inline-block border border-[var(--grey300)] px-[14px] py-[8px] rounded-full text-sm font-medium text-black">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
