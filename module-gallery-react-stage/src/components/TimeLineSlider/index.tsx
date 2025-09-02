"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideItem = {
  image: string;
  title: string;
  description: string;
  years: string;
};

type Props = {
  slides: SlideItem[];
};

const TimeLineSlider: React.FC<Props> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setContainerWidth] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps", // key for peek effect
    inViewThreshold: 0.5,
    slidesToScroll: 1,
  });

  const [, setScrollSnaps] = useState<number[]>([]);
  const [, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:max-w-[1920px] md:max-w-[992px] sm:max-w-[767px] mx-auto"
    >
      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="shrink-0 grow-0 basis-[80%] sm:basis-[50%] md:basis-[33.33%] lg:basis-[33%] px-2 h-full">
              <div>
                <div className="bg-brandWhite shadow-md overflow-hidden relative cursor-pointer h-full border border-grey300 rounded-[12px]">
                  <div className="relative min-h-[180px] overflow-hidden pt-[56.35%]">
                    <Image src={slide.image}
                      alt={slide.title}
                      fill
                      className="absolute top-0 left-0 object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-4 border-none flex flex-col gap-4 pb-2 min-h-[220px] px-5 py-6">
                    <h2 className="text-base font-bold">{slide.title}</h2>
                    <p className="text-[14px] text-grey900 font-normal pb-4">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <p className="font-bold mt-[50px] text-center z-[-1] bg-white w-max mx-auto px-[40px] text-2xl text-[#374151]">
                  {slide.years}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div
        className="flex justify-center items-center mt-[-41px] gap-10 relative
          before:content-[''] 
          before:absolute 
          before:bottom-[17px] 
          before:left-0 
          before:w-full 
          before:border-b 
          before:border-[#ddd] 
          before:z-[-111]"
      >
        <div className="flex justify-center gap-40 z-[9999]">
          <button onClick={scrollPrev} disabled={!canScrollPrev} className="w-10 h-10 mr-20 rounded-full bg-white border flex items-center justify-center text-xl greenDotw-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl relative greenDot 
          before:content-[''] 
          before:w-[20px] 
          before:h-[20px] 
          before:bg-[#35a131] 
          before:absolute 
          before:z-[99] 
          before:bottom-[6px] 
          before:left-[85px] 
          before:rounded-[4px]">
          <ChevronLeft className="w-5 h-5" /></button>
          <button onClick={scrollNext} disabled={!canScrollNext} className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl"><ChevronRight className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSlider;
