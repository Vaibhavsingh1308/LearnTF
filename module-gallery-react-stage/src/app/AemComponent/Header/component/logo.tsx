import Link from "next/link";
import Image from "next/image";
import React from "react";
import HeaderDrawer from "./headerDrawer";

export default function Logo() {
  return (
    <div className="flex lg:block items-center gap-[16px]">
      <div className="nav-toggle-bar lg:hidden">
        <div className="nav-toggle-icon h-[32px] w-[32px] flex items-center justify-center cursor-pointer">
          {/* <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.666748 15.5129V13.5129H23.3334V15.5129H0.666748ZM0.666748 9.00007V7.00014H23.3334V9.00007H0.666748ZM0.666748 2.48727V0.487305H23.3334V2.48727H0.666748Z" fill="white" />
          </svg> */}
          <HeaderDrawer/>
        </div>
      </div>
      <div className="flex-none mr-[24px] md:w-auto md:block hidden">
        <Link href="/">
          <Image
            src="/images/tru-logo.svg"
            width={62}
            height={28}
            className="mx-auto"
            alt="Tru Logo"
          />
        </Link>
      </div>
    </div>
  );
}