"use client";

import Image from "next/image";

export default function FoodHeroAppPromo() {
  return (
    <section className="bg-grey100 lgs:py-12 py-6">
      <div className="mx-auto px-6 2md:px-12 max-w-[1536px]">
        <div className="row flex items-center">

          {/* Left Text Content */}
          <div className="col-12 col-md-6 flex items-center justify-center md:justify-start">
            <div className="flex flex-col gap-4 xl:gap-5 text-center md:text-left w-full 3xs:max-w-[400px] md:max-w-[500px]">
              <h2 className="text-2xl text-brandBlack font-bold">Get $5 off your first order when you download the FoodHero app.*</h2>
              <div className="text-body text-brandBlack font-normal w-full [&>p]:pb-0 md:[&>p]:pb-5 last:[&>p]:pb-0 [&>p>a]:underline [&>p>a]:text-brandSecondary [&>p>a]:hover:no-underline [&>p>a]:pl-1 [&>p>a]:whitespace-nowrap">
                <p>Plus, receive additional $5 OFF for each<br className="hidden sm:block" />friend you refer.**</p>
                <p>Terms and conditions apply. <a href="#" title="Click here for more details" target="_self" rel="noopener noreferrer">Click here for more details</a>.</p>
              </div>
              <button className="items-center justify-center transition relative overflow-hidden z-[1] border text-center cursor-pointer before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-full before:transform before:translate-x-[-120%] before:skew-x-[-35deg] before:origin-[0_0] before:transition-transform before:duration-[1s] before:ease-[cubic-bezier(0.07,0.51,0.12,1)] before:z-[-1] hover:before:translate-x-0 focus:before:translate-x-0 bg-brandSecondary before:bg-white border-brandSecondary hover:border-brandSecondary focus:border-brandSecondary hover:bg-brandSecondary focus:bg-brandSecondary hover:text-brandSecondary focus:text-brandSecondary text-base px-4 py-2 rounded-full md:hidden block max-w-[200px] h-[40px] mx-auto text-body text-brandWhite font-normal px-[25.5px] rounded-[100px] flex-auto sm:flex-none"
                aria-label="Learn More">Learn More</button>
            </div>
          </div>

          {/* Right App Promo Content */}
          <div className="col-12 col-md-6 flex items-center justify-center min-h-full">
            <div className="relative mx-auto flex justify-center items-center flex-col">
              <Image
                alt="Download the app today."
                src="/images/foodrescue-app-qr.png"
                width={256}
                height={256}
                loading="lazy"
                className="hidden md:block max-w-[115px] lg:max-w-[256px]"
              />
              <p className="text-body text-brandBlack font-normal pt-4 pb-[10px] sm:py-2 px-4 sm:px-0">
                Download the app today.
              </p>
              <div className="flex flex-row gap-3">
                <a target="_blank" aria-label="Apple Store" href="#">
                  <Image
                    alt="Tru app store"
                    src="/images/app-store.png"
                    width={120}
                    height={40}
                    loading="lazy"
                  />
                </a>
                <a target="_blank" aria-label="Google Play Store" href="#">
                  <Image
                    alt="Tru play store"
                    src="/images/google_play_app.png"
                    width={120}
                    height={40}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
