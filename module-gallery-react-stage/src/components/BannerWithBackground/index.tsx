"use client";

import Image from "next/image";

export default function SobeysTimeline() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="mx-auto px-6 2md:px-12 max-w-[1536px] relative z-[1]">
                <div className="py-[60px] md:py-[71px] lgs:py-[101px]">
                    <div className="flex flex-col sm:flex-row md:flex-row xl:flex-row justify-between gap-[70px] relative contentclass:gap-4 contentclass:px-3 contentclass:pt-6 contentclass:pb-20 md:pt-12 md:pb-28 lg:py-4">
                        {/* Text Section */}
                        <div className="xl:w-[calc(100%-476px)] w-[calc(100%-110px)] 3xs:w-[calc(100%-100px)] md:w-full 2md:w-[calc(100%-170px)] flex flex-col items-start justify-center">
                            <h2 className="font-sans text-3xl xxss:text-xl 4xs:text-xl 3xs:text-xl 2xs:text-xl xs:text-2xl sm:text-3xl md:text-4xl 2md:text-5xl font-bold text-brandWhite pb-0 leading-[60px]">What is Lorem Ipsum?</h2>
                            <p className="xl:text-base text-body text-brandWhite w-full mt-2 2lg:mt-4 text-left font-normal max-w-[812px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        {/* Image Section */}
                        <div className="flex flex-col justify-center items-end sm:pr-4">
                            <Image alt="canada flag Tru" src="/images/canada150.png" width={100} height={128} loading="lazy" className="xl:relative absolute 3xs:right-[14px] sm:right-[-3px] lg:right-[-25px] bottom-0 md:w-[100px] w-[75px]"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background Image */}
            <div className="absolute top-0 right-0 w-full h-full">
                <Image alt="Section Global Reach Background" src="/images/timeline-banner.png" fill loading="lazy" className="object-cover"/>
            </div>
        </div>
    );
}