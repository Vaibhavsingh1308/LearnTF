/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ElementType, ReactNode, forwardRef } from 'react';

export type BoxProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export const Box = forwardRef(
  <T extends ElementType = 'div'>(
    { as, children, className = '', ...props }: BoxProps<T>,
    ref: React.Ref<any>
  ) => {
    const Component = as ?? 'div';
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
