import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";

// Define the badge variants with  prefix
const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-sm font-medium rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white",
        secondary: "bg-grey500 text-white",
        outline: "border border-grey300 text-grey900",
        destructive: "bg-red-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

// Badge component
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

// Export badgeVariants for external usage
export { badgeVariants };
