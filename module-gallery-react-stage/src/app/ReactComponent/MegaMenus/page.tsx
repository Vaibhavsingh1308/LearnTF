"use client";
import MegaMenu from "@/components/MegaMenu";
import type { HeaderData } from "@/components/MegaMenu"; // 👈 Correct type import
import dummyHeaderData from "@/app/sampleHeader.json";
import { useState } from "react";

export default function Home() {
  const [, setIsPanelOpen] = useState(false);

  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">MegaMenu Component</h1>
        <p className="text-[15px] pr-[130px] mb-2">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">MegaMenu</mark>  component is a <b>responsive, recursive, multi-level navigation menu</b> built using React (with TypeScript) and designed to support <b>deeply nested dropdown structures</b> based on dynamic header data.</p>
      </div>

      <header>
        <MegaMenu
            setIsPanelOpen={setIsPanelOpen}
            headerData={dummyHeaderData as HeaderData}
        />
      </header>
      <main className="pt-10">
        {/* <h1>Welcome to Home Page</h1> */}
      </main>
    </div>
  );
}
