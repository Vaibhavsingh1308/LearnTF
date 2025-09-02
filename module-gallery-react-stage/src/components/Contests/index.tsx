"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const contests = [
  {
    title: "Turn Up the Heat this Summer with Kraft Heinz!",
    image: "/images/Kraft-Heinz-contest.jpg",
    date: "May 01 - August 13, 2025",
    status: "Open",
    statusColor: "bg-[--brandPrimary] text-brandWhite",
    href: "/kraft-heinz-bbq-contest",
    isDisabled: false,
  },
  {
    title: "So Canadian Picnic!",
    image: "/images/So_Canadian_Picnic.jpg",
    date: "May 28 - June 16, 2025",
    status: "Closed",
    statusColor: "bg-grey350 text-grey700",
    href: "#",
    isDisabled: true,
  },
  {
    title: "Compliments Ice Cream Contest",
    image: "/images/Compliments_ice-cream-contest.jpg",
    date: "June 05 - July 09, 2025",
    status: "Closed",
    statusColor: "bg-grey350 text-grey700",
    href: "#",
    isDisabled: true,
  },
];

export default function SobeysContests() {
  return (
    <div className="sobeysContests py-6 lg:py-12">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {contests.map((contest, index) => (
          <Link
            key={index}
            href={contest.href}
            className={contest.isDisabled ? "pointer-events-none" : ""}
          >
            <div className="bg-brandWhite shadow-md rounded-lg overflow-hidden relative flex flex-col">
              <div className="relative bg-gray-200 min-h-[190px] overflow-hidden pt-[57%] md:pt-[58%] xl:pt-[53%]">
                <Image
                  src={contest.image}
                  alt="View Detail"
                  fill
                  className="absolute top-0 left-0 object-cover hover:scale-125 transition-all duration-1000 focus:!outline-offset-[-2px]"
                />
              </div>

              <div className="p-4 border-b border-none !pb-0">
                <div className="flex justify-between mb-2">
                  <div className="text-base">
                    <button className="text-[14px] flex items-center space-x-2 bg-[#7a7a7a1f] rounded text-black px-2 py-1">
                      <Image
                        src="/images/calendar.svg"
                        alt="Calendar Icon"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                      <span className="text-sm">{contest.date}</span>
                    </button>
                  </div>
                  <button
                    className={`text-[14px] flex items-center space-x-2 font-bold px-2 py-1 rounded ${contest.statusColor}`}
                  >
                    {contest.status}
                  </button>
                </div>
                <main>
                  <h2 className="font-sans font-bold text-xl mb-2 min-h-[60px]">
                    {contest.title}
                  </h2>
                </main>
              </div>

              <div className="p-4 border-t !pt-0 !border-t-0 bottom-0 mt-auto">
                <main>
                  <p className="mb-4 text-body"></p>
                  <button
                    aria-label="View Detail"
                    disabled={contest.isDisabled}
                    className={`inline-flex items-center justify-center font-normal transition relative overflow-hidden z-[1] border text-center rounded-full text-[14px] py-[10px] px-6 ${
                      contest.isDisabled
                        ? "cursor-not-allowed opacity-50 bg-grey300 border-grey300 text-brandWhite"
                        : "bg-brandSecondary border-brandSecondary text-brandWhite hover:text-brandSecondary focus:text-brandSecondary hover:bg-brandSecondary focus:bg-brandSecondary hover:border-brandSecondary focus:border-brandSecondary before:bg-white"
                    } before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-full before:transform before:translate-x-[-120%] before:skew-x-[-35deg] before:origin-[0_0] before:transition-transform before:duration-[1s] before:ease-[cubic-bezier(0.07,0.51,0.12,1)] before:z-[-1] hover:before:translate-x-0 focus:before:translate-x-0`}
                  >
                    View Detail
                  </button>
                </main>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
