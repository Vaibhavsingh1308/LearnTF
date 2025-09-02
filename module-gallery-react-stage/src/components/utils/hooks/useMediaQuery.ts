'use client';

import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    // Check if the window object is available
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      const handleOrientationChange = () => {
        handleResize();
      };

      // Set initial width
      handleResize();

      // Add event listeners
      window.addEventListener("resize", handleResize);
      window.addEventListener("orientationchange", handleOrientationChange);

      // Cleanup event listeners on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("orientationchange", handleOrientationChange);
      };
    }
  }, []);

  return screenWidth;
};

export default useMediaQuery;
