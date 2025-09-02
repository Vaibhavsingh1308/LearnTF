"use client"
import React, { useEffect } from "react";
import { Box } from "@/components/Box";
import { usePathname } from "next/navigation";
import Social from "./Social";
import FooterMenu from "./FooterMenu";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";


export default function FooterAem({}) {
  const pathname = usePathname();
  const NoHeaderPage = ["/maintenance"];
  useEffect(() => {
    setTimeout(()=>{
      const chatElements = document.querySelector('.helpButtonEnabled');
      chatElements?.setAttribute('aria-label', 'Live chat');
    },2500)
  }, []);
  return (
    <main className="p-10">
     <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          {/* Left Column Content */}
          <div className="mb-5">
            <h1 className="text-[20px] font-bold mb-2">Footer Component</h1>
            <p className="text-[15px] mb-4">The Footer component provides users with essential site-wide information and navigation, structured into the following key sections:</p>
          </div>

          <div className="wrapper mb-10">
          <ul className="pl-5 list-disc text-[15px] text-gray-700 leading-[25px]">
              <li><b>Company Connect Fields</b>: Includes options such as Customer service title, Customer service links.</li>
              <li className="my-2"><b>Site Links</b>: A set of categorized navigational links to important pages such as About Us, Careers, Privacy Policy, Terms of Use, Contact Us, and FAQs. These links are organized to enhance accessibility and improve user experience.</li>
              <li><b>Copyright Info</b>: Displays copyright text, the current year, and legal disclaimers. This section typically appears at the bottom of the footer.</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/FooterEditSteps1.jpg"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/FooterEditSteps1.jpg"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {!NoHeaderPage.includes(pathname) && (
        <Box as="div" className="bg-brandWhite mt-auto">
          <Social  /> 
          <FooterMenu  />
        </Box>
      )}

    </main>
  );
}
