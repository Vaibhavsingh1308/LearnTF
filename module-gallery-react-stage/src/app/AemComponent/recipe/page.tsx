import React from 'react'
import Link from "next/link";
import Image from "next/image";
import ImageModal from '@/components/ImageModal';

export default function Recipe() {
  return (
    <main className='p-10'>
      <div className="flex flex-wrap items-top mb-10">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-4">Recipe Component</h1>
            <p className="text-[15px] mb-6">
              The <strong>Recipe</strong> component provides versatile options for displaying recipes with interactive elements.
            </p>

            <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Component Features</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><strong>Heading (Main):</strong> Primary title or introduction for the component.</li>
                <li><strong>Description Text:</strong> Supporting explanation or instructions.</li>
              </ul>
            </div>

            <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Recipe Image Section</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><strong>Image:</strong> Displays recipe image with zoom/modal functionality.</li>
                <li><strong>Clickable Heart/Save Button:</strong> Overlay button allowing users to save the recipe.</li>
              </ul>
            </div>

            <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Recipe Cards Grid Section</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><strong>Recipe Image:</strong> Visual representation of the recipe.</li>
                <li><strong>Recipe Title:</strong> Bold and clear title of the recipe.</li>
                <li><strong>Save (Heart) Button:</strong> Interactive button with hover text for saving recipes.</li>
                <li><strong>Learn More Link:</strong> Button linking to detailed recipe information.</li>
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
                alt="Recipe Preview"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/moreitem.png"
                  imageAlt="Recipe Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='recipes-outer-section bg-white pt-[24px] lg:pt-[48px]'>
        <div className='recipes-for-you-section pb-[24px] lg:pb-[48px]'>
          <div className="container container-lg">
            {/* Recipe Grid */}
            <div className="recipes-items-outer grid xl:grid-cols-2 md:gap-[16px] lg:gap-[24px] gap-[24px]">
              <div className='recipes-featured-cards-row pb-[16px] lg:pb-[1px] py-[4px] lg:py-[1px] px-[2px] lg:px-[1px] flex flex-row overflow-auto lg:grid grid-cols-2 gap-[8px] lg:gap-6'>
                {/* Recipe Card */}
                <div className="recipe-featured-card min-w-[250px] custom-max-sm:min-w-[285px] lg:min-w-[10px] flex flex-col bg-white rounded-xl shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  {/* Image */}
                  <div className="imageouter w-full bg-gray-200 rounded-t-xl relative">
                    <Image
                      src="/images/recipe1.jpg"
                      width={342}
                      height={190}
                      className="w-full h-auto recipeimage"
                      alt="Recipe image"
                    />
                    {/* Heart/Save Button */}
                    
                      <span className="receipe-hover-content inline-block absolute top-0 left-0 leading-[36px] text-left pl-[12px] text-[#404040] text-[14px] whitespace-nowrap max-w-[0] h-full overflow-hidden">
                        Save to my recipes
                      </span>
                      <div className="absolute bottom-[12px] right-[19px] flex gap-2 flex-col">
                        <div className="tab rounded-full cursor-pointer bg-brandWhite" role="button" aria-label="Add to favourite">
                          <div className="relative overflow-hidden">
                            <span className="text-[18px] h-[40px] w-[40px] group flex justify-end items-center text-brandBlack rounded-full border border-brandSecondary relative transition-all duration-500 hover:border-brandSecondary-500 z-[9] hover:w-[164px]">
                              <span className="text-left absolute left-0 pr-[20px] w-auto max-w-[210px] whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-[100%] group-hover:translate-x-0 transition-all duration-500 ease-in-out delay-150 pl-3 text-[14px] z-10 text-brandSecondary">
                                Add to favourite
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="w-[25px] h-[25px] mr-[6px] mt-[4px] p-0 transition-colors duration-300 stroke-[#003d2a]"
                                strokeWidth={1.5}
                                fill="none"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.5 3.75c-1.95 0-3.56 1.23-4.5 3.045C11.06 4.98 9.45 3.75 7.5 3.75 5.014 3.75 3 5.878 3 8.438c0 2.458 1.863 5.098 5.57 8.11.934.75 1.953 1.507 3.048 2.258a.75.75 0 00.864 0c1.095-.75 2.114-1.508 3.048-2.258 3.707-3.012 5.57-5.652 5.57-8.11 0-2.56-2.014-4.688-4.5-4.688z"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                   
                  </div>

                  {/* Description */}
                  <div className="recipe-featured-card-desc p-[12px] custom-max-sm:p-4 pb-4 2xl:pb-8 bg-white rounded-b-xl">
                    <h5 className='text-black text-[14px] custom-max-sm:text-[16px] font-bold leading-normal mb-4'>
                      Grilled Zucchini Caesar Salad with Halloumi...
                    </h5>
                    <Link
                      href="#"
                      className="inline-block border border-[var(--grey300)] px-[14px] py-[8px] rounded-full text-sm font-medium text-black"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
