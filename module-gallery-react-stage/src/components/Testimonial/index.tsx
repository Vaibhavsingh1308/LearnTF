"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const testimonials = [
    {
        name: "Paul Hill",
        role: "President, Hill’s Jamaican Jerk – Halifax, Nova Scotia",
        quote:
            "The Sobeys program to support local businesses has helped my business to grow significantly over the years. I could not have done it without the support of the store owners/managers, grocery managers and all Sobeys staff as a whole. They make me feel like part of the family whenever I enter the stores, it’s a feeling I can only describe as love and respect.",
        image:
            "/images/supplier1.jpg",
    },
    {
        name: "Ashley Ehmann",
        role: "Co-Founder, Twigz Pretzels – Calgary, Alberta",
        quote: "My family and I created Twigz Pretzels two years ago as we wanted a snack that was baked, not fried, and packed with flavour. We knew our pretzels were too good to keep within the family, so we decided to start a business and share them with others. With the help of the local Program, our pretzels were sold in more than 100 locations across Alberta within a year and a half of launching! The Local Program has played a key role in helping our business grow. The support, communications, and willingness to work with our brand to help us learn and expand has been remarkable.",
        image:
            "/images/ashley.jpg",
    },
    {
        name: "Ameen & Surria Fadel",
        role: "Co-Founders, Cedar Valley Selections – Oldcastle, Ontario",
        quote: "I started Cedar Valley Selections at the age of 16 along with the help of my mother, knowing nothing about the retail grocery industry.  Our local Sobeys in Lakeshore, ON, was one of the first to carry our line of Dressings and Pita Chips back in 2018.  Over the years, we were able to grow with Sobeys from one store, to 10, to 100, and now have our products in more than 350 Sobeys across Canada, all while growing from a small 100-sq.-ft. kitchen to a new 5,000-sq.-ft. facility.  Not only has Sobeys been an amazing partner to place our products in their stores, but they've genuinely helped us succeed along the way through their incredible support, advice, and knowledge available to all of their local suppliers.",
        image:
            "/images/Ameen-SurriaFadel.jpg",
    },
];

const Testimonial = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setScrollSnaps(emblaApi.scrollSnapList());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="relative bg-grey100 py-6 xl:py-12">
            <div className="mx-auto px-6 2md:px-12 max-w-[1536px]">
                <h2 className="text-3xl font-bold text-brandBlack mb-6 md:mb-4 lg:mb-8 md:text-center text-left">
                    What our Local Suppliers have to say
                </h2>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((item, index) => (
                            <div
                                className="min-w-full px-2"
                                key={index}
                            >
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-[60px] items-center">
                                    <div className="shrink-0 w-full h-auto lg:w-[586px] lg:h-[380px]">
                                        <Image
                                            alt={item.name}
                                            src={item.image}
                                            width={586}
                                            height={380}
                                            className="w-full h-full object-cover rounded-xl"
                                        />
                                    </div>
                                    <div className="text-body font-normal text-brandBlack space-y-4">
                                        <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                                        <p className="text-sm mb-2 !mt-2">{item.role}</p>
                                        <p>{item.quote}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrows & Dots */}
                <div className="flex flex-col items-center mt-[-40] ml-[60px]">
                    <div className="flex items-center gap-4 mb-4 z-[9999]">
                        <button onClick={scrollPrev} className="w-10 h-10 flex mr-2 items-center justify-center rounded-full border border-brandSecondary text-brandSecondary hover:bg-brandSecondary hover:text-white transition" aria-label="Previous">←</button>
                        <div className="flex gap-2">
                            {scrollSnaps.map((_, index) => (
                                <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`h-4 rounded-full transition-all duration-300 border ${index === selectedIndex
                                            ? "bg-[#003d2a] w-8 border-[#003d2a]"
                                            : "bg-[#dcdcdc] w-4 border-[#dcdcdc]"
                                        }`}
                                    aria-label={`Slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={scrollNext} className="w-10 h-10 flex ml-2 items-center justify-center rounded-full border border-brandSecondary text-brandSecondary hover:bg-brandSecondary hover:text-white transition" aria-label="Next">→</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;