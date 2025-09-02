import React from "react";
import Image from "next/image";
import { Box } from "@/components/Box";
import { Text } from "@/components/Text";

interface OffersCardProps {
  JustForYouOffers?: {
    regionalFlag?: string;
  };
}

export default function OffersCard({ JustForYouOffers }: OffersCardProps) {
  return (
    <main className="p-10">
      {/* ... your static explanation blocks ... */}

      <Box as="div" className="max-w-[220px] border border-[1px] rounded-md">
        <Box
          as="div"
          className="offerstop bg-black flex flex-row items-center justify-center gap-[8px] rounded-t-[12px] min-h-[32px]"
        >
          <Image
            src="/images/scene-plus.svg"
            width={16}
            height={16}
            alt="scene plus image"
          />
          <Text as="span" className="count text-white font-bold text-body">
            SCENE+ OFFER
          </Text>
        </Box>
        <Box
          as="div"
          className="imagemid relative items-center justify-center p-[16px]"
        >
          <Text as="p" className="absolute mt-2 text-[12px] text-black100 top-[2px]">
            Offer Expires <strong> Dec 20 </strong>
          </Text>
          <Image
            src="/images/Card188x116.jpg"
            width={188}
            height={128}
            className="mx-auto mt-3 h-[128px] w-[188px] object-contain"
            alt="scene plus"
          />
        </Box>
        <Box as="div" className="bottom p-4 pt-0">
          <Text as="h4" className="text-[#FF0000] text-[16px] font-bold">
            $2.35{" "}
            <Text as="span" className="text-black">
              <del>$3.99 </del>
            </Text>
          </Text>
          <Text as="p" className="text-[12px] font-normal text-black pt-[4px] pb-[8px]">
            608g($1.69 per 100g)
          </Text>
          <Text as="p" className="text-[12px] text-black py-[0px] font-semibold">
            {JustForYouOffers?.regionalFlag}
          </Text>
          <Text as="p" className="text-[14px] font-normal text-black pt-[4px] pb-[0px]">
            Rotel Diced Tomatoes Original 284 ml
          </Text>
        </Box>
      </Box>
    </main>
  );
}
