import ImageModal from "@/components/ImageModal";
import RicardoBanner from "@/components/RicardoBanner";
import Image from "next/image";

export default function ContactUsPage() {
    return (
        <div className="p-10  max-w-[1920px]">
            <div className="flex flex-wrap items-center mb-20">
                <div className="w-full md:w-1/2">
                    <div className="mb-5">
                        <h1 className='text-black text-[20px] font-extrabold leading-normal common-sec-title'>RicarDo Banner Component</h1>
                        <p className="text-[15px] mt-3">The <b>Ricardo Banner</b> component is a responsive hero banner section designed using Tailwind CSS and Next.js, ideal for promoting featured product lines or campaigns.</p>
                        <p className="text-[15px] mt-3">This particular component highlights a Gourmet Meal Solutions campaign ("Introducing Ricardo") and adapts gracefully across devices. It includes:</p>
                    </div>
                    <div className="wrapper mb-7">
                        <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-[25px]">
                            <li>A full-width <b>background image</b> that adjusts based on screen size: one for <b>mobile</b> view and one for <b>desktop</b>.</li>
                            <li>A prominent <b>headline ("Introducing")</b>, styled in bold white text.</li>
                            <li>A <b>Ricardo logo</b> placed within a bordered container to give visual emphasis.</li>
                            <li>A short, centered <b>tagline</b>: “Gourmet meal solutions made simple”.</li>
                            <li>Layout logic ensures the text content sits to the <b>left on larger screens</b> and adjusts naturally for smaller screens, with the image stacking above or behind based on device width.</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className="flex items-center justify-center">
                        <div className="relative w-[200px]">
                            {/* Image with cursor pointer */}
                            <Image
                                src="/images/RicardoBanner.png"
                                width={400}
                                height={400}
                                className="w-full h-auto cursor-pointer"
                                alt="Ricardo Banner"
                            />
                            {/* Zoom Icon Positioned on Top */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center h-auto w-full">
                                <ImageModal
                                    imageSrc="/images/RicardoBanner.png"
                                    imageAlt="Ricardo Banner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RicardoBanner />
        </div>
    );
}