"use client";

import { useState } from "react";
import { Box } from "@/components/Box";
import { Button } from "@/components/Button";

interface StaticQuantityButtonProps {
  quantity?: number;
  maxQuantity?: number;
  addListBtn?: boolean;
  isFullView?: boolean;
  disabled?: boolean;
  className?: string;
}

const StaticQuantityButton: React.FC<StaticQuantityButtonProps> = ({
  quantity = 0,
  maxQuantity = 99,
  addListBtn = false,
  disabled = false,
  className = "",
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const increaseQuantity = () => {
    if (currentQuantity < maxQuantity && !disabled) {
      setCurrentQuantity(currentQuantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (currentQuantity > 0 && !disabled) {
      setCurrentQuantity(currentQuantity - 1);
    }
  };

  const showAddButton = currentQuantity === 0 && addListBtn;

  return (
    <Box className={`${className} flex items-center animated-quantity-button`}>
      {showAddButton ? (
        <Button
          type="button"
          variant="primary"
          aria-label="Add to list"
          disabled={disabled}
          onClick={() => setCurrentQuantity(1)}
          className={`w-[220px] h-[40px] font-normal text-white min-w-[110px] max-2xs:text-body ${disabled ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          Add To List
        </Button>
      ) : (
        <Box className={`flex items-center ${currentQuantity === 0 ? "w-auto" : "w-full"
          } ${!showAddButton && currentQuantity === 0
            ? "animated-btn group cursor-pointer px-0 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:mx-0 [&>div]:w-10 [&>div]:h-10 [&>div>svg]:w-6 w-10 max-w-10 min-w-10 overflow-hidden hover:w-auto hover:max-w-full hover:px-[10px] active:px-[10px]"
            : ""
          } transition-[width,max-width,padding] duration-500 whitespace-nowrap justify-between h-[40px] px-0 bg-brandSecondary rounded-full text-white ${currentQuantity > 0 ? "px-[15px]" : ""
          }`}
          onClick={() => {
            if (currentQuantity === 0) {
              increaseQuantity();
            }
          }}>
          {/* Minus icon */}
          {currentQuantity === 0 ?
            (
              /* Plus icon */
              <Box
                className={`w-10 h-10 min-w-10 max-w-10  ml-2 text-white cursor-pointer transition-transform duration-500 group-hover:-translate-x-20`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </Box>
            ) : (
              <Box
                className={`w-5 h-5 mr-2 text-white cursor-pointer ${disabled || currentQuantity <= 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                aria-hidden="true"
                onClick={decreaseQuantity}
              > {currentQuantity === 1 ?
                <svg
                  onClick={decreaseQuantity}
                  xmlns="http://www.w3.org/2000/svg"
                  className=" text-white cursor-pointer active:scale-90 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7L5 7M6 7L6 19a2 2 0 002 2h8a2 2 0 002-2L18 7M10 11v6M14 11v6M9 7V4h6v3"
                />
              </svg>
                :
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                }
              </Box>
            )}
          {/* Quantity Text */}
          <Box as="span" className={`text-white font-bold transition-transform duration-700 group-hover:-translate-x-[15px] ${currentQuantity === 0 && "translate-x-[200px]"}`}>{currentQuantity === 0 ? "Add To List" : currentQuantity}</Box>

          {/* Plus icon */}
          <Box
            className={`w-5 h-5 ml-2 text-white cursor-pointer transition-transform duration-700 group-hover:-translate-x-[15px] ${currentQuantity === 0 && "translate-x-[200px]"} ${disabled || currentQuantity >= maxQuantity ? "opacity-50 cursor-not-allowed" : ""
              }`}
            aria-hidden="true"
            onClick={increaseQuantity}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default StaticQuantityButton;
