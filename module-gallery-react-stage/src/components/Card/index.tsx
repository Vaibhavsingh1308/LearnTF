import React from "react";
import { cn } from "../utils";
import Image from "next/image";

// Card component that acts as a container for card sections
export const Card = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div
      className={cn("bg-brandWhite shadow-md rounded-lg overflow-hidden", className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
export const CardImage = ({
  src,
  alt = "Card image",
  className,
  imageClassName,
  width,
  height,
}: {
  src: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Image
        src={src}
        alt={alt}
        className={cn("object-cover w-full h-auto", imageClassName)}
        width={width || 600} // fallback width
        height={height || 300} // fallback height
        priority
      />
    </div>
  );
};
// CardHeader component for the header section of the card
export const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-4 border-b", className)}>{children}</div>;
};

// CardTitle component for the title in the header
export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h2 className={cn("text-xl font-semibold text-grey800", className)}>{children}</h2>;
};

// CardDescription component for the description in the header
export const CardDescription = ({
  children,
  className,
}: React.HTMLProps<HTMLDivElement>) => {
  return <p className={cn("text-sm text-grey600", className)}>{children}</p>;
};

// CardContent component for the main content area of the card
export const CardContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};

// CardFooter component for the footer section of the card
export const CardFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-4 border-t", className)}>{children}</div>;
};
