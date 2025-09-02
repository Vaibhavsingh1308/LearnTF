import ImageModal from '@/components/ImageModal'
import React from 'react'
import Image from 'next/image'
import RoastCalculator from '@/components/RoastCalculator'

const page = () => {
  return (
    <main className='p-10'>
        <div className="flex flex-wrap items-center mb-10">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <div className="mb-10">
              <h1 className="text-[20px] font-bold mb-2">Roast Calculator Component</h1>
              <p className="text-[15px]">The NutritionCalculator component provides a responsive UI for selecting a protein type from a dropdown menu and displays a disabled serving size selector along with a Calculate button (also disabled). This interface is ideal for applications like food or meal planning, nutrition tracking, or recipe customization.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/RoastCalculatorEdit.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/RoastCalculatorEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <RoastCalculator />
    </main>
  )
}

export default page