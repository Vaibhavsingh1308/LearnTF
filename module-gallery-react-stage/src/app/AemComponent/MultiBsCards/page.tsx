import ImageModal from "@/components/ImageModal";
import MultiBsCards from "@/components/MultiBsCards";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-10">
        <div className="flex flex-wrap mb-20 items-center">
        <div className="w-full md:w-1/2">
        <div className="mb-5">
            <h1 className='text-black text-[20px] font-extrabold leading-normal common-sec-title'>Image Video Content Block Component</h1>
            <p className="text-[15px] mt-3">The <b>MultiBsCards</b> component presents a titled section featuring a grid of informational cards. Each card highlights a specific business use case for grocery gift cards—like employee rewards, customer loyalty, recruiting, and more. It uses a clean layout, responsive grid, and modern UI elements, making it suitable for corporate, e-commerce, or loyalty program pages.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/MultiBsCards.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/MultiBsCards.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MultiBsCards />
    </div>
  );
}
