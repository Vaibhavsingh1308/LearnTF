import React from 'react'
import Image from "next/image"
import ImageModal from '@/components/ImageModal';

export default function Teaser() {
    return (
        <main className='p-10'>
        <div className="flex items-center flex-wrap">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Teaser Component</h1>
            <p className="text-[15px] mb-4">The <b>Teaser component</b> is a promotional layout built using React and Tailwind CSS for use in a Next.js application. It is designed to visually communicate branded content like offers or campaigns — particularly for Scene+ promotions at True — in a structured and engaging way.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/Teaser.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Teaser"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/Teaser.png"
                  imageAlt="Teaser"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='recipes-outer-section bg-white pt-[24px] lg:pt-[48px]'>
            <div className='recipes-for-you-section lg:pb-[48px]'>
                <div className="container">
                    <div className="recipes-items-outer grid xl:grid-cols-2 gap-[8px] md:gap-[16px] lg:gap-[24px]">
                        <div className='recipes-featured-cards-row grid gap-[8px] md:gap-[16px] lg:gap-[30px]'>
                            <div className='grid grid-cols-2 gap-[8px] md:gap-[16px] lg:gap-[24px]'>
                                <div className="latest-offer-tile rounded-xl">
                                    <Image src="/images/fresh-guarantee-card.jpg" width={342} height={285} className="rounded-xl w-full" alt="We all deserve compliments" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}
