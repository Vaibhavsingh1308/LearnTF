import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const separatorStyles = cva("relative bg-grey300", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px h-full",
    },
    color: {
      gray: "bg-grey300",
      blue: "bg-blue-900",
      red: "bg-red-500",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    color: "gray",
  },
});

interface SeparatorProps extends VariantProps<typeof separatorStyles> {
  "aria-label"?: string;
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  color = "gray",
  "aria-label": ariaLabel = "Separator",
  className = "",
}) => {
  return (
    <div
      role="separator"
      aria-orientation={
        orientation === "horizontal" ? "horizontal" : "vertical"
      }
      aria-label={ariaLabel}
      className={`${separatorStyles({ orientation, color })} ${className}`}
    />
  );
};
