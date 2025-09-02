"use client";

import Image from "next/image";
import React from "react";

const sceneFeatures = [
  {
    title: "1000 points earned equals $10 of free your groceries!",
    image: "/images/Scene.svg",
  },
  {
    title: "Reduced pricing for Scene+ members",
    image: "/images/Member.svg",
  },
  {
    title: "Earn points faster with personalized offers",
    image: "/images/personalizedoffers.svg",
  },
];

const ScenePlusSection = () => {
  return (
    <div className="md:mb-6 lgs:mb-0">
      <div className="pt-[120px] sm:pt-[144px] lgs:pt-[146px]">
        <div className="bg-brandBlack pt-12 pb-6 md:py-12 relative">
          <div className="mx-auto px-6 2md:px-12 max-w-[1536px]">
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 w-full mt-[-144px] lgs:mt-[-160px]">
              {sceneFeatures.map((feature, index) => (
                <div key={index} className="rounded-xl md:w-1/3">
                  <div className="relative">
                    <Image
                      alt="Feature"
                      src={feature.image}
                      width={256}
                      height={256}
                      className="w-[200px] lg:w-[256px] min-h-auto m-auto"
                    />
                    <div className="flex flex-col gap-2 justify-center items-center mt-5 md:mt-6">
                      <h3 className="text-xl text-brandWhite font-sans text-center max-w-[210px] sm:max-w-[240px] lg:max-w-[290px]">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 lgs:mt-12">
              <a aria-label="Sign up today!" target="_blank" href="https://www.sceneplus.ca/register?utm_source=sobeys&utm_medium=sceneplus_lp" className="inline-flex items-center justify-center font-normal transition relative overflow-hidden z-[1] border text-center cursor-pointer before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-full before:transform before:translate-x-[-120%] before:skew-x-[-35deg] before:origin-[0_0] before:transition-transform before:duration-[1s] before:ease-[cubic-bezier(0.07,0.51,0.12,1)] before:z-[-1] hover:before:translate-x-0 focus:before:translate-x-0 bg-white before:bg-brandSecondary text-black border-grey300 hover:border-brandSecondary focus:border-brandSecondary hover:bg-white focus:bg-brandSecondary hover:text-white focus:text-white text-base px-4 py-2 rounded-full">
                Sign up today!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenePlusSection;
