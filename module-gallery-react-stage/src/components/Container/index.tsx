import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

// Define the containerVariants using the `cva` function from class-variance-authority.
// The variants allow for the customization of the container's size.
const containerVariants = cva(
  "", // Base styles (empty for now, could be used for global styles like padding or margin)
  {
    variants: {
      size: {
        boxed: "max-w-[1424px] px-3 mx-auto", // Boxed variant with max-width and horizontal padding
        fluid: "w-full", // Fluid variant with full width
      },
    },
    defaultVariants: {
      size: "boxed", // Default size variant is "boxed"
    },
  }
);

// Define the ContainerProps interface that extends HTMLDivElement props 
// and the VariantProps for size variant from containerVariants.
export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>, 
    VariantProps<typeof containerVariants> {}

// The Container component is a functional component that uses the containerVariants to style the div.
export const Container: React.FC<ContainerProps> = ({
  className,
  size,
  children,
  ...props
}) => {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props}>
      {children}
    </div>
  );
};