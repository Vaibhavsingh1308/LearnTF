"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlideItem = {
  image: string;
  title: string;
  description: string;
  videoUrl?: string; // Optional video URL
};

type Props = {
  slides: SlideItem[];
};

const VideoSlider: React.FC<Props> = ({ slides }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSlideWidth = () => {
    if (containerWidth < 640) return "100%";
    if (containerWidth < 1024) return "50%";
    return "33.33%";
  };

  return (
    <div ref={containerRef} className="relative w-full mx-auto mb-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} style={{ minWidth: getSlideWidth() }} className="px-2">
              <div className="h-[550px] rounded-lg relative">
                <div className="relative before:content-[''] before:absolute before:rounded-lg before:w-full before:h-auto before:bg-[rgba(0,0,0,0.20)] before:block overflow-hidden">
                  {playingIndex === index && slide.videoUrl ? (
                    <iframe src={`${slide.videoUrl}?autoplay=1`} className="w-full h-[200px] md:h-[550px] rounded-lg" title={slide.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  ) : (
                    <>
                      <Image alt={slide.title} src={slide.image} width={357} height={635} className="w-full rounded-lg h-[calc(100%-10px)] md:min-h-[550px] md:max-h-[606px] object-cover" loading="lazy"
                      />
                      <button
                        onClick={() => setPlayingIndex(index)}
                        className="font-normal transition overflow-hidden z-[1] border text-center cursor-pointer
                          before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-full
                          before:transform before:translate-x-[-120%] before:skew-x-[-35deg] before:origin-[0_0]
                          before:transition-transform before:duration-[1s]
                          before:ease-[cubic-bezier(0.07,0.51,0.12,1)] before:z-[-1]
                          hover:before:translate-x-0 focus:before:translate-x-0
                          before:bg-white text-white border-brandSecondary hover:border-brandSecondary focus:border-brandSecondary
                          hover:bg-brandSecondary focus:bg-brandSecondary
                          hover:text-brandSecondary focus:text-brandSecondary
                          text-base px-4 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 shadow-lg -translate-y-1/2
                          h-12 w-12 rounded-full bg-brandWhite flex items-center justify-center"
                        aria-label="click to play video">
                        <span className="relative text-brandBlack text-[14px]">▶</span>
                      </button>
                    </>
                  )}
                </div>

                <h3 className="font-bold pt-4">{slide.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-10 gap-2">
        <button onClick={scrollPrev} disabled={!canScrollPrev} className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl"><ChevronLeft className="w-5 h-5" /></button>
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center gap-2 mx-4">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-6 bg-gray-800" : "w-3 bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        )}
        <button onClick={scrollNext} disabled={!canScrollNext} className="w-10 h-10 rounded-full bg-white border flex items-center justify-center text-xl"><ChevronRight className="w-5 h-5" /></button>
      </div>
    </div>
  );
};

export default VideoSlider;
