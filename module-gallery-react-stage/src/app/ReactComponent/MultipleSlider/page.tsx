"use client";
import MultipleSlider from '@/components/MultipleSlider/index';

const slidesImg = [
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
  "/images/Mobile-View.jpg",
];

export default function HomePage() {
  return (
    <main className='p-10'>
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">MultipleSlider Component</h1>
        <p className="text-[15px] pr-[130px] mb-2">This updated version of <mark className="ml-2 bg-red-50">CarouselWrapper</mark> is a fully responsive, scrollable image slider with:</p>
        <ul className="list-disc lpl-5 text-[15px] text-gray-700 leading-[30px]">
          <li>Dynamic slide widths based on container size</li>
          <li><mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">next/image</mark> for optimized image loading</li>
          <li>Previous/Next arrow controls</li>
          <li>Dot-based slide indicators</li>
          <li>Optimized image rendering using <mark className="bg-gray-200  p-1 pr-2 pl-2 text-[12px] rounded">next/image</mark></li>
        </ul>
      </div>

      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h4 className="text-xl font-bold mb-4">Desktop</h4>
        <div className="w-full max-w-[1920px] rounded bg-white">
          <MultipleSlider slides={slidesImg} />
        </div>

        {/* iPad View */}
        <h4 className="text-xl font-bold mt-10 mb-4">iPad</h4>
        <div className="w-full max-w-[768px] rounded mt-5 mb-5 bg-white">
          <MultipleSlider slides={slidesImg} />
        </div>

        {/* Mobile View */}
        <h4 className="text-xl font-bold mt-10 mb-4">Mobile</h4>
        <div className="w-full sm:max-w-[480px]">
          <MultipleSlider slides={slidesImg} />
        </div>
      </div>
    </main>
  );
}
