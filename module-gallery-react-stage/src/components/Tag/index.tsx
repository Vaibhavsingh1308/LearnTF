import React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

interface TagProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof tagVariants> {
  children: React.ReactNode;
  className?: string;
  inIcon?: React.ReactNode;
}

const tagVariants = cva(
  "inline-block rounded-[100px] px-4 py-2 text-[14px] flex items-center space-x-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-100 text-blue-700",
        secondary: "bg-grey300 text-brandBlack",
        success: "bg-brandSecondary text-brandWhite",
        danger: "bg-red-100 text-red-700",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export const Tag: React.FC<TagProps> = ({
  children,
  variant,
  className,
  inIcon,
  ...rest
}) => {
  return (
    <button className={cn(tagVariants({ variant }), className)} {...rest}>
      {inIcon && typeof inIcon === "string" ? (
        <Image src={inIcon} alt="icon" width={16} height={16} className="mr-2 w-4 h-4" />
         ):(
           inIcon
         )}
      {children}
    </button>
  );
};