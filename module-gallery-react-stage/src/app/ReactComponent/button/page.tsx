"use client";
import { Button } from '@/components';
import React from 'react'

const Page = () => {
  return (
    <main className='p-10'>
     <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Button Component</h1>
        <p className="text-[15px]">his is a versatile, highly customizable button built using:</p>
        <ul className="pl-5 list-disc text-[15px] text-gray-700 mt-5 leading-[30px]">
          <li><b>Tailwind CSS</b> for styling</li>
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">class-variance-authority</mark> <b>(CVA)</b> for variant and size handling</li>
          <li><b>TypeScript</b> for strong prop typing</li>
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">cn</mark> <b>utility</b> for conditional class merging</li>
          <li>Optional support for <b>rendering as a child element</b></li>
        </ul>
      </div>

    <Button variant="primary">Primary</Button>
    <Button className="ml-2 mr-2" variant="outline">Outline</Button>
    <Button className="mt-10" variant="danger">Danger</Button>
    
    </main>
  )
}

export default Page;