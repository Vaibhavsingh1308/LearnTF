import { Avatar, AvatarImage } from "@/components/Avatar";
import React from 'react'

const page = () => {
  return (
    <main className='p-10'>
        <div className="mb-10">
            <h1 className="text-[20px] font-bold mb-2">Avatar Component</h1>
            <p className="text-[15px] mb-4">This component system is a modular and customizable avatar/image display component with support for</p>
            </div>

            <div className="wrapper mb-10">
            <h2 className="text-[20px] font-bold mb-2">Key Features</h2>
            <ul className="list-disc pl-4 text-[15px] text-gray-700 leading-[30px]">
                <li>Shape variants: square (you’ve removed circle from usage)</li>
                <li>Size variants: small, medium, large, xlarge</li>
                <li>Responsive image layout using next/image with fill</li>
                <li>A fallback component when no image is available</li>
            </ul>
        </div>
        <Avatar size="xlarge">
            <AvatarImage src="/images/car.jpg" shape="square" />
        </Avatar>
    </main>
  )
}

export default page