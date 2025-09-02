import ImageModal from "@/components/ImageModal";
import ImgVideoContentBlock from "@/components/ImgVideoContentBlock";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <div className="p-10  max-w-[1920px]">
        <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
        <div className="mb-5">
            <h1 className='text-black text-[20px] font-extrabold leading-normal common-sec-title'>Image Video Content Block Component</h1>
            <p className="text-[15px] mt-3">The <b>Image Video Content Block</b> component is a fully responsive and interactive UI section built with React, Next.js, and Tailwind CSS, designed to highlight the benefits and requirements of a local supplier program.</p>
          </div>
          <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Text Content (Left on Desktop)</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li>Describes the <b>Local Program</b> in a clear and structured format.</li>
                <li>Lists key <b>requirements</b> for suppliers using a semantic bullet list.</li>
                <li>Encourages potential suppliers to engage if they meet the criteria.</li>
              </ul>
            </div>

            <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Video Banner (Right on Desktop)</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li>Displays a thumbnail image for a promotional video.</li>
                <li>Clicking the thumbnail opens a modal popup with a YouTube video that plays automatically.</li>
                <li>Includes a <b>play button overlay</b> styled like a media icon.</li>
                <li>Modal supports proper accessibility with focus and close control, and stops video playback when closed.</li>
              </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/VideoContentBanner.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/VideoContentBanner.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImgVideoContentBlock />
    </div>
  );
}