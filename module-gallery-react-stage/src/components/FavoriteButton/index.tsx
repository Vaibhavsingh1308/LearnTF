"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { cn } from "../utils";

const FavoriteButton: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(40);
  const textRef = useRef<HTMLDivElement>(null);

  const heartButtonText = isFavorite ? "Remove favourite" : "Add to favourite";

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsFavorite((prev) => !prev);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setButtonWidth(40);
  };
  const handleFocus = () => setIsHovered(true);
  const handleBlur = () => {
    setIsHovered(false);
    setButtonWidth(40);
  };

  useEffect(() => {
    const textWidth = textRef.current?.offsetWidth || 0;
    setButtonWidth(isFavorite ? 40 + textWidth + 14 : 40);
  }, [isFavorite]);

  useEffect(() => {
    if (isHovered) {
      const textWidth = textRef.current?.offsetWidth || 0;
      setButtonWidth(40 + textWidth + 10);
    } else if (!isFavorite) {
      setButtonWidth(40);
    }
  }, [isHovered, isFavorite]);

  return (
    <Button
      onClick={toggleFavorite}
      aria-label={heartButtonText}
      className="group !px-0 z-1 !bg-brandWhite flex items-center border rounded-full overflow-hidden transition-all duration-700 relative [&:before]:hidden text-brandSecondary max-lg:max-w-[40px] min-w-10 min-h-10"
      type="button"
      variant="primary"
      style={{ width: `${buttonWidth}px`, height: "40px" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
      onFocus={handleFocus}
      id="favorite_button"
    >
      <Box as="div" className="relative overflow-hidden w-full h-full flex items-center max-lg:hidden">
        <div
          ref={textRef}
          className="absolute left-2 transition-all !duration-1000 !delay-100 whitespace-nowrap text-[14px] group-hover:translate-x-0 group-hover:opacity-100"
          style={{
            transform: isFavorite || isHovered ? "translateX(0)" : "translateX(100%)",
            opacity: isFavorite || isHovered ? 1 : 0,
          }}
        >
          {heartButtonText}
        </div>
      </Box>
      <Box as="span" className="min-w-10 w-10 h-10 bg-brandWhite text-xl flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={cn(
            "w-6 h-6 transition-colors duration-300",
            isFavorite ? "fill-[#003d2a] stroke-[#003d2a]" : "fill-none stroke-[#003d2a]"
          )}
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 3.75c-1.95 0-3.56 1.23-4.5 3.045C11.06 4.98 9.45 3.75 7.5 3.75 5.014 3.75 3 5.878 3 8.438c0 2.458 1.863 5.098 5.57 8.11.934.75 1.953 1.507 3.048 2.258a.75.75 0 00.864 0c1.095-.75 2.114-1.508 3.048-2.258 3.707-3.012 5.57-5.652 5.57-8.11 0-2.56-2.014-4.688-4.5-4.688z"
          />
        </svg>
      </Box>
    </Button>
  );
};

export default FavoriteButton;
