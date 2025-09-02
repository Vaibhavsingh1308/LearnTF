"use client";
import { Switch } from "@/components/Switch"; // adjust the path as needed

export default function HomePage() {
  return (
    <div className="p-10">
       <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2 flex item-center">Switch Component</h1>
        <p className="text-[15px] mb-3">This Switch component provides a modern UI toggle (on/off switch) that is fully accessible, keyboard-navigable, and responsive. It’s perfect for replacing checkboxes or binary settings in user interfaces with a more intuitive visual toggle.</p>
        <p className="text-[15px]">It uses cva for cleanly managing state-based styles and supports customization for colors, accessibility labels, and more</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Features Implemented</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><mark className="ml-2 bg-red-50">Keyboard Accessible</mark></li>
          <li><mark className="ml-2 bg-red-50">ARIA Support</mark></li>
          <li><mark className="ml-2 bg-red-50">Customizable Colors</mark></li>
          <li><mark className="ml-2 bg-red-50">Animated & Smooth Transitions</mark></li>
          <li><mark className="ml-2 bg-red-50">Minimal & Reusable</mark></li>
        </ul>
      </div>
      <h3 className="text-[18px] font-bold mt-5 mb-6">Toggle Switch Example</h3>
      <Switch
        ariaLabel="Dark Mode Toggle"
        checkedBgColor="bg-green-600"
        uncheckedBgColor="bg-gray-400"
      />
    </div>
  );
}
