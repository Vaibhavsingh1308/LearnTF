"use client";
import { Box } from "@/components/Box/index";
import React from "react";

const Page = () => {
  return (
    <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2 ">Box Component</h1>
        <p className="text-[15px]">
          The Box component is a polymorphic utility component built with React
          and TypeScript. It serves as a flexible wrapper that can render
          different HTML elements or React components using the as prop. This
          approach is especially useful in design systems and component
          libraries where reusable, composable components are a priority.
        </p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Features Implemented</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>
            <mark className="ml-2 bg-red-50">Polymorphism via as Prop</mark>
          </li>
          <li>
            <mark className="ml-2 bg-red-50">
              Custom Styling with className
            </mark>
          </li>
          <li>
            <mark className="ml-2 bg-red-50">Default to div</mark>
          </li>
          <li>
            <mark className="ml-2 bg-red-50">Reusable</mark>
          </li>
        </ul>
      </div>

      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h4 className="text-3xl font-bold mb-4 text-brandSecondary"  >Desktop</h4>
        <div className="w-full max-w-[1920px] bg-white">
          <div className="flex items-center">
            {/* Desktop content goes here */}
            <Box className="rounded ">
              <h4 className="text-xl font-bold mb-2">Heading</h4>
              <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
            </Box>
          </div>
        </div>
        <hr className=" border-t border-gray-200 mt-10" />
        {/* iPad View */}
        <h4 className="text-2xl font-bold mt-10 mb-4 text-brandSecondary">iPad</h4>
        <div className="w-full max-w-[768px] mt-5 mb-5 bg-white">
          <div className="flex items-center justify-center">
            {/* iPad content goes here */}
            <Box className="rounded ">
              <h5 className="text-lg   font-bold mb-2">Heading</h5>
              <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
            </Box>
          </div>
        </div>
        <hr className=" border-t border-gray-200 mt-10" />

        {/* Mobile View */}
        <h4 className="text-lg font-bold mt-10 mb-4 text-brandSecondary">Mobile</h4>
        <div className="w-full max-w-[480px] bg-white">
          <div className="flex items-center justify-center">
            {/* Mobile content goes here */}
            <Box className="rounded ">
              <h6 className="text-1xl font-bold mb-2">Heading</h6>
              <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</p>
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
