"use client";

import React from "react";
import Image from "next/image";
import ImageModal from "../ImageModal";

export default function ContactForm() {

    return (
        <main>
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-1/2">
                    {/* Left Column Content */}
                    <div className="mb-5">
                        <h2 className="text-[20px] font-bold mb-2">Contact form: Component</h2>
                        <p className="text-[15px] mb-4">In the Entertaining Contact form component we have form label and placeholder fields so you need to add them in a particular field.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[200px]">
                            {/* Image with cursor pointer */}
                            <Image src="/images/ContactUsEdit.png" width={400} height={400} className="w-full h-auto cursor-pointer" alt="Voila"/>
                            {/* Zoom Icon Positioned on Top */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                                <ImageModal imageSrc="/images/ContactUsEdit.png" imageAlt="Sample Modal Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form className="2md:mt-4 w-full max-w-4xl bg-white border p-6 rounded">
                {/* Row 1: First and Last Name */}
                <h2 className="font-bold text-[20px] mb-5">Contact Us</h2>
                <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                        <label htmlFor="firstName" className="block text-brandBlack mb-2">First Name*</label>
                        <input type="text" id="firstName" name="firstName"
                            maxLength={30} className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light"
                            placeholder="Enter your first name"/>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-2">
                        <label htmlFor="lastName" className="block text-brandBlack mb-2">Last Name*</label>
                        <input type="text" id="lastName" name="lastName" maxLength={30}
                            className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light"
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>

                {/* Row 2: Email and Phone */}
                <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                        <label htmlFor="email" className="block text-brandBlack mb-2">Email*</label>
                        <input type="email" id="email" name="email"
                            className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-2">
                        <label htmlFor="phone" className="block text-brandBlack mb-2">Phone*</label>
                        <input type="text" id="phone" name="phone"
                            className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>

                {/* Row 3: Province and Store Location */}
                <div className="flex flex-wrap mb-4">
                    <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                        <label htmlFor="province" className="block text-brandBlack mb-2">Province*</label>
                        <select id="province" name="province"
                            className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack text-base font-light">
                            <option value="">Select Province</option>
                            <option value="ON">Ontario</option>
                            <option value="AB">Alberta</option>
                            <option value="BC">British Columbia</option>
                            <option value="MB">Manitoba</option>
                            <option value="NB">New Brunswick</option>
                            <option value="NL">Newfoundland and Labrador</option>
                            <option value="NS">Nova Scotia</option>
                            <option value="PE">Prince Edward Island</option>
                            <option value="SK">Saskatchewan</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-2">
                        <label htmlFor="storeLocation" className="block text-brandBlack mb-2">Store Location</label>
                        <input type="text" id="storeLocation" name="storeLocation" placeholder="N/A" readOnly
                            className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light"
                        />
                        <div className="text-sm mt-1">To select a different store{" "}
                            <a href="#" className="text-brandSecondary underline hover:no-underline">Click Here</a>
                        </div>
                    </div>
                </div>

                {/* Subject */}
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-brandBlack mb-2">Subject*</label>
                    <input type="text" id="subject" name="subject" maxLength={120}
                        className="w-full h-14 px-4 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light"
                        placeholder="Enter the subject"/>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-brandBlack mb-2">Description*</label>
                    <textarea id="description" name="description" className="w-full h-[151px] p-3 border border-grey350 rounded focus:outline-none text-brandBlack placeholder-brandBlack text-base font-light" placeholder="Describe your issue or inquiry"></textarea>
                </div>
                {/* Submit Button */}
                <div><button type="submit" className="mt-5 inline-flex items-center justify-center bg-brandSecondary text-brandWhite border border-brandSecondary rounded-full px-5 py-2 font-normal text-base relative overflow-hidden z-[1] transition hover:text-brandSecondary focus:text-brandSecondary hover:bg-brandSecondary focus:bg-brandSecondary hover:border-brandSecondary focus:border-brandSecondary before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-full before:transform before:translate-x-[-120%] before:skew-x-[-35deg] before:origin-[0_0] before:transition-transform before:duration-[1s] before:ease-[cubic-bezier(0.07,0.51,0.12,1)] before:z-[-1] hover:before:translate-x-0 focus:before:translate-x-0 before:bg-white">Submit</button></div>
            </form>
        </main>
    );
}
