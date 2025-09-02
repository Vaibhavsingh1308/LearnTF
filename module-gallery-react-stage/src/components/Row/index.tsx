import React from 'react';

export interface RowProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode,
  className?: string
}

export const Row = ({ children, className="", ...props }: RowProps) => {
  return <div className={`row ${className}`} {...props}>{children}</div>;
};
