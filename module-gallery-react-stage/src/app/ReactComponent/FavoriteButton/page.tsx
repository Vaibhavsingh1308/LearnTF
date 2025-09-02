import React from "react";
import FavoriteButton from "@/components/FavoriteButton"; // adjust path if needed

export default function Home() {
  return (
    <main className="p-10">
    <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2"> Favorite-Button Component</h1>
        <p className="text-[15px] mb-4">The <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">FavoriteButton</mark> is a dynamic and responsive React component designed to toggle a "favorite" state, often used in product listings, user profiles, or wishlists. It provides visual feedback using a heart-shaped SVG icon that fills with red color when selected. The button intelligently expands to show contextual text (<mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">"Add to favourite"</mark> or <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">"Remove favourite"</mark>) on hover or when favorited, and collapses into a compact circular icon otherwise.</p>
        <p className="text-[15px] mb-2">The design is fully interactive with smooth transitions and accommodates responsive behavior for mobile screens (hiding text on small viewports). The component uses internal state management via React hooks and is styled using Tailwind CSS utility classes with Chakra-style  <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Box</mark> and  <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">Button</mark> components for layout consistency.</p>
        <ul className="lpl-5 list-disc text-[15px] text-gray-700 pl-4 leading-[30px] mt-7">
          <li><b>Toggle State</b>: Maintains a <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">true/false</mark> <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">isFavorite</mark> state to manage the favorite status.</li>
          <li><b>Accessible Labeling</b>: Uses <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">aria-label</mark> for screen reader accessibility.</li>
          <li><b>Smart Animation Logic</b>: Dynamically calculates text width to smoothly expand or contract the button.</li>
          <li><b>Hover & Focus Feedback</b>: Expands the button to show text on hover or focus; collapses on blur</li>
          <li><b>Visual Feedback</b>: Heart icon filled in red when marked as favorite.</li>
          <li><b>Responsive Behavior</b>: Auto-collapses for small screens <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">(max-lg:hidden)</mark> showing only the icon.</li>
          <li><b>Smooth Transitions</b>: All width and transform transitions use Tailwind classes and inline styles for animated UX.</li>
        </ul>
      </div>
    <h2 className="text-2xl font-bold mb-4">Static Favorite Button Example</h2>
      <div className="flex justify-end p-6 max-w-[250px]">
        <FavoriteButton />
      </div>
    </main>
  );
} 
