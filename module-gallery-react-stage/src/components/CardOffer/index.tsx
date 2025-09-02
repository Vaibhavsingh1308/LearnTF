import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="flex flex-row gap-[24px] mb-[20px]">
      <div className="card offersinner max-w-[220px] w-full rounded-[12px] border">
        {/* Top Bar */}
        <div className="offerstop bg-[#000] flex flex-row items-center justify-center gap-[8px] rounded-t-[12px] min-h-[32px]">
          <Image src="/images/scene_icon.svg" width={16} height={16} alt="scene plus icon"/>
          <span className="count text-white font-bold text-[14px]">5000</span>
          <span className="bg-[#9C42FF] text-[14px] inline-flex text-white rounded-[5px] px-[6px] font-bold radiuslr">PTS</span>
        </div>

        {/* Product Image Area */}
        <div className="imagemid relative flex items-center justify-center p-[16px]">
          <Image src="/images/product-img.svg" width={188} height={128} className="mx-auto" alt="product image"/>
          <div className="right absolute right-[10px] top-[15px] h-full flex flex-col items-start justify-between">
            <div className="rounded-full w-[60px] h-[60px] border border-[#003d2a] p-[6px] flex items-center justify-center">
              <Link href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[25px] h-[25px] transition-colors duration-300 stroke-[#003d2a]" strokeWidth={1.5}
                  fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75c-1.95 0-3.56 1.23-4.5 3.045C11.06 4.98 9.45 3.75 7.5 3.75 5.014 3.75 3 5.878 3 8.438c0 2.458 1.863 5.098 5.57 8.11.934.75 1.953 1.507 3.048 2.258a.75.75 0 00.864 0c1.095-.75 2.114-1.508 3.048-2.258 3.707-3.012 5.57-5.652 5.57-8.11 0-2.56-2.014-4.688-4.5-4.688z"/>
                </svg>
              </Link>
            </div>
            <Link href="#"><Image src="/images/igacount.svg" width={40} height={40} alt="IGA logo"/></Link>
          </div>
        </div>

        {/* Product Details */}
        <div className="bottom p-[16px] mt-[16px]">
          <h4 className="text-[#ED1C24] text-[16px] font-bold">$2.35 Sale <span className="text-[#000]"><del>$3.99</del></span></h4>
          <p className="text-[12px] font-normal text-[#000] pt-[4px] pb-[8px]">608g ($1.69 per 100g)</p>
          <p className="text-[14px] font-normal text-[#000]"><strong>Sobeys</strong></p>
          <p className="text-[14px] font-normal text-[#000] pt-[4px]">Freshly baked sourdough loaf</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
