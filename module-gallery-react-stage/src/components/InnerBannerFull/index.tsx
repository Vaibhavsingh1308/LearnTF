import Image from 'next/image';
import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Container } from '../Container';
import { Row } from '../Row';
import { cn } from "../utils";

// Define variants using CVA
const containerVariants = cva(
  'relative',
  {
    variants: {
      color: {
        orange: "bg-[#EF9300E5]",
        purple: "bg-[#BB008EE5]",
        green: "bg-[#44266E]",
        purpleDark: "bg-[#45256e]"
      },
    },
    defaultVariants: {
      color: 'green',
    },
  }
);

interface InnerBannerFullProps extends VariantProps<typeof containerVariants> {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
  contentClass?: string;
  imageClass?: string;
  imagePosition?: 'left' | 'right'; // 👈 New prop
}

export const InnerBannerFull: React.FC<InnerBannerFullProps> = ({
  imageSrc,
  imageAlt = 'Image',
  color,
  className,
  children,
  contentClass,
  imageClass,
  imagePosition = 'right', // 👈 Default to right
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className={cn(containerVariants({ color }), className)}>
      {/* Mobile image always first */}
      <div className={cn( "w-full lg:w-[55%] relative lg:absolute top-0 h-[158px] md:h-[300px] lg:hidden", imageClass
      )}>
        <Image
          src={imageSrc as string}
          className="object-cover"
          layout="fill"
          alt={imageAlt}
        />
      </div>

      <Container className="max-w-[1536px] mx-auto order-1 lg:order-0">
        <Row className="flex flex-col lg:flex-row lg:min-h-[350px]">
          <div className="flex flex-col lg:flex-row w-full">
            {/* Conditionally render based on image position */}
            {isImageLeft && (
              <div className={cn(
                "w-full lg:w-[55%] relative hidden lg:block",
                imageClass
              )}>
                <Image
                  src={imageSrc as string}
                  className="object-cover"
                  layout="fill"
                  alt={imageAlt}
                />
              </div>
            )}

            <div className={cn(
              "w-full lg:w-[45%] gap-2 flex flex-col justify-center pr-16 pl-10 pt-0 lg:py-10",
              contentClass
            )}>
              {children}
            </div>

            {!isImageLeft && (
              <div className={cn(
                "w-full lg:w-[55%] relative hidden lg:block",
                imageClass
              )}>
                <Image
                  src={imageSrc as string}
                  className="object-cover"
                  layout="fill"
                  alt={imageAlt}
                />
              </div>
            )}
          </div>
        </Row>
      </Container>
    </div>
  );
};
