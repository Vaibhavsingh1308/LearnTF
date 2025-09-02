"use client";

import ImageModal from "@/components/ImageModal";
import VideoSlider from "@/components/VideoSlider";
import Image from "next/image";

const SlideData = [
    {
        image: "/images/refresh-your-bread.jpg",
        title: "Refresh your bread",
        description: "Make day-old bread taste freshly baked.",
        videoUrl: "https://www.youtube.com/embed/pOkAQMeaI9M",
    },
    {
        image: "/images/brown-sugar-clumps.jpg",
        title: "Turn turkey into a cozy pot pie",
        description: "Don’t toss leftovers – repurpose them into something cozy and delicious.",
        videoUrl: "https://www.youtube.com/embed/pOkAQMeaI9M",
    },
    {
        image: "/images/save-the-brine.jpg",
        title: "Save the brine!",
        description: "Use it to marinate meat or spice up soups.",
        videoUrl: "https://www.youtube.com/embed/pOkAQMeaI9M"
    },
    {
        image: "/images/brown-sugar-clumps.jpg",
        title: "Turn turkey into a cozy pot pie",
        description: "Don’t toss leftovers – repurpose them into something cozy and delicious.",
        videoUrl: "https://www.youtube.com/embed/pOkAQMeaI9M",
    },
    {
        image: "/images/save-the-brine.jpg",
        title: "Save the brine!",
        description: "Use it to marinate meat or spice up soups.",
        videoUrl: "https://www.youtube.com/embed/pOkAQMeaI9M",
    }
]

export default function HomePage() {
    return (
        <main className="p-10">
            <div className="flex flex-wrap items-top mb-20">
                <div className="w-full md:w-1/2">
                    {/* Left Column Content */}
                    <div className="mb-5">
                        <h1 className="text-[20px] font-bold mb-2">Video </h1>
                        <p className="text-[15px] mb-4">The <b>Video Slider Component</b> allows authors to display a collection of videos in a horizontal, scrollable slider format. Each slide features a thumbnail image with supporting text and links to video content hosted on platforms such as <b>YouTube</b> or <b>Vimeo</b>. This component is ideal for showcasing campaigns, educational content, or featured stories in an engaging and user-friendly layout.</p>
                    </div>

                    <div className="wrapper mb-7">
                        <h2 className="text-[20px] font-bold mb-2"><b>Component Configuration Options</b> Content Section</h2>
                        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                            <li><b>Heading Text</b> – Main title for the slider section</li>
                            <li><b>Description</b> – Rich text field to add supporting content or context above the video list</li>
                        </ul>
                    </div>
                    <div className="wrapper mb-7">
                        <h2><b>Video List Section (Repeatable)</b> Authors can add multiple videos using the Add button. Each video entry includes:</h2>
                        <ul className="list-disc mt-2 pl-5 text-[15px] text-gray-700 leading-[25px]">
                            <li><b>Label</b> – Title or short description of the video</li>
                            <li><b>Image</b> – Thumbnail image representing the video</li>
                            <li><b>Image Alt Text</b> – Descriptive text for accessibility and screen readers</li>
                            <li><b>Video</b> – URL of the video (YouTube or Vimeo)</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[200px]">
                            {/* Image with cursor pointer */}
                            <Image
                                src="/images/VideoSlider.png"
                                width={400}
                                height={400}
                                className="w-full h-auto cursor-pointer"
                                alt="Voila"
                            />
                            {/* Zoom Icon Positioned on Top */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                                <ImageModal
                                    imageSrc="/images/VideoSlider.png"
                                    imageAlt="Sample Modal Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-10 pt-20 px-10 bg-[#F4F4F4]">
                <h2 className="text-3xl font-bold mb-6 text-center">Rescue every scrap of food.</h2>
                <VideoSlider slides={SlideData} />
            </div>
        </main>
    );
}
