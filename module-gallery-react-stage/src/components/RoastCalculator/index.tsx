"use client";

import { useState } from "react";

const proteinOptions = ["Beef", "Fish", "Lamb", "Pork", "Poultry"];

export default function NutritionCalculator() {
    const [selectedProtein, setSelectedProtein] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="bg-grey100 py-6">
            <div className="mx-auto px-6 2md:px-12 max-w-[1536px]">
                <div className="flex flex-col gap-6">
                    <div className="row items-center md:gap-0 gap-4 flex flex-wrap">
                        {/* Protein Dropdown */}
                        <div className="w-full md:w-5/12 xl:w-1/4 flex flex-col gap-2">
                            <label className="text-[14px] font-normal">Protein</label>
                            <div className="relative bg-brandWhite">
                                <button
                                    type="button"
                                    className="border border-[#d6d6d6] w-full text-left rounded-[4px] pt-[15px] pb-[12px] pl-[20px] pr-[40px] text-brandBlack text-[14px] leading-normal relative"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    <span className="line-clamp-1">
                                        {selectedProtein || "Select Protein Type"}
                                    </span>
                                    <span className="absolute top-1/2 -translate-y-1/2 right-[20px]">
                                        <span className="w-[12px] text-[10px] text-brandBlack">▼</span>
                                    </span>
                                </button>
                                {dropdownOpen && (
                                    <ul className="absolute z-10 bg-white shadow-[0_4px_30px_0px_rgba(0,0,0,0.07)] rounded-[5px] top-full left-0 w-full overflow-hidden">
                                        {proteinOptions.map((item) => (
                                            <li
                                                key={item}
                                                className="tab flex gap-3 items-center text-base text-brandBlack py-2 px-4 hover:bg-grey300 cursor-pointer"
                                                onClick={() => {
                                                    setSelectedProtein(item);
                                                    setDropdownOpen(false);
                                                }}
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Serving Size - Disabled Dropdown */}
                        <div className="w-full md:w-5/12 xl:w-1/4 flex flex-col mx-3">
                            <label className="text-[14px] font-normal  pb-[10px]">Serving Size</label>
                            <div className="relative bg-brandWhite">
                                <button type="button" disabled
                                    className="border border-grey300 bg-grey300 opacity-50 w-full text-left rounded-[4px] pt-[15px] pb-[12px] pl-[20px] pr-[40px] text-brandBlack text-[14px] leading-normal relative cursor-not-allowed">
                                    <span className="line-clamp-1">Select Serving Size</span>
                                    <span className="absolute top-1/2 -translate-y-1/2 right-[20px]">
                                        <span className="w-[12px] text-[10px] text-brandBlack">▼</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Calculate Button */}
                        <div className="w-full md:w-2/12 md:mt-8">
                            <button className="inline-flex items-center justify-center transition relative overflow-hidden z-[1] border text-center py-2 rounded-full cursor-not-allowed opacity-50 text-black bg-grey300 border-grey300 hover:border-grey300 hover:bg-grey300 text-[14px] font-light px-6 h-10 w-full"
                                disabled aria-label="Calculate">Calculate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
