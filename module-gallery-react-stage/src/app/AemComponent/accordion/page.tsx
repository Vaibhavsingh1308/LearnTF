"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@/components/Accordion";

import Image from "next/image";
import ImageModal from "@/components/ImageModal";

export default function FaqPage() {
  return (
    <div className="main p-8">
      <div className="flex flex-wrap items-top">
        <div className="flex-[6] w-full md:w-6/10">
          {/* Left Column Content */}
          <div className="mb-5">
            <div className="mb-10">
              <h1 className="text-[20px] font-bold mb-2">Accordion Component</h1>
              <p className="text-[15px]">The <b>Accordion Component</b> allows authors to create expandable content sections with optional partner and store card support. It is fully configurable and supports reusable, dynamic content blocks through repeatable fields.</p>
            </div>

            <div className="wrapper mb-7">
              <h2 className="text-[20px] font-bold mb-2">Main Configuration Fields</h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>FAQ Title</b>: Defines the main heading/title for the accordion section.</li>
                <li><b>Description</b>: Adds introductory or supporting text below the section title.</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>FAQs (Repeatable)</b></h2>
              <p> Used to add multiple Question & Answer pairs. Each FAQ item includes:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Heading Text</b> – The question or title of the accordion item</li>
                <li><b>Description</b> – The corresponding answer or detail content</li>
                <li><b>Add Button</b> – Allows adding multiple FAQ items dynamically</li>
              </ul>
            </div>
            <div className="wrapper mb-7">
              <h2><b>Each accordion panel can include associated Partner Cards. Fields for each Partner Card:</b></h2>
              <p> Used to add multiple Question & Answer pairs. Each FAQ item includes:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Image</b> – Partner logo or image</li>
                <li><b>Title</b> – Name or title of the partner</li>
                <li><b>Title Link</b> – Optional link applied to the title</li>
                <li><b>Open in New Tab</b> – Boolean option to open link externally</li>
                <li><b>Add Button</b> – Enables adding multiple partner cards per panel</li>
              </ul>
            </div>
            <div className="wrapper">
              <h2><b>Store Cards (Optional Inside Accordion)</b></h2>
              <p>You can also display <b>Store Cards</b> under the accordion section. Each Store Card includes:</p>
              <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                <li><b>Store Title</b> – Name of the store</li>
                <li><b>Description</b> – Store details or highlights</li>
                <li><b>Add Button</b> – Supports multiple store cards through repetition</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="flex-[4] w-full md:w-4/10">
          <div className="flex items-center justify-center">
            <div className="relative w-[200px]">
              {/* Image with cursor pointer */}
              <Image
                src="/images/AccordianEditFiled.jpg"
                width={400}
                height={400}
                className="w-full h-auto cursor-pointer"
                alt="Voila"
              />

              {/* Zoom Icon Positioned on Top */}
              <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                <ImageModal
                  imageSrc="/images/AccordianEditFiled.jpg"
                  imageAlt="Sample Modal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" flex-wrap gap-6 mt-10 px-1">
        {/* Desktop View */}
        <div className="w-full max-w-[1920px] rounded">
          <div className="h-full flex items-center">
            {/* Desktop content goes here */}
            <Accordion defaultActiveKey="q1" multiplePanelOpen={false} className="w-full">
              <AccordionItem id="q1">
                <AccordionHeader id="q1">What is your return policy?</AccordionHeader>
                <AccordionPanel id="q1">We accept returns within 30 days of purchase. Items must be in original condition.</AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q2">
                <AccordionHeader id="q2">Do you offer international shipping?</AccordionHeader>
                <AccordionPanel id="q2">Yes, we ship to over 50 countries. Shipping rates vary based on location.</AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q3">
                <AccordionHeader id="q3">What is Gellry coupon policy?</AccordionHeader>
                <AccordionPanel id="q3">Once your order ships, you will receive an email with tracking details.</AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q4">
                <AccordionHeader id="q4">What is your scanning accuracy policy?</AccordionHeader>
                <AccordionPanel id="q4">Once your order ships, you will receive an email with tracking details.</AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q5">
                <AccordionHeader id="q5">How can I request that my store carry a certain product?</AccordionHeader>
                <AccordionPanel id="q5">Once your order ships, you will receive an email with tracking details.</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
