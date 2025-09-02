import Contests from "@/components/Contests";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";


export default function ContestSection() {

    return (
        <main className="p-10">
            <div className="flex flex-wrap items-center mb-10">
                <div className="flex-[7] w-full md:w-7/10">
                    {/* Left Column Content */}
                    <div className="mb-5">
                        <h1 className="text-[20px] font-bold mb-2">Contest Component</h1>
                        <p className="text-[15px] pr-[130px] mb-2">The <b>Contest component</b> is a responsive card-based grid layout built using Next.js and Tailwind CSS, designed to showcase a series of promotional contests or campaigns. Each contest is displayed as an interactive card featuring:</p>
                    </div>
                    
                    <ul className="list-disc mt-2 pl-4 text-[15px] text-gray-700 leading-[25px]">
                    <li>A <strong>featured image</strong>: with hover zoom animation</li>
                    <li>A <b>date range badge</b> styled like a calendar</li>
                    <li>A <b>status label</b> (e.g., "Open" or "Closed")</li>
                    <li>A <b>title</b> of the contest</li>
                    <li>A <b>Call-to-Action</b> (CTA) button: “View Detail”</li>
                    <li>If the contest is closed, the button is <b>disabled</b> and styled accordingly</li>
                    </ul>
                </div>
                <div className="flex-[3] w-full md:w-3/10">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[200px]">
                            {/* Image with cursor pointer */}
                            <Image
                                src="/images/Contest.png"
                                width={400}
                                height={400}
                                className="w-full h-auto cursor-pointer"
                                alt="Contest"
                            />

                            {/* Zoom Icon Positioned on Top */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                                <ImageModal
                                    imageSrc="/images/Contest.png"
                                    imageAlt="Contest"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contests />
        </main>
    );
}
