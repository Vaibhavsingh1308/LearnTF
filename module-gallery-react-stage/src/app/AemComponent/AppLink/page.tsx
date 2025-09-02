import AppLink from '@/components/AppLink'
import ImageModal from '@/components/ImageModal'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main className='p-10'>
        <div className="flex flex-wrap items-top">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className='text-black text-[24px] md:text-[28px] font-extrabold leading-normal common-sec-title '>App Links Component</h1>
            <p className="text-[15px] mt-4 mb-4">The App Links Component allows authors to showcase mobile app download links for both the App Store and Google Play, with full accessibility support and customization options.</p>
          </div>
          <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Main Fields</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Heading</b> Title text displayed above the app store links.</li>
                <li><b>Description</b> Supporting text or message shown below the heading.</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>App Store & Play Store Links</b></h2>
              <p><b>App Store</b> Authors can configure links for both platforms with the following fields:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Image</b> – App Store badge/logo</li>
                <li><b>Alt Text</b> – Descriptive text for screen readers</li>
                <li><b>Link</b> – URL to the App Store page</li>
                <li><b>Open in New Tab</b> – Boolean to control link behavior</li>
                <li><b>ARIA Label</b> – Improves accessibility and screen reader support</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>Google Play Store</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Image</b> – App Store badge/logo</li>
                <li><b>Alt Text</b> – Descriptive text for screen readers</li>
                <li><b>Link</b> – URL to the App Store page</li>
                <li><b>Open in New Tab</b> – Boolean to control link behavior</li>
                <li><b>ARIA Label</b> – Improves accessibility and screen reader support</li>
              </ul>
            </div>
            <div className="wrapper mb-10">
              <h2><b>Logo Image</b></h2>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Logo Image</b> – Optional brand/app logo</li>
                <li><b>Image Alt Text</b> – Descriptive text for accessibility</li>
              </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image src="/images/AppLinkEdit.png" width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/AppLinkEdit.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        <AppLink />
    </main>
  )
}

export default page