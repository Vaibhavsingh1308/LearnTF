import Image from 'next/image';
import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Container } from '../Container';
import { Row } from '../Row';
import { cn } from "../utils";

 
// Define variants using CVA
const containerVariants = cva(
  'relative ', // Base classes
  {
    variants: {
      color: {
        orange: "bg-[#EF9300E5]",
        purple: "bg-[#BB008EE5]",
        green: "bg-brandSecondary",
      },
    },
    defaultVariants: {
      color: 'green', // Default color variant
    },
  }
);
 
interface InnerBannerFullProps extends VariantProps<typeof containerVariants> {
  imageSrc?: string;
  imageAlt?: string;
  className?: string; // Allow custom classes to override
  children?: ReactNode; // Allow custom content
  contentClass?: string; // Custom class for content container
  imageClass?: string; // Custom class for image container
}
 
export const InnerBannerFull: React.FC<InnerBannerFullProps> = ({
  imageSrc,
  imageAlt = 'Image',
  color,
  className,
  children,
  contentClass,
  imageClass,
}) => {
  return (
    <div className={cn(containerVariants({ color }), className)}>
       <div
        className={cn(
          "w-full lg:w-[55%] relative lg:absolute right-0 top-0 h-[158px] md:h-[300px] lg:hidden",
          imageClass
        )}
      >
        <Image
          src={imageSrc as string}
          className={cn("object-cover")}
          layout="fill"
          unoptimized={true}
          alt={imageAlt}
        />
      </div>
      <Container className="px-6 2md:px-12 max-w-[1536px] mx-auto order-1 lg:order-0">
        <Row className={cn("flex flex-col lg:flex-row lg:min-h-[350px]")}>
          <div className={cn("flex flex-col lg:flex-row w-full")}>
            <div
              className={cn(
                "w-full lg:w-[43%] gap-6 flex flex-col justify-center p-6 pt-4 lg:py-10",
                contentClass
              )}
            >
              {children}
            </div>
          </div>
        </Row>
      </Container>
      <div
        className={cn(
          "w-full lg:w-[55%] relative lg:absolute right-0 top-0 h-full hidden lg:block",
          imageClass
        )}
      >
        <Image
          src={imageSrc as string}
          className={cn("object-cover")}
          layout="fill"
          unoptimized={true}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};