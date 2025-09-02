import ImageModal from "@/components/ImageModal";
import TabSide from "@/components/TabSide";
import Image from "next/image";


export default function TimelineSection() {

    return (
        <main className="p-10">
            <div className="flex flex-wrap items-center mb-10">
                <div className="flex-[7] w-full md:w-7/10">
                    {/* Left Column Content */}
                    <div className="mb-10">
                        <h1 className="text-[20px] font-bold mb-2">Tabs Component</h1>
                        <p className="text-[15px] pr-[130px] mb-2">The <b>Tab component</b> is a responsive, interactive tab interface designed to display regional award winners based on the selected Canadian province. It allows users to switch between provinces and view specific local supply partner winners associated with each region.</p>
                    </div>
                </div>
                <div className="flex-[3] w-full md:w-3/10">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[200px]">
                            {/* Image with cursor pointer */}
                            <Image
                                src="/images/Tabside.png"
                                width={400}
                                height={400}
                                className="w-full h-auto cursor-pointer"
                                alt="Tab side"
                            />

                            {/* Zoom Icon Positioned on Top */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                                <ImageModal
                                    imageSrc="/images/Tabside.png"
                                    imageAlt="Tab side"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <TabSide />
        </main>
    );
}
