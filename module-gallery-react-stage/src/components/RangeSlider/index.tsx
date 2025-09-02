import { Box, Text } from "@/components";
import React, { useEffect, useRef, useState } from "react";

interface PriceRangeSliderProps {
  minPrice?: number;
  maxPrice?: number;
  initialMin?: number;
  initialMax?: number;
  midPoint?: number;
  onChange?: (min: number, max: number) => void;
  onChangeEnd?: (min: number, max: number) => void;
  resetTrigger?: number;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  minPrice = 1,
  maxPrice = 99,
  initialMin = 20,
  initialMax = 75,
  midPoint = 50,
  onChange,
  onChangeEnd,
  resetTrigger,
}) => {
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMinValue(initialMin);
    setMaxValue(initialMax);
  }, [resetTrigger, initialMin, initialMax]);

  useEffect(() => {
    setMinValue(minPrice);
    setMaxValue(maxPrice);
  }, [minPrice, maxPrice]);

  const valueToPercent = (value: number) =>
    ((value - minPrice) / (maxPrice - minPrice)) * 100;

  const positionToValue = (position: number) => {
    if (!sliderRef.current) return 0;
    const { left, width } = sliderRef.current.getBoundingClientRect();
    const percent = Math.max(0, Math.min(100, ((position - left) / width) * 100));
    return Math.round((percent / 100) * (maxPrice - minPrice) + minPrice);
  };

  const handleDrag = (isMin: boolean, clientX: number) => {
    const newValue = positionToValue(clientX);
    if (isMin) {
      setMinValue(prev => {
        const updated = Math.min(Math.max(minPrice, newValue), maxValue - 1);
        if (prev !== updated) onChange?.(updated, maxValue);
        return updated;
      });
    } else {
      setMaxValue(prev => {
        const updated = Math.max(Math.min(maxPrice, newValue), minValue + 1);
        if (prev !== updated) onChange?.(minValue, updated);
        return updated;
      });
    }
  };

  const startDragging = (isMin: boolean) => (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const moveHandler = (moveEvent: MouseEvent | TouchEvent): void => {
      const clientX =
        "touches" in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
      handleDrag(isMin, clientX);
    };

    const endHandler = () => {
      setIsDragging(false);
      onChangeEnd?.(minValue, maxValue);

      document.removeEventListener("mousemove", moveHandler as EventListener);
      document.removeEventListener("mouseup", endHandler);
      document.removeEventListener("touchmove", moveHandler as EventListener);
      document.removeEventListener("touchend", endHandler);
    };

    document.addEventListener("mousemove", moveHandler as EventListener);
    document.addEventListener("mouseup", endHandler);
    document.addEventListener("touchmove", moveHandler as EventListener, { passive: false });
    document.addEventListener("touchend", endHandler);
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (isDragging) return;
    const clickValue = positionToValue(e.clientX);
    let newMin = minValue;
    let newMax = maxValue;

    if (Math.abs(clickValue - minValue) <= Math.abs(clickValue - maxValue)) {
      newMin = Math.min(Math.max(minPrice, clickValue), maxValue - 1);
      setMinValue(newMin);
    } else {
      newMax = Math.max(Math.min(maxPrice, clickValue), minValue + 1);
      setMaxValue(newMax);
    }

    onChange?.(newMin, newMax);
    onChangeEnd?.(newMin, newMax);
  };

  const minPercent = valueToPercent(minValue);
  const maxPercent = valueToPercent(maxValue);

  if (minPrice === 0 && maxPrice === 0) return null;

  return (
    <Box as="div" className="w-full lg:max-w-md mt-4">
      <Box as="div" className="text-body text-brandBlack font-bold mb-2">Price</Box>
      <Box as="div" className="text-center text-body text-brandBlack font-bold mb-1">
        ${minValue} - ${maxValue >= 99 ? "99+" : maxValue}
      </Box>

      <Box as="div" className="relative lg:mx-[15px] sm:mx-[33px] mx-[26px]">
        <Box
          as="div"
          ref={sliderRef}
          className="relative h-[6px] bg-grey350 rounded-full"
          onClick={handleTrackClick}
        >
          <Box
            as="div"
            className="absolute h-full bg-brandPrimary rounded-full"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
        </Box>

        <input
          type="range"
          className={`range-thumb-white appearance-none absolute w-[24px] h-[24px] top-[-6px]
            transform -translate-x-1/2 focus:outline-none 
            ${isDragging ? "cursor-grabbing" : "cursor-pointer"}`}
          style={{ left: `${minPercent}%` }}
          min={minPrice}
          max={maxValue}
          value={minValue}
          onChange={(e) => {
            const val = Number(e.target.value);
            const updated = Math.min(Math.max(minPrice, val), maxValue - 1);
            setMinValue(updated);
            onChange?.(updated, maxValue);
          }}
          onMouseDown={startDragging(true)}
          onTouchStart={startDragging(true)}
          onKeyUp={() => onChangeEnd?.(minValue, maxValue)}
          aria-label="Minimum Price"
        />

        <input
          type="range"
          className={`range-thumb-white appearance-none absolute w-[24px] h-[24px] top-[-6px]
            transform -translate-x-1/2 focus:outline-none 
            ${isDragging ? "cursor-grabbing" : "cursor-pointer"}`}
          style={{ left: `${maxPercent}%` }}
          min={minValue}
          max={maxPrice}
          value={maxValue}
          onChange={(e) => {
            const val = Number(e.target.value);
            const updated = Math.max(Math.min(maxPrice, val), minValue + 1);
            setMaxValue(updated);
            onChange?.(minValue, updated);
          }}
          onMouseDown={startDragging(false)}
          onTouchStart={startDragging(false)}
          onKeyUp={() => onChangeEnd?.(minValue, maxValue)}
          aria-label="Maximum Price"
        />

        <Box as="div" className="flex justify-between text-body text-brandBlack mt-2">
          <Text className="ml-[-4px] mt-[5px]" as="span">${minPrice}</Text>
          <Text as="span">${midPoint}</Text>
          <Text className="mr-[-14px] mt-[5px]" as="span">${maxPrice >= 100 ? "99" : maxPrice}+</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;
