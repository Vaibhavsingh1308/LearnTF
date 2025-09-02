import React from "react";
import Image from "next/image";

export default function AccountPop() {
  return (
    <div className="header-nav-user flex items-center gap-[16px] ml-auto">
      <div className="user-account-details flex items-center gap-[8px]">
        {/* <span className="user-account-brand inline-block"><Image  src={"/home/account-frame.svg"} width={24} height={24} className="max-w-full w-auto mobScene" alt="Scene plus" /></span>
        <span tabIndex={0} className="user-invoice-amount inline-block text-black text-[14px] font-bold leading-normal ml-[0px] px-[4px]">2,885 pts</span> */}
        <span  tabIndex={0} className="user-account-name inline-flex items-center justify-center text-white text-[14px] font-bold leading-normal text-center h-[40px] w-[115px] bg-[#003D2A] rounded-full"><Image src={"/userIcon.svg"} width={24} height={24} className="" alt="User invoice" /> Account</span> 
      </div>
      <div className="user-account-invoice items-center hidden lg:flex">
        <span className="user-invoice-icon relative inline-block">
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5308 1.5L19.5308 22.5L1.8981 22.5L1.8981 1.5L19.5308 1.5ZM1.8981 0L0.428711 0L0.428711 1.5L0.428711 22.5L0.428711 24H1.8981L19.5308 24H21.0001V22.5L21.0001 1.5V0L19.5308 0L1.8981 0ZM7.77565 5.25V6.75H8.51034L16.592 6.75H17.3267L17.3267 5.25H16.592L8.51034 5.25H7.77565ZM9.97973 11.25V12.75H10.7144L16.592 12.75H17.3267V11.25H16.592L10.7144 11.25H9.97973ZM7.77565 17.25L7.77565 18.75H8.51034H16.592L17.3267 18.75V17.25L16.592 17.25H8.51034H7.77565ZM5.93892 4.875L3.73483 4.875L3.73483 7.125L5.93892 7.125L5.93892 4.875ZM3.73483 16.875L3.73483 19.125L5.93892 19.125L5.93892 16.875L3.73483 16.875ZM7.92718 11.4047L8.44606 10.875L7.4083 9.81562L6.88943 10.3453L5.20422 12.0656L4.62106 11.4703L4.10218 10.9406L3.06443 12L3.5833 12.5297L4.68534 13.6547L5.20422 14.1844L5.7231 13.6547L7.92718 11.4047Z" fill="black" />
          </svg>
          <span tabIndex={0} className="invoice-items-count inline-flex items-center justify-center absolute top-[-8px] right-[-10px] text-black border-[2px] border-[#fff] text-[12px] font-bold leading-normal text-center h-[22px] w-[22px] bg-[#8BB94D] opacity-1 rounded-full pt-[1px]">0</span>
        </span>
        {/* <span  tabIndex={0} className="user-invoice-amount inline-block text-black text-[14px] font-bold leading-normal ml-[10px]">$0.00</span> */}
        {/* <span className="text-xs text-white drop-menu">
                  <Image
                    src={"/arrow_drop_menu.svg"}
                    width={20}
                    height={20}
                    className="mx-auto w-[20px]"
                    alt="Voila"
                  />
                </span> */}
      </div>
    </div>
  );
}
