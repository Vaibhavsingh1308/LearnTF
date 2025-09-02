"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@/components/Accordion";

export default function FaqPage() {
  return (
    <div className="main p-8">

      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Accordion Component</h1>
        <p className="text-[15px]">This is a fully accessible, modular, and customizable Accordion component with React, Tailwind CSS, and TypeScript. It is split into composable parts</p>
      </div>

      <div className="wrapper">
        <h2 className="text-[20px] font-bold mb-2">Components Overview</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Accordion</mark> : The main container and provider of shared open/close state.</li>
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">AccordionItem</mark> : Wraps each accordion section. Accepts an <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">id</mark> to track open state.</li>
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">AccordionHeader</mark> : The clickable title. Handles toggle behavior, icons, and accessibility.</li>
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">AccordionPanel</mark> : The expandable content area. Supports smooth animation and auto-focus.</li>
        </ul>
      </div>

      
      <div className=" flex-wrap gap-6 mt-10 px-1">
        {/* Desktop View */}
        <h4 className="text-xl font-bold mb-4">Desktop</h4>
        <div className="w-full max-w-[1920px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
          <div className="h-full flex items-center">
            {/* Desktop content goes here */}
            <Accordion multiplePanelOpen={true} defaultActiveKey="q1" className="w-full">
              <AccordionItem id="q1">
                <AccordionHeader id="q1">What is your return policy?</AccordionHeader>
                <AccordionPanel id="q1">
                  We accept returns within 30 days of purchase. Items must be in original condition.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q2">
                <AccordionHeader id="q2">Do you offer international shipping?</AccordionHeader>
                <AccordionPanel id="q2">
                  Yes, we ship to over 50 countries. Shipping rates vary based on location.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q3">
                <AccordionHeader id="q3">How can I track my order?</AccordionHeader>
                <AccordionPanel id="q3">
                  Once your order ships, you will receive an email with tracking details.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* iPad View */}
        <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
        <div className="w-full max-w-[768px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-5 bg-white">
          <div className="h-full flex items-center justify-center">
            {/* iPad content goes here */}
            <Accordion multiplePanelOpen={true} defaultActiveKey="q1" className="w-full">
              <AccordionItem id="q1">
                <AccordionHeader id="q1">What is your return policy?</AccordionHeader>
                <AccordionPanel id="q1">
                  We accept returns within 30 days of purchase. Items must be in original condition.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q2">
                <AccordionHeader id="q2">Do you offer international shipping?</AccordionHeader>
                <AccordionPanel id="q2">
                  Yes, we ship to over 50 countries. Shipping rates vary based on location.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q3">
                <AccordionHeader id="q3">How can I track my order?</AccordionHeader>
                <AccordionPanel id="q3">
                  Once your order ships, you will receive an email with tracking details.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Mobile View */}
        <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
        <div className="w-full max-w-[480px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
          <div className="h-full flex items-center justify-center">
            {/* Mobile content goes here */}
            <Accordion multiplePanelOpen={true} defaultActiveKey="q1" className="w-full">
              <AccordionItem id="q1">
                <AccordionHeader id="q1">What is your return policy?</AccordionHeader>
                <AccordionPanel id="q1">
                  We accept returns within 30 days of purchase. Items must be in original condition.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q2">
                <AccordionHeader id="q2">Do you offer international shipping?</AccordionHeader>
                <AccordionPanel id="q2">
                  Yes, we ship to over 50 countries. Shipping rates vary based on location.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem id="q3">
                <AccordionHeader id="q3">How can I track my order?</AccordionHeader>
                <AccordionPanel id="q3">
                  Once your order ships, you will receive an email with tracking details.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
