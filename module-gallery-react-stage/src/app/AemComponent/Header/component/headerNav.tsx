import Link from "next/link";
import React from "react";
import Image from "next/image";
import { topMenuData } from "../../../../utils/menuData";

export default function HeaderNav() {
  return (
    <div>
      <div className="top-navigation hidden lg:block">
        <div className="outer">
          <ul className="flex primary nav navbar-nav nav-fill text-black flex-nowrap flex-row flex-auto gap-[4px] xl:gap-[32px] text-base [&>li>a:hover]:text-[#003D2A]">
            
            {topMenuData.map((item, index) => (
            <li className="flex-auto" key={index}>
              <Link href="#" className="flex items-center text-[16px] md:text-[14px] xl:text-[16px] font-normal leading-normal py-[8px]">
                {item.title}
                <span className="text-xs text-white drop-menu">
                  <Image
                    src={"/arrow_drop_menu.svg"}
                    width={20}
                    height={20}
                    className="mx-auto w-[20px]"
                    alt="Voila"
                  />
                </span>
              </Link>
            </li>
            )) }
          </ul>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center">
          <div className="pr-[4px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_8833_18008" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_8833_18008)">
                <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="black" />
              </g>
            </svg>
          </div>
          <div className="flex items-center justify-start gap-[4px]">
            <Link className="font-bold text-[14px] leading-normal text-black underline " href="#">
              <span className="location-name underline text-ellipsis">1500 rue Atwater</span>
            </Link>
            <span className="text-black text-[14px] font-[400] leading-normal day-time flex items-center">Open
              <span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_8833_18015" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_8833_18015)">
                    <path d="M9.99992 12.5002L5.83325 8.3335H14.1666L9.99992 12.5002Z" fill="black" />
                  </g>
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
