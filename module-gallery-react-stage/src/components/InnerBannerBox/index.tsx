import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { Row } from "../Row";
import { Container } from "../Container";
import { cn } from "../utils"; // Assuming `cn` utility is in utils

// Define the innerBannerBoxStyles using cva
const innerBannerBoxStyles = cva(
  "w-full lg:w-[62%] order-1 lg:order-0 p-8 px-12 py-8 flex gap-4 flex-col min-h-[240px] justify-center",
  {
    variants: {
      bgColor: {
        green: "bg-green-950",
        blue: "bg-blue-900",
        red: "bg-red-900",
      },
    },
    defaultVariants: {
      bgColor: "green",
    },
  }
);

// Define the InnerBannerBoxProps interface, extending VariantProps for bgColor
export interface InnerBannerBoxProps
  extends VariantProps<typeof innerBannerBoxStyles> {
  children?: React.ReactNode
  imageUrl: string;
  altText: string;
  imgClassName?: string;
  ClassName?: string,
  contentClassName?: string;
}

// The InnerBannerBox component with cn utility integrated for className handling
export const InnerBannerBox: React.FC<InnerBannerBoxProps> = ({
  children,
  imageUrl,
  altText,
  bgColor,
  ClassName,
  imgClassName = "",
  contentClassName = "",
}) => {
  return (
    <Container className="mx-0">
      <Row className={cn("flex flex-col lg:flex-row gap-4")}>
        <div className={cn(`flex flex-col lg:flex-row w-full rounded-[12px] overflow-hidden mb-6 ${ClassName}`)}>
          <div className={cn(innerBannerBoxStyles({ bgColor }), contentClassName)}>
            {children}
          </div>
          <div className={cn("w-full lg:w-[38%] relative order-0 lg:order-1 min-h-[185px] md:min-h-[315px] lg:min-h-[240px]", imgClassName)}>
            <Image
              src={imageUrl}
              className="object-cover"
              layout="fill"
              alt={altText}
            />
          </div>
        </div>
      </Row>
    </Container>
  );
};
