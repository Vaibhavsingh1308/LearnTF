"use client";

import React, { useState } from "react";
import { cva } from "class-variance-authority";

const switchStyles = cva(
  "relative inline-block w-12 h-6 rounded-full transition-all duration-300",
  {
    variants: {
      state: {
        unchecked: "bg-grey300",
        checked: "bg-grey800",
      },
    },
    defaultVariants: {
      state: "unchecked",
    },
  }
);

const knobStyles = cva(
  "absolute top-[2px] left-[2px] w-5 h-5 bg-brandWhite rounded-full transition-all duration-300 transform",
  {
    variants: {
      state: {
        unchecked: "translate-x-0",
        checked: "translate-x-6",
      },
    },
    defaultVariants: {
      state: "unchecked",
    },
  }
);

export interface SwitchProps {
  className?: string;
  uncheckedBgColor?: string;
  checkedBgColor?: string;
  ariaLabel?: string; // Custom ARIA label for accessibility
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  uncheckedBgColor = "bg-grey300",
  checkedBgColor = "bg-grey800",
  ariaLabel = "Toggle switch",
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault(); // Prevent default scrolling behavior for space key
      toggleSwitch();
    }
  };

  return (
    <div
      className={`tab cursor-pointer ${switchStyles({
        state: isChecked ? "checked" : "unchecked",
      })} ${isChecked ? checkedBgColor : uncheckedBgColor} ${className ?? ""}`}
      role="switch"
      aria-checked={isChecked}
      aria-label={ariaLabel}
      tabIndex={0} // Makes it focusable
      onClick={toggleSwitch}
      onKeyDown={handleKeyDown}
      data-state={isChecked ? "checked" : "unchecked"}
    >
      <span
        className={knobStyles({ state: isChecked ? "checked" : "unchecked" })}
      ></span>
    </div>
  );
};
