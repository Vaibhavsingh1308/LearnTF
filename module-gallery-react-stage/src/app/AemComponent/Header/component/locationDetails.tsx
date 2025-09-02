import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LocationAdress() {
  return (
    <div>
      <div className="items-center pl-[23px] max-w-[230px] border-l border-white hidden lg:block">
        <div className="flex">
          <div className="mt-[1px] px-[2px]">
            <Image
              src={"/location_on.svg"}
              width={16}
              height={20}
              className="float-left mx-auto w-4"
              alt="Voila"
            />
          </div>
          <div className="pl-[8px] flex flex-col items-start justify-start">
            <Link className="font-bold text-[14px] leading-normal text-white" href="#">
              <span className="location-name underline">1500 rue Atwater</span>
            </Link>
            <span className="text-white text-[12px] font-normal leading-normal pt-0 day-time flex">Open today, 10AM - 9PM
              <span className="h-[12px] w-[12px] inline-flex items-center justify-center ml-[8px] p-0 mt-[2px]">
                <Image
                  src={"/arrow_drop_down.svg"}
                  width={9}
                  height={5}
                  className="inline-block mx-auto w-4"
                  alt="Voila"
                />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
