"use client";
import CarouselWrapper from "@/components/Carousel/Index";


const slidesImg = [
  "/images/1920Slide.jpg",
  "/images/1920Slide.jpg",
  "/images/1920Slide.jpg",
  "/images/1920Slide.jpg",
];

const IpadImg = [
  "/images/Ipads830.jpg",
  "/images/Ipads830.jpg",
  "/images/Ipads830.jpg",
  "/images/Ipads830.jpg",
];
const MobileImg = [
  "/images/Mobile375.jpg",
  "/images/Mobile375.jpg",
  "/images/Mobile375.jpg",
  "/images/Mobile375.jpg",
];



export default function SliderPage() {
  return (
    <main className="p-10">
      <div className="mb-10">
        <h1 className="text-[20px] font-bold mb-2">Slider Component</h1>
        <p className="text-[15px] pr-[130px] mb-2">A Slider component that displays multiple images or content panels with swipe and arrow and bullets support to react direct any of the slide insted of doing doing from arrow next prev. also accessibile from Keyboard navigable for accessibility purpose. The component is also keyboard-navigable to support accessibility requirements.</p>
      </div>

      <div className="flex-wrap gap-6 mt-10">
        {/* Desktop View */}
        <h4 className="text-xl font-bold mb-2">Desktop</h4>
        <p className="text-[15px] mb-4"> <strong>Image Dimension:</strong> 1920 x 350</p>
        <div className="w-full rounded">
          <CarouselWrapper slides={slidesImg} />
        </div>  

        {/* iPad View */}
        <h4 className="text-xl font-bold mt-10 mb-2">iPad</h4>
        <p className="text-[15px] mb-4"> <strong>Image Dimension:</strong> 834 x 250</p>
        <div className="w-full max-w-[768px] rounded">
          <CarouselWrapper slides={IpadImg} height="h-[250px]"/>
        </div>

        {/* Mobile View */}
        <h4 className="text-xl font-bold mt-10 mb-2">Mobile</h4>
        <p className="text-[15px] mb-4"> <strong>Image Dimension:</strong> 375 x 200</p>
        <div className="w-full max-w-[375px] rounded">
          <CarouselWrapper slides={MobileImg} height="h-[200px]"/>
        </div>
      </div>
    </main>
  );
}
