"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
} from "@/components/Card"; // adjust path as needed
import { Button } from "@/components";

const MyPage = () => {
  return (
    <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Card Component</h1>
        <p className="text-[15px] mb-4">This file defines a modular and reusable Card component system using React. It follows a compound component pattern, which allows developers to build structured UI cards by combining smaller, purpose-built subcomponents like CardHeader, CardTitle, CardContent, etc.</p>
        <p className="text-[15px]">It’s ideal for creating consistent UI sections like product cards, user profiles, or dashboard widgets.</p>
      </div>

      <div className="wrapper mb-10">
        <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[30px]">
          <li><b>Composable Structure</b> – Use only the parts you need (CardHeader, CardContent, etc.).</li>
          <li><b>Tailwind-Ready Styling</b> – Easily extend with utility-first classes.</li>
          <li><b>Lightweight & Customizable</b> – Minimal dependencies; fits any project.</li>
          <li><b>Event Support</b> – Card supports onClick for interactive use cases.</li>
          <li><b>Semantic & Accessible</b> – Encourages good HTML structure via nested components.</li>
        </ul>
      </div>

      <div className=" flex-wrap gap-6 mt-10 px-1">
            {/* Desktop View */}
            <h4 className="text-xl font-bold mb-4">Desktop</h4>
            <div className="w-full max-w-[1920px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
              <div className="h-full flex items-center">
                {/* Desktop content goes here */}
                <Card className="w-full">
                  <CardImage src="/images/Banner_1070.jpg" alt="Product image" />
                  <CardHeader>
                    <CardTitle>Product Name</CardTitle>
                    <CardDescription>Short description of the product</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the main content of the card. You can add anything here, like images, text, etc.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#003d2a] hover:bg-gray-100 text-white px-4 py-2 rounded-md">Buy Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* iPad View */}
            <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
            <div className="w-full max-w-[768px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] mt-5 mb-5 bg-white">
              <div className="h-full flex items-center justify-center">
                {/* iPad content goes here */}
                <Card  className="w-full">
                  <CardImage src="/images/Ipads830.jpg" alt="Product image" />
                  <CardHeader>
                    <CardTitle>Product Name</CardTitle>
                    <CardDescription>Short description of the product</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the main content of the card. You can add anything here, like images, text, etc.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#003d2a] hover:bg-gray-100 text-white px-4 py-2 rounded-md">Buy Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            {/* Mobile View */}
            <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
            <div className="w-full max-w-[480px] rounded shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white">
              <div className="h-full bg-gray-100 flex items-center justify-center">
                {/* Mobile content goes here */}
                <Card className="w-full">
                  <CardImage src="/images/Mobile375.jpg" alt="Product image" />
                  <CardHeader>
                    <CardTitle>Product Name</CardTitle>
                    <CardDescription>Short description of the product</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>This is the main content of the card. You can add anything here, like images, text, etc.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-[#003d2a] hover:bg-gray-100 text-white px-4 py-2 rounded-md">Buy Now</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
      </div>
    </main>
  );
};

export default MyPage;
