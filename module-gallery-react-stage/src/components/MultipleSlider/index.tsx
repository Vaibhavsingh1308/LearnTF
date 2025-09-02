"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  slides: string[];
};

const MultipleSlider: React.FC<Props> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

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
    if (containerWidth < 1024) return "33.33%"; // iPad: 3 slides
    return "25%"; // Desktop: 4 slides
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:max-w-[1920px] md:max-w-[992px] sm:max-w-[767px] mx-auto"
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{ minWidth: getSlideWidth() }}
              className="px-2"
            >
              <div className="bg-white rounded-2xl shadow border border-gray-200 overflow-hidden relative w-full h-[250px]">
                <Image
                  src={slide}
                  alt={`Slide ${index}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center  items-center mt-4 gap-2">
        <div className="flex justify-center gap-2">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl mr-5"
          >
            <ChevronLeft className="w-5 h-5"/>
          </button>

          <div className="flex justify-center items-center gap-2 ">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() =>console.log(
                 emblaApi?.scrollTo(index),index)
                }
                className={`h-3 rounded-full transition-all duration-300  ${
                  index === selectedIndex
                    ? "w-6 bg-gray-800"
                    : "w-3 bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl ml-5"
          >
            <ChevronRight className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultipleSlider;
