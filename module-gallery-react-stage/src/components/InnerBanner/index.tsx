import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Row } from "../Row";
import Image from "next/image";
import { Container } from "../Container";
import { clsx } from "clsx"; // Import clsx to combine class names

// Define variants using CVA
const bannerVariants = cva(
  'relative gap-[18px] flex flex-col justify-center before:absolute before:content-[""] before:top-1/2 before:h-full before:w-full before:z-[-1] before:transform before:-translate-y-1/2',
  {
    variants: {
      color: {
        orange: "bg-[#EF9300E5]",
        purple: "bg-[#BB008EE5]",
        green: "bg-[#003D2A]",
        none: "",
      },
      withBefore: {
        orange: `
          before:bg-[#EF9300E5]
          before:left-[-100%]
        `,
        purple: `
          before:bg-[#BB008EE5]
          before:left-[-100%]
        `,
        green: `
        before:bg-[#003D2A]
        before:left-[-100%]
      `,
        none: "",
      },
      withAfter: {
        orange: `
          before:bg-[#EF9300E5]
          before:right-[-100%]
        `,
        purple: `
          before:bg-[#BB008EE5]
          before:right-[-100%]
        `,
        green: `
        before:bg-[#003D2A]
        before:right-[-100%]
      `,
        none: "",
      },
      padding: {
        LeftSideNone: "pt-[50px] pb-[72px] pr-[79px] pl-0",
        AllSide: "pt-[50px] pb-[72px] pl-[79px] pr-[79px]",
      },
      width: {
        small: "w-[100%] lg:w-[40%]", // 40% width
        medium: "w-[100%] lg:w-[50%]", // 50% width (default)
        large: "w-[100%]", // 100% width
      },
      height: {
        full: "h-full", // Full height
        none: "",
      },
      borderRadius: {
        none: "rounded-none",
        right: "rounded-[300px_0_0_300px]",
        left: "rounded-[0_300px_300px_0]",
      },
    },
    defaultVariants: {
      color: "orange",
      withBefore: "orange",
      withAfter: "green",
      padding: "LeftSideNone",
      width: "medium", // Default width
      height: "none", // Default height
      borderRadius: "none", // Default border radius
    },
  }
);

export interface InnerBannerProps extends VariantProps<typeof bannerVariants> {
  leftColumnContent?: React.ReactNode;
  rightColumnContent?: React.ReactNode;
  backgroundImage: string; // Add a background image prop
  className?: string; // Add className prop for custom classes
}

export const InnerBanner: React.FC<InnerBannerProps> = ({
  color,
  withBefore,
  withAfter,
  padding,
  width = "medium", // Default to 'medium'
  height = "none", // Default to 'none'
  leftColumnContent,
  rightColumnContent,
  backgroundImage, // Accept dynamic background image
  borderRadius = "none", // Default to 'none'
  className, // Destructure className
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Container className="relative z-[1] min-h-[350px]">
        <Row
          className={`h-full flex items-center gap-[16px] ${rightColumnContent ? "justify-end" : ""}`}
        >
          {/* First Column */}
          {leftColumnContent && (
            <div
              className={clsx(
                bannerVariants({
                  color,
                  withBefore,
                  withAfter,
                  padding,
                  width,
                  height,
                  borderRadius,
                }),
                className // Add custom class here
              )}
            >
              {leftColumnContent}
            </div>
          )}

          {/* Second Column */}
          {rightColumnContent && width !== "large" && (
            <div
              className={clsx(
                bannerVariants({
                  color,
                  withBefore,
                  withAfter,
                  padding,
                  width,
                  height,
                  borderRadius,
                }),
                className // Add custom class here
              )}
            >
              {rightColumnContent}
            </div>
          )}
        </Row>
      </Container>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage} // Use the passed dynamic image URL
          className="object-cover"
          layout="fill"
          alt="Background Image"
        />
      </div>
    </div>
  );
};
