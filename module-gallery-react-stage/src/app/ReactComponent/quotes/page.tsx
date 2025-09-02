"use client";

import React from "react";
import { Quote } from "@/components/Quote";

const AboutPage = () => {
  return (
    <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Quote Component</h1>
        <p className="text-[15px] pr-[130px] mb-2">The Quote component is a <b>versatile, accessible, and stylistically adaptable blockquote-like UI component</b> that renders a quotation and optionally its author. It's built with:</p>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
          <li><b>CVA</b> for class composition and design variant handling</li>
          <li><b>Tailwind CSS</b> utility classes for styling</li>
          <li><b>React</b> for reusable component structure</li>
        </ul>
      </div>

      <div className="wrapper">
        <h2 className="text-[20px] font-bold mb-2">Benefits of This Approach</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><b>Reusability</b>: Can be reused anywhere (testimonials, featured quotes, etc.)</li>
          <li><b>Customizable</b>: Tailwind + CVA gives flexibility for color and layout</li>
          <li><b>Accessible</b>: Uses ARIA roles and labels</li>
          <li><b>Scoped Styles</b>: Pseudo-elements like before avoid extra markup</li>
        </ul>
      </div>

      <h2 className="text-3xl mt-10 font-bold mb-6">Desktop</h2>
      <div className="max-w-[1920px] py-12 p-10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-bold mb-6">Quotes</h2>
        <Quote
          quote="The best way to predict the future is to invent it."
          author="Alan Kay"
          color="blue"
          quoteBorderColor="red"
          className="mb-6"
        />
        <p className="text-base text-grey800">Our mission is to build tools that help people create amazing things.</p>
      </div>

      <h2 className="text-3xl mt-10 font-bold mb-6">Ipad</h2>
      <div className="max-w-[767px] py-12 p-10 mt-5 mb-10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-bold mb-6">Quotes</h2>
        <Quote
          quote="The best way to predict the future is to invent it."
          author="Alan Kay"
          color="blue"
          quoteBorderColor="red"
          className="mb-6"
        />
        <p className="text-base text-grey800">
          Our mission is to build tools that help people create amazing things.
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6">Mobile</h2>
      <div className="max-w-[480px] py-12 p-10 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)]">
        <h2 className="text-2xl font-bold mb-6">Quotes</h2>
        <Quote
          quote="The best way to predict the future is to invent it."
          author="Alan Kay"
          color="blue"
          quoteBorderColor="red"
          className="mb-6"
        />
        <p className="text-base text-grey800">
          Our mission is to build tools that help people create amazing things.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
