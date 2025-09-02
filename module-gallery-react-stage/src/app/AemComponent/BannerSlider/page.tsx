"use client";
import BannerSlider from "@/components/BannerSlider/Index";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";


const slidesImg = [
  "/images/1920Slide.jpg",
  "/images/1920Slide.jpg",
  "/images/1920Slide.jpg",
  "/images/1920Slide.jpg",
];



export default function SliderPage() {
  return (
    <main className="p-10">
      <div className="flex flex-wrap items-center">
        <div className="flex-[7] w-full md:w-7/10">
          {/* Left Column Content */}
          <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Slider Component</h1>
            <p className="text-[15px] pr-[130px] mb-2">The Slider Component is a versatile carousel module designed to showcase a series of slides containing images, text, and call-to-action buttons. It offers flexible layout and content options to support promotional messaging, storytelling, or feature highlights.</p>

            <h2 className='mb-2'><strong>General Configuration Options</strong></h2>
            <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li><strong>Banner Width: </strong>
                Choose between Container Width (aligned with page content) or Full Width (edge-to-edge display) to fit the design context.</li>
              <li><strong> Carousel Type</strong> <br />
                Select the type of slider content: <br />
                <strong> Image Only</strong> <br />
                <strong> Text with Image</strong>
              </li>
            </ul>

            <h2 className='mb-2'><strong>Carousel Items (Repeatable)</strong></h2>
            <p className="text-[15px] mb-5">Authors can add multiple carousel slides using the repeater functionality. Each item includes the following sections:</p>
            <h4>Image Section:</h4>
            <ul className="list-disc mt-2 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
              <li>Carousel Image – Main image for desktop view</li>
              <li>Tablet Image – Image optimized for tablet viewports</li>
              <li>Mobile Image – Image optimized for mobile viewports</li>
              <li>Image Alt Text – Descriptive alt text for accessibility</li>
              <li>Carousel Tag – Optional tag or label to highlight slide category or theme</li>
            </ul>
          </div>
        </div>
        <div className="flex-[3] w-full md:w-3/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/BannerSlider.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/BannerSlider.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h4 className="text-xl font-bold mb-2">Desktop</h4>
        <p className="text-[15px] mb-4"> <strong>Image Dimension:</strong> 1920 x 350</p>
        <div className="w-full rounded">
          <BannerSlider slides={slidesImg} />
        </div>
      </div>
    </main>
  );
}
