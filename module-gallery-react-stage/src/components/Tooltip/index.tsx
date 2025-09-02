"use client";

import React, { useState } from 'react';
import { cn } from '../utils';

type TooltipDirection = 'top' | 'bottom' | 'left' | 'right' | 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  direction?: TooltipDirection;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
  arrowClassName?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  direction = 'top',
  children,
  arrow = false,
  className = '',
  arrowClassName = '',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);
  const toggleTooltip = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsVisible((prev) => !prev);
    }
  };

  const directionClasses: Record<TooltipDirection, string> = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    'top-start': 'bottom-full left-0 mb-2',
    'top-end': 'bottom-full right-0 mb-2',
    'bottom-start': 'top-full left-0 mt-2',
    'bottom-end': 'top-full right-0 mt-2',
  };

  const arrowClasses: Record<TooltipDirection, string> = {
    top: 'absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-t-brandBlack border-t-4 border-x-transparent border-x-4 border-b-0',
    bottom: 'absolute -top-1 left-1/2 transform -translate-x-1/2 border-b-brandBlack border-b-4 border-x-transparent border-x-4 border-t-0',
    left: 'absolute -right-1 top-1/2 transform -translate-y-1/2 border-l-brandBlack border-l-4 border-y-transparent border-y-4 border-r-0',
    right: 'absolute -left-1 top-1/2 transform -translate-y-1/2 border-r-brandBlack border-r-4 border-y-transparent border-y-4 border-l-0',
    'top-start': 'absolute -bottom-1 left-2 transform border-t-brandBlack border-t-4 border-x-transparent border-x-4 border-b-0',
    'top-end': 'absolute -bottom-1 right-2 transform border-t-brandBlack border-t-4 border-x-transparent border-x-4 border-b-0',
    'bottom-start': 'absolute -top-1 left-2 transform border-b-brandBlack border-b-4 border-x-transparent border-x-4 border-t-0',
    'bottom-end': 'absolute -top-1 right-2 transform border-b-brandBlack border-b-4 border-x-transparent border-x-4 border-t-0',
  };

  return (
    <div className="relative inline-block" {...rest}>
      <div
        className="cursor-pointer"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onKeyDown={toggleTooltip}
        role="button"
        tabIndex={0}
        aria-describedby="tooltip"
      >
        {children}
      </div>
      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className={cn(
            'absolute z-10 px-2 py-1 w-24 text-sm text-white bg-brandBlack rounded shadow-md transition-opacity duration-200',
            directionClasses[direction],
            className,
            { 'opacity-100': isVisible, 'opacity-0': !isVisible }
          )}
        >
          {content}
          {arrow && (
            <div className={cn('w-0 h-0', arrowClasses[direction], arrowClassName)} />
          )}
        </div>
      )}
    </div>
  );
};
