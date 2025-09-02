"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogHeader, DialogBody } from "@/components/Dialog";
import ImageMagnifier from "../ImageMagnifier";


type Props = {
  slides: string[]; // Array of image URLs
  height?: string;
  showThumbnails?: boolean;
  thumbnailSize?: string;
};

const CarouselWrapper: React.FC<Props> = ({ 
  slides, 
  height,
  showThumbnails,
  thumbnailSize = "h-16 w-16"
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: "x",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    if (showThumbnails && thumbsApi) {
      thumbsApi.scrollTo(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi, thumbsApi, showThumbnails]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !thumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, thumbsApi]
  );

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div className="w-full max-w-[1440px] relative">
      <div className="w-full relative">
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
                    priority={index === 0} />
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

      </div>
      {/* Thumbnails */}
      {showThumbnails && (
        <div className="mt-4">
          <button onClick={() => setIsDialogOpen(true)} className="absolute bottom-[90px] right-[10px]  z-10" aria-label="Expand Icon">
            <Image src="/expand-icon.svg" width="40" height="40" alt="expand icon" />
          </button>
          <div className="overflow-hidden" ref={thumbsRef}>
            <div className="flex gap-2">
              {slides.map((img, index) => (
                <button key={index} onClick={() => onThumbClick(index)} className={`flex-shrink-0 ${thumbnailSize} relative rounded-md overflow-hidden transition-all duration-300 ${index === selectedIndex
                      ? "ring-2 ring-blue-500 ring-offset-2 opacity-100"
                      : "opacity-60 hover:opacity-80"}`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index}`}
                    fill
                    className="object-cover"
                    sizes="80px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dots */}
      {!showThumbnails && (
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, index) => (
            <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 bg-gray-800" : "w-3 bg-gray-300"}`}></button>
          ))}
        </div>
      )}
    <Dialog className="max-w-[800px] h-[800px] flex" isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} closeOnOverlayClick={true}>
        <DialogHeader className="-mt-4 justify-end">
          <button onClick={() => setIsDialogOpen(false)} className="text-[#191919] absolute right-5 top-[15px] z-[99]">✕</button>
        </DialogHeader>
        <DialogBody className="h-full w-full flex">
          
        <ImageMagnifier
        images={slides}
        thumbnailSize={140}
        zoomLevel={2.5}
        selectedIndex={0}
      />

        </DialogBody>
      </Dialog>
    </div>
  );
};

export default CarouselWrapper;