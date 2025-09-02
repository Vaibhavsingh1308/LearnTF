import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function UtilityBar() {
  return (
    <div className="flex justify-start">
      <div className="hidden lg:block">
        <ul className="text-white flex items-center justify-between gap-[32px] text-sm">
          <li>
            <Link href="#" className="text-[14px] font-normal leading-normal hover:underline">Flyer</Link>
          </li>
          <li>
            <Link href="#" className="text-[14px] font-normal leading-normal  hover:underline">Scene+</Link>
          </li>
          <li>
            <Link href="#">
              <Image
                src={"/shop-delivery-Voila.svg"}
                width={214}
                height={40}
                alt="Voila"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="user-account-invoice flex items-center flex-col md:flex-row justify-center text-center pt-[8px] lg:hidden">
        <span className="user-invoice-icon relative inline-block">
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5308 1.5L19.5308 22.5L1.8981 22.5L1.8981 1.5L19.5308 1.5ZM1.8981 0L0.428711 0L0.428711 1.5L0.428711 22.5L0.428711 24H1.8981L19.5308 24H21.0001V22.5L21.0001 1.5V0L19.5308 0L1.8981 0ZM7.77565 5.25V6.75H8.51034L16.592 6.75H17.3267L17.3267 5.25H16.592L8.51034 5.25H7.77565ZM9.97973 11.25V12.75H10.7144L16.592 12.75H17.3267V11.25H16.592L10.7144 11.25H9.97973ZM7.77565 17.25L7.77565 18.75H8.51034H16.592L17.3267 18.75V17.25L16.592 17.25H8.51034H7.77565ZM5.93892 4.875L3.73483 4.875L3.73483 7.125L5.93892 7.125L5.93892 4.875ZM3.73483 16.875L3.73483 19.125L5.93892 19.125L5.93892 16.875L3.73483 16.875ZM7.92718 11.4047L8.44606 10.875L7.4083 9.81562L6.88943 10.3453L5.20422 12.0656L4.62106 11.4703L4.10218 10.9406L3.06443 12L3.5833 12.5297L4.68534 13.6547L5.20422 14.1844L5.7231 13.6547L7.92718 11.4047Z" fill="white" />
          </svg>
          <span className="invoice-items-count inline-flex items-center justify-center absolute top-[-8px] right-[-10px] text-white border-[2px] border-[#F00] text-[12px] font-[700] leading-normal text-center h-[21px] w-[21px] bg-[#F00] opacity-1 rounded-full pt-[1px]">16</span>
        </span>
        <span className="user-invoice-amount inline-block text-white text-[12px] font-[700] leading-normal mt-[4px] md:mt-[0] md:ml-[10px]">$59.78</span>
      </div>
    </div>
  );
}
