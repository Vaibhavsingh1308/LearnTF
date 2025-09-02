import ImageModal from '@/components/ImageModal'
import React from 'react'
import Image from 'next/image'
import RecipeArticlesList from '@/components/RecipeArticlesList'

const page = () => {
  return (
    <main className='p-10'>
        <div className="flex flex-wrap items-top mb-10">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <div className="mb-5">
              <h1 className="text-[20px] font-bold mb-2">Recipe/Article List Component </h1>
              <p className="text-[15px]">The <b>Recipe/Article List Component</b> allows content authors to showcase a curated list of recipes  by selecting entries from <b>Recipe Content Fragments</b>. This component is designed for flexible content presentation, supporting both grid and slider layouts.</p>
            </div>
          </div>
          <div className="wrapper mb-5">
              <h2><b>Key Configuration Options:</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[30px]">
                <li><b>Recipe Content Fragment Selection</b> Authors can browse and select one or more content fragments to display. Each item includes an optional checkbox to mark the recipe as a Featured Recipe, allowing for special styling or placement.</li>
                <li><b>Repeater Functionality</b> Multiple recipes or articles can be added dynamically using the <b>Add button</b>, making it easy to build custom lists.</li>
                <li><b>"Learn More" CTA</b> A configurable <b>Call-to-Action</b> button can be added, allowing authors to define the text and link to a detail or category page.</li>
                <li><b>Columns Per Row</b> Authors can define how many items should be displayed per row (e.g., 2, 3, or 4), allowing for a responsive and customizable layout.</li>
                <li><b>Slider Option</b> The component supports enabling a slider/carousel layout, useful for showcasing content in a scrollable horizontal format.</li>
                <li><b>Sponsored Text</b> A dedicated field allows the inclusion of Sponsored Text, which can be used to indicate promotional or branded content.</li>
              </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/RecipeArticlesListEdit.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/RecipeArticlesListEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <RecipeArticlesList />
    </main>
  )
}

export default page