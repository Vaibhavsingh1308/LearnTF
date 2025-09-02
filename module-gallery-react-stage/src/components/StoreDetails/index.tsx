"use client";

import React from "react";

const StoreDetails = () => {
    return (
        <div className="mx-auto max-w-full px-0">
            <div className="flex flex-col-reverse lgs:flex-row mx-auto bg-[#003D2A] max-w-[1920px]">
                {/* Left Column - Store Details */}
                <div className="w-full lgs:w-1/2 py-14 px-6 2md:px-12 6xl:pl-[13%] 7xl:pl-[12.5%]">
                    <h2 className="font-sans text-2xl 2md:text-5xl text-brandWhite font-extrabold">St John's Howley Estates</h2>

                    <div className="flex flex-col 3xs:flex-row gap-4 pt-4">
                        {/* First Button */}
                        <a href="/flyer?set_preferred_store_number=0744" className="w-auto">
                            <button
                                aria-label="View Flyer"
                                className="buttonDirection group flex gap-3 items-center justify-center border border-brandWhite text-white text-sm 2xs:text-[14px] px-4 py-2 rounded-full transition hover:bg-white hover:text-brandSecondary hover:border-brandSecondary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white group-hover:text-[#003D2A] transition rotate-[180deg]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75V21a.75.75 0 001.125.66L12 17.25l8.625 4.41A.75.75 0 0021.75 21V6.75m-19.5 0L12 2.25m0 0l8.25 4.5M12 2.25v15"
                                    />
                                </svg>
                                View Flyer
                            </button>
                        </a>


                        {/* Second Button */}
                        <button
                            type="submit"
                            aria-label="Select this store"
                            className="buttonSelectStore w-auto bg-white text-[#003D2A] text-sm 2xs:text-[14px] px-4 py-2 rounded-full transition border border-[#003D2A] hover:bg-[#003D2A] hover:text-white hover:border-white"
                        >
                            Select this store
                        </button>
                    </div>

                </div>

                {/* Right Column - Map */}
                <div className="w-full lgs:w-1/2">
                    <div className="h-[300px] lgs:h-full w-full relative">
                        <div className="absolute inset-0 bg-gray-300">
                            {/* Replace this with your actual Map component */}
                            <div className="h-full w-full flex items-center justify-center text-black font-medium">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.9014811075103!2d-52.70995792360817!3d47.5876559711881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0ca3fb4f650865%3A0x2668875e1c2952e7!2sSobeys%20Howley%20Estates!5e1!3m2!1sen!2sin!4v1751472659620!5m2!1sen!2sin"
                                    className="w-full h-full border-0 rounded-none"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreDetails;
