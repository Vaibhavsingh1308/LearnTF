'use client';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[200px] sm:h-[400px] md:h-[300px] lg:h-[400px] xl:h-[400px]">
        <Image
          src="/images/adobe_experience_manager_banner.jpg"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="max-w-[1100px] mx-auto mt-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Explore a collection of - AEM components.</h1>
        <p className="text-based">Explore a comprehensive collection of reusable UI elements and layout components designed to accelerate your web development workflow. From basic form controls like Checkbox, Input, and Select, to advanced features like Tabs, Carousel, and Mega Menu, our library offers everything you need to build responsive, accessible, and beautiful user interfaces with ease.</p>
      </div>
    </>
  );
}
