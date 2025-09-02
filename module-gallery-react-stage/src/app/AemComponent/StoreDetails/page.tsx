import ImageModal from '@/components/ImageModal'
import StoreDetails from '@/components/StoreDetails'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-center mb-10">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Store Details Component</h1>
            <p className="text-[15px] pr-[130px] mb-2">The <b>Store Details</b> component is a responsive section that displays key information about a specific Tru store, including its name, quick action buttons ("View Flyer" and "Select this store"), and an embedded Google Map showing the store's location.</p>
          </div>
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/StoreDetailds.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Store Detailds"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/StoreDetailds.png"
                  imageAlt="Store Detailds"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoreDetails />
    </main>
  )
}

export default page