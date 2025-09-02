'use client';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/components/utils';

const containerVariants = cva('relative w-full', {
  variants: {
    color: {
      orange: "bg-[#EF9300E5]",
      purple: "bg-[#BB008EE5]",
      green: "bg-brandSecondary",
    },
  },
  defaultVariants: {
    color: 'green',
  },
});

interface InnerBannerFullProps extends VariantProps<typeof containerVariants> {
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
  contentClass?: string;
  imageClass?: string;
  imageHeightClass?: string; // ✅ NEW PROP
}

export const InnerBannerIpad: React.FC<InnerBannerFullProps> = ({
  imageSrc,
  imageAlt = 'Image',
  color,
  className,
  children,
  contentClass,
  imageClass,
  imageHeightClass = "h-[240px] md:h-[300px]", // ✅ default value
}) => {
  return (
    <div className={cn(containerVariants({ color }), className)}>
      {/* Image at the top always */}
      <div className={cn("relative rounded-t-[20px] w-full", imageHeightClass, imageClass)}>
        <Image
          src={imageSrc as string}
          alt={imageAlt}
          fill
          className="object-cover"
         
          
        />
      </div>

      {/* Content below image */}
      <div className={cn("p-10 flex flex-col justify-center space-y-4", contentClass)}>
        {children}
      </div>
    </div>
  );
};
