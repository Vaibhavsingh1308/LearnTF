'use client';

import { SetStateAction } from 'react';
import ImageWrapper from '../ImageWrapper';
import { Box, Button } from '@/components';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageMagnifierProps {
  images: string[];
  thumbnailSize?: number;
  zoomLevel?: number;
  maxWidth?: number;
  maxHeight?: number;
  selectedIndex?: number;
  onIndexChange?: (index: number) => void;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  images,
  thumbnailSize = 120,
  zoomLevel = 2,
  maxWidth = 730,
  maxHeight = 630,
  selectedIndex = 0,
  onIndexChange,
}) => {
  // Use responsive thumbnail size based on screen width
  const [responsiveThumbnailSize, setResponsiveThumbnailSize] = useState(thumbnailSize);
  const cursorSize = { width: responsiveThumbnailSize / zoomLevel, height: responsiveThumbnailSize / zoomLevel };
  const [position, setPosition] = useState({ x: cursorSize.width / 2, y: cursorSize.height / 2 });
  const [isHovering, setIsHovering] = useState(false);
  const [originalImageWidth, setOriginalImageWidth] = useState(0);
  const [originalImageHeight, setOriginalImageHeight] = useState(0);
  const [displayWidth, setDisplayWidth] = useState(0);
  const [displayHeight, setDisplayHeight] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const thumbnailRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobileBreakpoint = 768;
      const isMobileView = window.innerWidth < mobileBreakpoint;
      setIsMobile(isMobileView);
      
      // Adjust thumbnail size for mobile
      setResponsiveThumbnailSize(isMobileView ? Math.min(thumbnailSize, window.innerWidth * 0.3) : thumbnailSize);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [thumbnailSize]);

  useEffect(() => {
    setCurrentIndex(selectedIndex);
    setPosition({ x: cursorSize.width / 2, y: cursorSize.height / 2 });
    
    // Calculate container dimensions
    const updateContainerDimensions = () => {
      if (containerRef.current && originalImageWidth > 0 && originalImageHeight > 0) {
        const containerWidth = containerRef.current.clientWidth;
        const containerHeight = containerRef.current.clientHeight;
        
        const aspectRatio = originalImageWidth / originalImageHeight;
        
        // Calculate available space considering the thumbnail
        const availableWidth = isMobile ? containerWidth : Math.min(maxWidth, containerWidth) - responsiveThumbnailSize - 16;
        const availableHeight = isMobile ? containerHeight - responsiveThumbnailSize - 16 : Math.min(maxHeight, containerHeight);
        
        let newWidth = availableWidth;
        let newHeight = newWidth / aspectRatio;
        
        if (newHeight > availableHeight) {
          newHeight = availableHeight;
          newWidth = newHeight * aspectRatio;
        }
        
        setDisplayWidth(Math.round(newWidth));
        setDisplayHeight(Math.round(newHeight));
      }
    };
    
    updateContainerDimensions();
    window.addEventListener('resize', updateContainerDimensions);
    return () => window.removeEventListener('resize', updateContainerDimensions);
  }, [selectedIndex, cursorSize.width, cursorSize.height, originalImageWidth, originalImageHeight, 
      maxWidth, maxHeight, responsiveThumbnailSize, isMobile]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!thumbnailRef.current) return;
    const { left, top, width, height } = thumbnailRef.current.getBoundingClientRect();
    let x = Math.max(0, Math.min(e.clientX - left, width));
    let y = Math.max(0, Math.min(e.clientY - top, height));
    x = Math.max(cursorSize.width / 2, Math.min(width - cursorSize.width / 2, x));
    y = Math.max(cursorSize.height / 2, Math.min(height - cursorSize.height / 2, y));
    setPosition({ x, y });
  };

  // Touch event handlers for image magnifier
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!thumbnailRef.current || e.touches.length === 0) return;
    const touch = e.touches[0];
    const { left, top, width, height } = thumbnailRef.current.getBoundingClientRect();
    let x = Math.max(0, Math.min(touch.clientX - left, width));
    let y = Math.max(0, Math.min(touch.clientY - top, height));
    x = Math.max(cursorSize.width / 2, Math.min(width - cursorSize.width / 2, x));
    y = Math.max(cursorSize.height / 2, Math.min(height - cursorSize.height / 2, y));
    setPosition({ x, y });
    e.preventDefault(); // Prevent scrolling when touching the thumbnail
  };

  // Touch event handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 0) return;
    setTouchStartX(e.touches[0].clientX);
    setIsHovering(true);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsHovering(false);
    if (images.length <= 1) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX;
    
    // Minimum swipe distance to trigger navigation
    const minSwipeDistance = 50;
    
    if (diffX > minSwipeDistance) {
      handlePrev(); // Swipe right -> previous image
    } else if (diffX < -minSwipeDistance) {
      handleNext(); // Swipe left -> next image
    }
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    if (onIndexChange) {
      onIndexChange(newIndex);
    }
  };

  const cursorLeftPos = position.x - cursorSize.width / 2;
  const cursorTopPos = position.y - cursorSize.height / 2;
  const magnifiedWidth = displayWidth * zoomLevel;
  const magnifiedHeight = displayHeight * zoomLevel;
  const cursorOpacity = isHovering ? 0.3 : 0.4;
  const maskOpacity = isHovering ? 1 : 0.4;

  // Calculate the zoom transforms for the magnified image
  const calculateZoomTransform = () => {
    if (!originalImageWidth || !originalImageHeight) return { x: 0, y: 0 };
    
    // Calculate relative position as percentage of thumbnail size
    const relativeX = position.x / responsiveThumbnailSize;
    const relativeY = position.y / responsiveThumbnailSize;
    
    // Calculate translation needed to center the zoomed part
    const translateX = -(relativeX * magnifiedWidth - displayWidth / 2);
    const translateY = -(relativeY * magnifiedHeight - displayHeight / 2);
    
    return { x: translateX, y: translateY };
  };

  const zoomTransform = calculateZoomTransform();
  if (!images || images.length === 0) {
    return <Box>No images provided</Box>;
  }

  return (
    <Box 
      as="div" 
      ref={containerRef}
      className="flex flex-col h-full w-full gap-4 relative"
    >
      <Box 
        as="div" 
        className="flex flex-col gap-4"
        style={{ 
          maxWidth: `${maxWidth}px`, 
          maxHeight: `${maxHeight}px` 
        }}
      >
        <Box as="div"
          ref={thumbnailRef}
          className="border border-neutral-200 rounded overflow-hidden flex-shrink-0"
          style={{ 
            width: responsiveThumbnailSize, 
            height: responsiveThumbnailSize
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Box as="div" className="relative w-full h-full overflow-hidden">
            <ImageWrapper
              src={images[currentIndex]}
              alt={`Thumbnail ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
              onLoad={(e: { target: { naturalWidth: SetStateAction<number>; naturalHeight: SetStateAction<number>; }; }) => {
                setOriginalImageWidth(e.target.naturalWidth);
                setOriginalImageHeight(e.target.naturalHeight);
              }}
            />
          </Box>
            <>
              <Box
                className="absolute border bg-brandBlack rounded border-brandBlackpointer-events-none z-20 transition-opacity duration-300"
                style={{ 
                  width: cursorSize.width, 
                  height: cursorSize.height, 
                  left: cursorLeftPos, 
                  top: cursorTopPos, 
                  opacity: cursorOpacity 
                }}
              />
              <Box
                className="absolute bg-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{ 
                  top: 0, 
                  left: 0, 
                  width: responsiveThumbnailSize, 
                  height: cursorTopPos, 
                  opacity: maskOpacity 
                }}
              />
              <Box
                className="absolute bg-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{ 
                  top: cursorTopPos, 
                  left: 0, 
                  width: cursorLeftPos, 
                  height: cursorSize.height, 
                  opacity: maskOpacity 
                }}
              />
              <Box
                className="absolute bg-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{
                  top: cursorTopPos,
                  left: cursorLeftPos + cursorSize.width,
                  width: responsiveThumbnailSize - (cursorLeftPos + cursorSize.width),
                  height: cursorSize.height,
                  opacity: maskOpacity,
                }}
              />
              <Box
                className="absolute bg-transparent pointer-events-none z-10 transition-opacity duration-300"
                style={{
                  top: cursorTopPos + cursorSize.height,
                  left: 0,
                  width: responsiveThumbnailSize,
                  height: responsiveThumbnailSize - (cursorTopPos + cursorSize.height),
                  opacity: maskOpacity,
                }}
              />
            </>
        </Box>
        
        {originalImageWidth > 0 && originalImageHeight > 0 && (
          <Box 
            className="overflow-hidden flex-shrink-0 mx-auto mt-4"
            style={{ width: displayWidth, height: displayHeight }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Box className="w-full h-full relative overflow-hidden">
              <Box
                style={{
                  width: magnifiedWidth,
                  height: magnifiedHeight,
                  transform: `translate(${zoomTransform.x}px, ${zoomTransform.y}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <ImageWrapper
                  src={images[currentIndex]}
                  alt={`Magnified ${currentIndex + 1}`}
                  width={magnifiedWidth}
                  height={magnifiedHeight}
                  className="object-cover"
                  priority
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      
      {/* Navigation buttons with responsive positioning */}
      {images.length > 1 && (
        <>
          <Button 
            variant="icon"
            onClick={handlePrev}
            aria-label="previous button"
            className={`absolute z-10 p-0 rounded-full ${
              isMobile ? 'left-2 top-1/2 -translate-y-1/2' : 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
            }`}
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>
          
          <Button 
            variant="icon"
            onClick={handleNext}
            aria-label="next button"
            className={`absolute z-10 p-0 rounded-full ${
              isMobile ? 'right-2 top-1/2 -translate-y-1/2' : 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2'
            }`}
          >
            <ChevronRight className="w-7 h-7" />
          </Button>
        </>
      )}
    </Box>
  );
};

export default ImageMagnifier;