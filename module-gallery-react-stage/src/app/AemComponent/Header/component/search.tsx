import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
export default function Search() {


  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

  }, []);

  if (!isHydrated) {
    return null;
  }

  const placeholderText = isMobile ? "Search Sobeys" : "Search for groceries, recipes and more";


  return (
    <div className="md:pr-[24px] md:pl-[34px] px-[16px] flex-1 md:hidden lg:block">
      <form className="flex items-center rounded-[4px] border border-[#C4C4C4] w-full max-w-[708px] bg-white">
        <input className="search-input px-[16px] py-[7px] w-full placeholder:text-[#313131] text-base leading-normal mr-[4px] text-ellipsis bg-white" type="search" name="search bar" id="headerSearch_s" placeholder={placeholderText} />
        <button type="submit" className="min-w-[40px] h-[38px]">
          <Image
            src={"/search-icon.svg"}
            width={24}
            height={24}
            className="mx-auto w-[24px]"
            alt="Voila"
          />
        </button>
      </form>
    </div>
  );
}