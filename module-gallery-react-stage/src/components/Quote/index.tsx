import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const quoteStyles = cva(
    "relative p-4 bg-brandWhite flex flex-col before:content-[''] before:absolute before:left-0 before:top-[45%] before:h-[70%] before:w-[5px] before:-translate-y-1/2", // Base styles with pseudo-element

  {
    variants: {
      color: {
        blue: "bg-blue-500 text-brandWhite",
        yellow: "bg-yellow-100 text-grey900",
        white: "bg-brandWhite text-brandBlack",
      },
      quoteBorderColor: {
        black: "before:bg-brandSecondary",
        blue: "before:bg-blue-500",
        yellow: "before:bg-yellow-500",
        gray: "before:bg-grey300",
        white: "before:bg-brandWhite",
        red: "before:bg-red-500", // Added dynamic red border color
      },
    },
    defaultVariants: {
      color: "white",
      quoteBorderColor: "gray",
    },
  }
);

export interface QuoteProps extends VariantProps<typeof quoteStyles> {
  quote: string;
  author?: string;
  className?: string;
  role?: string;
  ariaLabel?: string;
}

export const Quote: React.FC<QuoteProps> = ({
  quote,
  author,
  color,
  quoteBorderColor,
  className = "",
  role = "blockquote",
  ariaLabel = "Quote",
}) => {
  return (
    <div
      className={quoteStyles({ color, quoteBorderColor, className })}
      role={role}
      aria-label={ariaLabel}
    >
      <p className="text-grey950 text-[20px] pl-8 italic" role="text">
        {quote}
      </p>
      {author && (
        <div className="text-grey950 text-[20px] text-right" aria-label="Author">
          -- {author}
        </div>
      )}
    </div>
  );
};
