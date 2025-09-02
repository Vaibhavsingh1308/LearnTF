import React, { ElementType, ReactNode } from 'react';

export type TextProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export const Text = <T extends ElementType = 'span'>({
  as,
  children,
  className = '',
  ...props
}: TextProps<T>) => {
  const Component = as ?? 'span';
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
