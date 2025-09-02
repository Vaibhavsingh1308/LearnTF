import FoodRescueOverlayCard from '@/components/FoodRescueOverlayCard'
import ImageModal from '@/components/ImageModal'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='p-10'>
        <div className="flex flex-wrap items-center mb-20">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className='text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title'>Food Rescue Overlay Card Component</h1>
            <p className="text-[15px] mt-2 mb-4">This Food Rescue Overlay Card component is a responsive, interactive grid built using Next.js and Tailwind CSS. It showcases 10 practical tips for reducing food waste at home with a focus on clean design, accessibility, and hover interaction.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/RescueFoodAtHomeOverlay.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal imageSrc="/images/RescueFoodAtHomeOverlay.png" imageAlt="Sample Modal Image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
        <FoodRescueOverlayCard />
    </main>
  )
}

export default page