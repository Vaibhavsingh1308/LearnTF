'use client';

import React from "react";
import { Tabs, Tab, TabPanel } from "@/components/Tabs";

export default function TabsExamplePage() {
  return (
    <div className="p-6">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Tabs Component</h1>
        <p className="text-[15px]">This React implementation provides a custom, flexible, and accessible tab system using React Context to manage tab state. It includes:</p>

        <ul className="pl-5 list-disc text-[15px] text-gray-700 leading-[22px]">
          <li><b>Tabs</b> – Root context provider and wrapper.</li>
          <li><b>Tab</b> – Tab button that switches the view.</li>
          <li><b>TabPanel</b> – Conditionally rendered panel for each tab's content.</li>
        </ul>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Centralized State</li>
          <li>Accessible Markup</li>
          <li>Modular Design</li>
          <li>Customizable</li>
          <li>Lightweight & Performant</li>
          <li>Extensible API</li>
        </ul>
      </div>
       <div className=" flex-wrap gap-6 mt-10 px-1">
      {/* Desktop View */}
            <h4 className="text-xl font-bold mb-4">Desktop</h4>
            <div className="w-full max-w-[1920px] bg-white">
              <div className="h-full flex items-center">
                {/* Desktop content goes here */}
                <div className="w-full">
                    <h2 className="text-base font-semibold mb-6">Tabs Example</h2>
                    <Tabs defaultActiveTab={0}>
                      <div className="flex border-b border-lightgray2 mb-4">
                        <Tab index={0} label="Tab One"  className="text-center " />
                        <Tab index={1} label="Tab Two" className="text-center" />
                        <Tab index={2} label="Tab Three" className="text-center" />
                      </div>
                      
                      <TabPanel index={0}>
                      <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts and post types.</p>
                      </TabPanel>
                      <TabPanel index={1}>
                        <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts and post types or pages and also number of filters are there types or pages and also number of filters are there.</p>
                      </TabPanel>
                      <TabPanel index={2}>
                      <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts types or pages and also number of filters are there. of filters are there.</p>
                      </TabPanel>
                    </Tabs>
                  </div>
              </div>
            </div>

            {/* iPad View */}
            <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
            <div className="w-full max-w-[768px] mt-5 mb-5 bg-white">
              <div className="h-full flex items-center justify-center">
                {/* iPad content goes here */}
                <div className="w-full">
                    <h2 className="text-base font-semibold mb-6">Tabs Example</h2>
                    <Tabs defaultActiveTab={0}>
                      <div className="flex border-b border-lightgray2 mb-4">
                        <Tab index={0} label="Tab One" className="text-center" />
                        <Tab index={1} label="Tab Two" className="text-center" />
                        <Tab index={2} label="Tab Three" className="text-center" />
                      </div>
                      
                      <TabPanel index={0}>
                      <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts and post types.</p>
                      </TabPanel>
                      <TabPanel index={1}>
                        <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts and post types or pages and also number of filters are there types or pages and also number of filters are there.</p>
                      </TabPanel>
                      <TabPanel index={2}>
                      <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts types or pages and also number of filters are there. of filters are there.</p>
                      </TabPanel>
                    </Tabs>
                  </div>
              </div>
            </div>

            {/* Mobile View */}
            <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
            <div className="w-full max-w-[480px] bg-white">
              <div className="h-full flex items-center justify-center">
                {/* Mobile content goes here */}
                <div className="w-full">
                    <h2 className="text-base font-semibold mb-6">Tabs Example</h2>
                    <Tabs defaultActiveTab={0}>
                      <div className="flex border-b border-lightgray2 mb-1">
                        <Tab index={0} label="Tab One" className="text-center" />
                        <Tab index={1} label="Tab Two" className="text-center" />
                        <Tab index={2} label="Tab Three" className="text-center" />
                      </div>
                      
                      <TabPanel index={0}>
                      <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts and post types.</p>
                      </TabPanel>
                      <TabPanel index={1}>
                        <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts and post types or pages and also number of filters are there types or pages and also number of filters are there.</p>
                      </TabPanel>
                      <TabPanel index={2}>
                      <p>Bs Accordion module we can fill title and many options are there heading or subheadings in this we can do dynamic number of posts types or pages and also number of filters are there. of filters are there.</p>
                      </TabPanel>
                    </Tabs>
                  </div>
              </div>
            </div>
       </div>
  </div>
  );
}
