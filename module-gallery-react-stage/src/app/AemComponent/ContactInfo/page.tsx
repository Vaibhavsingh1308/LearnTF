import ContactInfo from "@/components/ContactInfo";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <main className="p-10">
        <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className='text-black text-[20px] font-extrabold leading-normal common-sec-title'>Contact Info  Componant</h1>
            <p className="text-[15px] mt-3">The ContactInfo component is a client-side React functional component that statically renders customer service contact details for various regions in a responsive grid layout.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/ContactInfo.png"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />
              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/ContactInfo.png"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-[20px] font-bold mb-6">Contact Info</h2>
      <ContactInfo />
    </main>
  );
}