"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: You can replace with any icons

type Props = {
  slides: string[]; // Array of image URLs
  height?: string;
};

const BannerSlider: React.FC<Props> = ({ slides, height }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-[1440px] relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className={`relative w-full overflow-hidden ${height ?? "h-[350px]"}`}>
                <Image
                  src={img}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 100%) 100vw, 100vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button onClick={scrollPrev} className="absolute top-1/2 left-3 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10" aria-label="Previous Slide">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={scrollNext} className="absolute top-1/2 right-3 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10" aria-label="Next Slide">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 bg-gray-800" : "w-3 bg-gray-300"}`}></button>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
