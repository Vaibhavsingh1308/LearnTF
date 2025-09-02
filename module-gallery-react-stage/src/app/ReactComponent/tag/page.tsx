"use client";

import React from "react";
import { Tag } from "@/components/Tag";

export default function TagsPage() {
  return (
    <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Component Explanation: Tag Button</h1>
        <p className="text-[15px] mb-4">This <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Tag</mark> component is a reusable, styled <b>button-like badge</b> built with <b>React, TypeScript, Tailwind CSS</b>, and the <b>class-variance-authority (CVA)</b> library for managing variants. It also supports optional icons, using either a React Node or a URL string (rendered with Next.js <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Image</mark>).</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><b>Flexible</b> — works as a badge, button, or status chip.</li>
          <li><b>Extendable</b> — easily supports more variants and behaviors.</li>
          <li><b>Accessible</b> — it's a button by default with customizable props.</li>
          <li><b>Icon-Ready</b> — supports both SVG string paths and React components.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold mb-4">Tag Component Examples</h2>
      <div className="flex gap-3">
        <Tag variant="primary">Primary Tag</Tag>
        <Tag variant="secondary" className="">Secondary Tag</Tag>
        <Tag variant="success" inIcon={""}> Success Tag</Tag>
        <Tag variant="danger" inIcon="" aria-label="Warning">Danger Tag</Tag>
      </div>
    </main>
  );
}
