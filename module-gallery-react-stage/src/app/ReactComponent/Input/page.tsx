'use client';

import React from "react";
import { Input } from "@/components/Input";

export default function HomePage() {
  return (
    <div className="p-10">
       <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Input Component</h1>
        <p className="text-[15px]">The Input component is a reusable and accessible form element designed to collect user input across various use cases. It fully supports keyboard interaction, screen readers, and responsive layout for mobile, tablet, and desktop views.</p>
      </div>

 

      <div>
      <form className="space-y-4 max-w-md">
        <Input type="email" placeholder="Email address" className="w-full rounded-md"/>
        <Input type="password" placeholder="Password" className="w-full rounded-md"/>
      </form>
      </div>
    </div>
  );
}
