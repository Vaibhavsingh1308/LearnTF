import React from 'react'
import Link from "next/link";
import Image from "next/image"
import ImageModal from '@/components/ImageModal';

export default function LatestCatchUp() {
    return (
        <main className='p-10'>
        <div className="flex items-center flex-wrap">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Scene Tile with Teaser Component</h1>
            <p className="text-[15px] mb-4">The Scene Tile with Teaser component is a promotional module designed to showcase branded content in a visually engaging layout. It includes the following elements:</p>
          </div>

          <div className="wrapper mb-0">
          <ul className="pl-5 list-disc text-[15px] text-gray-700 leading-[25px]">
              <li><b>Scene Logo</b>: Displays the official Scene+ logo, accompanied by descriptive alt text for accessibility.</li>
              <li className="my-2"><b>Scene Title</b>: A headline that highlights the featured offer or campaign.</li>
              <li><b>Scene Description</b>: Supporting text providing additional context or promotional details.</li>
              <li className="my-2"><b>Link Title</b>: A call-to-action (CTA) label, such as “Learn More” or “Get Offer.”</li>
              <li><b>Click-Through Link</b>: The call-to-action (CTA) is linked that redirects users to a designated URL or landing page.</li>
            </ul>
            <p className="text-[15px] mt-4">To update the images displayed on the right side of the tile, a Teaser component must be added. This allows content authors to easily manage and replace visual imagery associated with the Scene Tile.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/SceneEdit.jpeg"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/SceneEdit.jpeg"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className='recipes-outer-section bg-white pt-[24px] lg:pt-[48px]'>
            <div className='recipes-for-you-section pb-[24px] lg:pb-[48px]'>
                <div className="container">
                    <div className='recipes-for-sec-head flex flex-row items-center justify-between pb-[12px] md:pb-[16px] lg:pb-[32px]'>
                        <h3 className='text-black text-[28px] md:text-[28px] font-extrabold leading-normal common-sec-title'>Catch up on the latest</h3>
                    </div>

                    <div className="recipes-items-outer grid xl:grid-cols-2 gap-[8px] md:gap-[16px] lg:gap-[24px]">
                        <div className='recipes-featured-block scene-featured-dark-card relative bg-black md:pt-[50px] md:px-[53px] lg:px-[60px] lg:pb-[90px] pt-[32px] pb-[42px] px-[36px] rounded-xl overflow-hidden flex items-start justify-between flex-col'>
                            <div className="scene-card-logo-image">
                                <Image src="/images/Scene-logo.svg" width={163} height={48} className="w-[100px] md:w-[163px]" alt="scene plus image" />
                            </div>
                            <div className="scene-logo-dots-img absolute right-[48px] md:right-[80px] top-[25%]">
                                <Image src="/images/scene-dots.svg" width={81} height={81} className="w-[50px] md:w-[81px]" alt="scene plus image" />
                            </div>
                            <div className='recipes-featured-block-desc pt-[78px] md:pt-[152px] lg:pt-[0]'>
                                <h3 className='text-white text-[32px] md:text-[48px] leading-none uppercase mb-[20px] md:mb-[35px] lg:mb-[32px] font-bold popins'>Ready for fresh <span className='block neodisplay'>Rewards?</span></h3>
                                <p className='text-white text-[14px] md:text-[24px] lg:text-[16px] font-normal leading-normal mb-[30px] md:mb-[53px] lg:mb-[48px] max-w-[220px] md:max-w-[400px] lg:max-w-[330px] popins'>Earn and redeem Scene+ points at Sobeys today.</p>
                                <Link href="#" className="bg-white px-[14px] py-[11px] rounded-[30px] max-w-[126px] h-[40px] flex items-center justify-center text-black">Learn More</Link>                            </div>
                            <div className="bottom-right-fixed-img absolute right-0 bottom-0">
                                <Image src="/images/bucket-icon.svg" width={220} height={183} className="w-[134px] md:w-[220px]" alt="scene plus image" />
                            </div>
                        </div>
                        <div className='recipes-featured-cards-row grid gap-[8px] md:gap-[16px] lg:gap-[30px]'>
                            <div className="latest-offer-card py-[36px] md:py-[62px] lg:py-[70px] px-[72px] md:px-[125px] lg:px-[142px] w-full rounded-[12px] bg-[#E35839] ">
                                <Image src="/images/compliments-tile.svg" width={423} height={138} className='m-auto' alt="We all deserve compliments" />
                            </div>
                            <div className='grid grid-cols-2 gap-[8px] md:gap-[16px] lg:gap-[24px]'>
                                <div className="latest-offer-tile rounded-xl">
                                    <Image src="/images/fresh-guarantee-card.jpg" width={342} height={285} className="rounded-xl w-full" alt="We all deserve compliments" />
                                </div>
                                <div className="latest-offer-tile rounded-xl">
                                    <Image src="/images/free-delivery-voila.jpg" width={342} height={285} className="rounded-xl w-full" alt="We all deserve compliments" />
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
