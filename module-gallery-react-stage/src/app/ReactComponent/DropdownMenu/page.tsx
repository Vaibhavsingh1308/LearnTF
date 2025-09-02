"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
} from "@/components/DropdownMenu/index";

export default function HomePage() {
  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Dropdown Menu Component</h1>
        <p className="text-[15px]">
          This is a flexible and accessible{" "}
          <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">
            DropdownMenu
          </mark>{" "}
          component built using <b>React, Tailwind CSS,</b> and the{" "}
          <b>Context API</b>. It allows for easy integration of dropdown menus
          with custom triggers and animated content panels.
        </p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Benefits & Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>
            Fully <b>controlled or uncontrolled</b> usage (
            <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">
              controlledOpen
            </mark>{" "}
            &{" "}
            <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">
              onClose
            </mark>
            )
          </li>
          <li>
            <b>Click outside</b> to close
          </li>
          <li>
            Optional <b>animation</b> on open/close
          </li>
          <li>
            Auto-close on <b>item click</b>
          </li>
          <li>
            <b>Keyboard accessible</b> (Enter, Space to toggle)
          </li>
          <li>
            <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">
              asChild
            </mark>{" "}
            support for custom trigger elements
          </li>
          <li>
            <b>ARIA support</b> for accessibility
          </li>
          <li>
            Utility-first styling using <b>Tailwind CSS</b>
          </li>
        </ul>
      </div>

      <DropdownMenu>
        <DropdownTrigger >
          Open Menu
        </DropdownTrigger>
        <DropdownContent className="bg-white">
          <ul className="space-y-1">
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                Profile
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                Settings
              </button>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                Logout
              </button>
            </li>
          </ul>
        </DropdownContent>
      </DropdownMenu>
    </div>
  );
}
