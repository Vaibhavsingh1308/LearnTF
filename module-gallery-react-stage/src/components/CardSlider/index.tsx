"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "../Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideItem = {
  image: string;
  title: string;
  description: string;
  buttonLabel: string;
};

type Props = {
  slides: SlideItem[];
};

const CardSlider: React.FC<Props> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    handleResize(); // initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideWidth = () => {
    if (containerWidth < 640) return "100%"; // Mobile: 1 slide
    if (containerWidth < 1400) return "33.33%"; // Tablet: 3 slides
    return "25%"; // Desktop: 4 slides
  };

  return (
<div ref={containerRef} className="relative w-full lg:max-w-[1920px] md:max-w-[1240px] sm:max-w-[1240px] mb-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} style={{ minWidth: getSlideWidth() }} className="px-2">
              <div className="bg-white rounded-t-2xl shadow border border-gray-200 overflow-hidden relative w-full h-[250px]">
                <Image src={slide.image} alt={slide.title} fill className="object-cover" sizes="" priority={index === 0}/>
              </div>
              <div className="border p-5 pt-2 rounded-b-2xl">
                <h2 className="text-lg font-semibold mt-2">{slide.title}</h2>
                <p className="text-sm text-gray-600 my-2">{slide.description}</p>
                <Button className="mt-2 px-8 py-2 bg-brandSecondary text-white rounded-full hover:bg-opacity-80 transition">
                  {slide.buttonLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-4 gap-2">
        <div className="flex justify-center gap-2">
          <button onClick={scrollPrev} disabled={!canScrollPrev} className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl"><ChevronLeft className="w-5 h-5" /></button>
        </div>
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center gap-2 mr-5 ml-5">
            {scrollSnaps.map((_, index) => (
              <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 bg-gray-800" : "w-3 bg-gray-300"}`}></button>
            ))}
          </div>
        )}
        <button onClick={scrollNext} disabled={!canScrollNext} className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </div>
  );
};

export default CardSlider;
