import EarnPointsModule from '@/components/EarnPointsModule'
import ImageModal from '@/components/ImageModal'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center mb-10">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Earn Points Module Component</h1>
            <p className="text-[15px] pr-[130px] mb-2">The Scene Plus Section component is a visually rich promotional section designed for marketing Scene+ rewards program benefits. Built with Next.js, Tailwind CSS, and the next/image component, it highlights key perks and includes a compelling call-to-action.</p>
          </div>
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/EarnPoits.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/EarnPoits.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <EarnPointsModule />
    </main>
  )
}

export default page