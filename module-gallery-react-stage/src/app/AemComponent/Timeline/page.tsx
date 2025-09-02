import ImageModal from "@/components/ImageModal";
import TimeLineSlider from "@/components/TimeLineSlider";
import Image from "next/image";


export default function TimelineSection() {
    const TimelineItems = [
        {
            image:
                "/images/1907_KeithLAWTONS_02_022.jpg",
            title: "A Real Family Business",
            description: "Frank continues to expand the business, opening more stores across Nova Scotia. His hands-on approach and strong family values help lay the foundation for the company's future success.",
            years: "45473",
        },
        {
            image: "/images/1924_JohnsonMacDonaldwholesaler.jpg",
            title: "Frank Opens More Stores",
            description: "Frank continues to expand the business, opening more stores across Nova Scotia. His hands-on approach and strong family values help lay the foundation for the company's future success.",
            years: "45473",
        },
        {
            image: "/images/1907_KeithLAWTONS_02_022.jpg",
            title: "Modern Superstores",
            description: "Frank continues to expand the business, opening more stores across Nova Scotia. His hands-on approach and strong family values help lay the foundation for the company's future success.",
            years: "45473",
        },
        {
            image: "/images/1907_KeithLAWTONS_02_022.jpg",
            title: "A Real Family Business",
            description: "Frank continues to expand the business, opening more stores across Nova Scotia. His hands-on approach and strong family values help lay the foundation for the company's future success.",
            years: "45473",
        },
        {
            image: "/images/1924_JohnsonMacDonaldwholesaler.jpg",
            title: "Frank Opens More Stores",
            description: "Frank continues to expand the business, opening more stores across Nova Scotia. His hands-on approach and strong family values help lay the foundation for the company's future success.",
            years: "45473",
        },
        {
            image: "/images/1907_KeithLAWTONS_02_022.jpg",
            title: "Modern Superstores",
            description: "Frank continues to expand the business, opening more stores across Nova Scotia. His hands-on approach and strong family values help lay the foundation for the company's future success.",
            years: "45473",
        },
    ];

    return (
        <main className="p-10">
            <div className="flex flex-wrap items-center mb-10">
                <div className="flex-[7] w-full md:w-7/10">
                    {/* Left Column Content */}
                    <div className="mb-10">
                        <h1 className="text-[20px] font-bold mb-2">Timeline Component</h1>
                        <p className="text-[15px] pr-[130px] mb-2">The <b>Timeline Component</b> is designed to visually showcase key milestones, historical highlights, or progress updates over time. Each timeline entry can include text, images, or video content, making it ideal for storytelling in a chronological format.</p>
                        <h2 className='mb-2'><strong>Timeline Entries (Repeatable Section)</strong> Authors can add multiple timeline entries using the Add button. Each entry includes:</h2>
                        
                        <ul className="list-disc mt-8 mb-5 pl-5 text-[15px] text-gray-700 leading-[25px]">
                            <li><b>Year</b> – The date or year associated with the event or milestone</li>
                            <li><b>Title</b> – Heading text for the timeline item</li>
                            <li><b>Description</b> – Rich text field to provide detailed content or background information</li>
                            <li><b>Banner Image</b> – Visual representation of the event (used as a thumbnail or backdrop)</li>
                            <li><b>Banner Image Alt Text</b> – Descriptive alt text for accessibility</li>
                            <li><b>Image/Video Type</b> – Dropdown selector to define whether the media is an Image or a Video, allowing dynamic content flexibility</li>
                        </ul>
                    </div>
                </div>
                <div className="flex-[3] w-full md:w-3/10">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[200px]">
                            {/* Image with cursor pointer */}
                            <Image
                                src="/images/TimelineSlider.png"
                                width={400}
                                height={400}
                                className="w-full h-auto cursor-pointer"
                                alt="Voila"
                            />

                            {/* Zoom Icon Positioned on Top */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                                <ImageModal
                                    imageSrc="/images/TimelineSlider.png"
                                    imageAlt="Sample Modal Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TimeLineSlider slides={TimelineItems} />
        </main>
    );
}
