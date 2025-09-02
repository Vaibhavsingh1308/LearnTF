import Image from "next/image";
import Link from "next/link";

export default function GetAppCard() {
    return (
        <main>
            <div className="xl:flex col-span-1 relative bg-primary200 rounded-xl md:col-span-3 lg:col-span-1 md:mt-6 lg:mt-0 w-[500px] h-[430px]">
                {/* Block for smaller than 2xl */}
                <div className="contentouter p-4 pb-[118px] md:px-6 md:pb-8 lg:p-8 lg:pe-[72px] 2xl:hidden block">
                    <Link href="/">
                        <h3 className="text-brandBlack text-2xl font-extrabold leading-normal mb-2 lg:mb-4 font-sans">
                            Get the Sobeys app
                        </h3>
                        <p className="text-brandBlack text-body font-normal leading-normal mb-4 md:mb-2 lg:mb-6 max-w-[330px]">
                            Shop smarter with the Sobeys app! Find deals, browse recipes, and create shopping lists with ease - all in one place.
                        </p>
                    </Link>

                    {/* App Store Links */}
                    <div className="flex flex-col gap-2">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/apple-store.png"
                                alt="Apple Store"
                                width={107}
                                height={34}
                                className=""
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/google_play_app.png"
                                alt="Google Play Store"
                                width={107}
                                height={34}
                                className="mb-2"
                            />
                        </a>
                    </div>

                    {/* Mobile Image */}
                    <Link
                        href="/"
                        className="mobile-screen-image absolute bottom-0 right-[10px] 3xs:right-[20px]"
                    >
                        <Image
                            src="/images/explore_a-world-of_flavour.svg"
                            alt="Explore a world of flavour"
                            width={215}
                            height={270}
                            className="w-[160px] lg:w-[140px] xl:w-[200px] 2xl:w-[215px]"
                        />
                    </Link>
                </div>

                {/* Block for 2xl and up */}
                <div className="contentouter p-4 pb-[118px] md:px-6 md:pb-8 lg:p-8 lg:pe-[72px] hidden 2xl:flex 2xl:flex-col">
                    <Link href="/">
                        <h3 className="text-brandBlack text-2xl font-extrabold leading-normal mb-2 lg:mb-4 font-sans">
                            Get the Sobeys app
                        </h3>
                        <p className="text-brandBlack text-body font-normal leading-normal mb-4 md:mb-2 lg:mb-6 max-w-[330px]">
                            Shop smarter with the Sobeys app! Find deals, browse recipes, and create shopping lists with ease - all in one place.
                        </p>
                    </Link>

                    {/* App Store Links */}
                    <div className="flex flex-col">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/apple-store.png"
                                alt="Apple Store"
                                width={107}
                                height={34}
                                className="mb-2"
                            />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/google_play_app.png"
                                alt="Google Play Store"
                                width={107}
                                height={34}
                                className="mb-2"
                            />
                        </a>
                    </div>

                    {/* Mobile Image */}
                    <Link
                        href="/"
                        className="mobile-screen-image absolute bottom-0 right-[10px] 3xs:right-[20px]"
                    >
                        <Image
                            src="/images/explore_a-world-of_flavour.svg"
                            alt="Explore a world of flavour"
                            width={215}
                            height={270}
                            className="w-[160px] lg:w-[140px] xl:w-[200px] 2xl:w-[215px]"
                        />
                    </Link>
                </div>
            </div>
        </main>
    );
}
