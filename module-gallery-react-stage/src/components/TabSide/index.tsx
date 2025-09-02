"use client";

import React, { useState } from "react";
import Image from "next/image";

const provinces = [
  "British Columbia",
  "Alberta",
  "Saskatchewan",
  "Manitoba",
];

// Province-specific winner data
const winnersData: Record<string, { title: string; name: string; link: string; image: string }[]> = {
  "British Columbia": [
    {
      title: "Best New Local Supply Partner",
      name: "Bee Kind Honey",
      link: "https://www.beekind.ca/",
      image: "/images/local-supply.jpg",
    },
    {
      title: "Best Local Innovation",
      name: "NoochPOP",
      link: "https://noochpop.ca/",
      image: "/images/noochpop.jpg",
    },
  ],
  Alberta: [
    {
      title: "Best Overall Local Supply Partner",
      name: "Yeshi Dressings",
      link: "https://www.yeshifoods.com/",
      image: "/images/yeshi-dressings.jpg",
    },
    {
      title: "Local Sustainability Award",
      name: "Tru Earth",
      link: "https://www.tru.earth/home-c3",
      image: "/images/tru-earth.jpg",
    },
  ],
  Saskatchewan: [
    {
      title: "Best Innovation",
      name: "Prairie Berries",
      link: "#",
      image: "/images/noochpop.jpg",
    },
    {
      title: "Local Sustainability Award",
      name: "Tru Earth",
      link: "https://www.tru.earth/home-c3",
      image: "/images/tru-earth.jpg",
    },
  ],
  Manitoba: [
    {
      title: "Best Innovation",
      name: "Prairie Berries",
      link: "#",
      image: "/images/noochpop.jpg",
    }
  ],
  
  // Default empty or repeat same data for other provinces
  // Manitoba: [],
  "Northern Ontario": [],
  Ontario: [],
  "New Brunswick": [],
  "Nova Scotia": [],
  "Newfoundland and Labrador": [],
  "Prince Edward Island": [],
};

export default function ProvinceTabs() {
  const [selectedProvince, setSelectedProvince] = useState("British Columbia");
  const winners = winnersData[selectedProvince] || [];

  return (
    <div className="flex flex-col md:flex-row items-start">
      {/* Sidebar */}
      <div className="hidden md:block w-52 lg:w-60 shrink-0" role="tablist">
        <div className="mb-6 pr-5">
          <h3 className="font-sans text-xl font-bold">Province</h3>
          <p className="text-sm text-gray-600 mt-1">To see winners by province, click below</p>
        </div>
        {provinces.map((province) => (
          <button
            key={province}
            onClick={() => setSelectedProvince(province)}
            className={`w-full text-left py-4 px-6 text-[15px] border border-b-0 last:border-b border-gray-300 relative transition-colors duration-300 font-normal focus:outline-none ${
              selectedProvince === province
                ? "bg-white text-black font-semibold before:absolute before:top-0 before:left-0 before:w-1 before:h-full border-r-0 before:bg-brandSecondary"
                : "bg-gray-50 text-brandSecondary"
            }`}
            role="tab"
            aria-selected={selectedProvince === province}
          >
            {province}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden w-full mb-4">
        <h3 className="font-sans text-xl font-bold mb-2">Province</h3>
        <select
          value={selectedProvince}
          onChange={(e) => setSelectedProvince(e.target.value)}
          className="w-full border border-gray-300 px-4 py-3 rounded-md text-base"
        >
          {provinces.map((province) => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      </div>

      {/* Content Panel */}
      <div
        role="tabpanel"
        aria-labelledby={`tab-${selectedProvince}`}
        className="w-full md:border md:border-gray-300 ml-[-1px] p-6 mt-6 md:mt-0 bg-white rounded-md"
      >
        {winners.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {winners.map((winner) => (
              <div key={winner.name} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md">
                <div className="relative w-full h-[200]">
                  <Image
                    src={winner.image}
                    alt={winner.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <div className="flex flex-col justify-between h-auto p-4 space-y-2">
                  <h3 className="font-sans text-xl font-extrabold">{winner.title}</h3>
                  <a
                    href={winner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brandSecondary underline font-bold text-sm mt-auto"
                  >
                    {winner.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-gray-500">
            No winners available for <b>{selectedProvince}</b> at the moment.
          </div>
        )}

        {/* Footer */}
        <div className="mt-10 space-y-4 text-sm text-gray-700">
          <p>
            The Sobeys Inc. family of banners is proud to celebrate the passion, innovation and
            commitment of our local supply partner community through our Local Supplier Awards.
          </p>
          <p>
            Each year, our store teams and Local Development Managers select the top local supply
            partners in each region for the{" "}
            <b>
              Best New Local Supply Partner Award, the Local Innovation Award, and the Best Overall
              Local Supply Partner Award.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}
