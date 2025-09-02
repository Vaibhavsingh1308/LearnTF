import ImageModal from '@/components/ImageModal'
import Testimonial from '@/components/Testimonial'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center mb-10">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Testimonial Component</h1>
            <p className="text-[15px] pr-[130px] mb-2">The <b>Testimonial component</b> is a responsive Embla carousel built using Tailwind CSS and Next.js, designed to showcase testimonials from local suppliers. It provides a visually engaging way to display real stories and experiences from business owners working with the brand (e.g., True).</p>
          </div>
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/Testimonial.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Testimonial"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/Testimonial.png"
                  imageAlt="Testimonial"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
    </main>
  )
}

export default page