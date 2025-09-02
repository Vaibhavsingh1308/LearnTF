import ImageModal from '@/components/ImageModal'
import RecipesCategory from '@/components/RecipesCategory'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='p-10'>
        <div className="flex flex-wrap items-top mb-10">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-10">
            <div className="mb-10">
              <h1 className="text-[20px] font-bold mb-2">Recipe Categories Component</h1>
              <p className="text-[15px]">The <b>Recipe Categories Component</b> allows content authors to showcase various recipe categories in a structured and visually engaging format. It is designed for flexibility, enabling authors to add multiple category blocks that link to relevant recipe content.</p>
            </div>

            <div className="wrapper mb-5">
              <p>The component begins with a Categories Title, which acts as the main heading for the section.
              Each recipe category item supports the following fields:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Label</b> – The name or title of the category (e.g., "Quick Meals", "Healthy Choices")</li>
                <li><b>Category Image</b> – Selected from an existing <b>recipe content fragment</b> to visually represent the category</li>
                <li><b>Image Alt Text</b> – Descriptive text to support accessibility and screen readers</li>
                <li><b>Link to Page</b> – URL or internal page reference where users can explore recipes within the category</li>
              </ul>
            </div>
            <p>Authors can use the <b>Add button</b> to include multiple category items dynamically. Additionally, the component provides <b>drag-and-drop sorting</b>, allowing authors to reorder the category blocks as needed for visual priority or UX flow.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/RecipCategoryEdit.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/RecipCategoryEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <RecipesCategory />
    </main>
  )
}

export default page