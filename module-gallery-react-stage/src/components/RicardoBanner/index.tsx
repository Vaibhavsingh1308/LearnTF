"use client";

import React from "react";
import Image from "next/image";

const RicardoHero = () => {
  return (
    <div className="flex flex-col min-[1921px]:w-[1440px]">
      <div className="relative bg-brandSecondary custom-container-class !bg-brandBlack">
        {/* Image for Mobile View */}
        <div className="w-full lg:w-[55%] relative lg:absolute right-0 top-0 lg:hidden h-[158px] md:h-[270px] lg:h-[350px]">
          <Image
            src="/images/introducing-ricardo-Gourmet-meal.jpg"
            alt="Introducing Ricardo Gourmet meal solutions made simple"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="px-6 2md:px-12 max-w-[1536px] mx-auto order-1 lg:order-0">
          <div className="row flex flex-col lg:flex-row lg:min-h-[350px]">
            <div className="flex flex-col lg:flex-row w-full">
              <div className="w-full lg:w-[43%] flex flex-col justify-center p-6 gap-4 px-3 pt-6 pb-6 md:pt-12 2md:pb-12 pr-0 lg:pr-[122px] md:pb-12 lg:py-4">
                <h2 className="font-sans text-3xl font-bold text-brandWhite text-center">
                  Introducing
                </h2>

                <div className="py-6 lgs:py-8 border-t-[2px] border-b-[2px] border-brandWhite max-w-[323px] lgs:max-w-[484px] mx-auto">
                  <Image
                    src="/images/ricardo.svg"
                    alt="Ricardo Logo"
                    width={483}
                    height={78}
                    className="mx-auto text-center"
                  />
                </div>

                <p className="text-base text-brandWhite text-center">Gourmet meal solutions made simple</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image for Desktop View */}
        <div className="w-full lg:w-[55%] relative lg:absolute right-0 top-0 hidden lg:block h-[158px] md:h-[270px] lg:h-[350px]">
          <Image
            src="/images/introducing-ricardo-Gourmet-meal.jpg"
            alt="Introducing Ricardo Gourmet meal solutions made simple" fill priority className="object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default RicardoHero;
