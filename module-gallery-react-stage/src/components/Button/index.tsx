import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";

// Define the dynamic variants for the button
export const buttonVariants = cva(
  "inline-flex items-center justify-center font-normal transition relative overflow-hidden z-[1] border-[1px] text-center cursor-pointer before:content-[''] before:absolute before:inset-0 before:w-[150%] before:h-full before:transform before:translate-x-[-120%] before:skew-x-[-35deg] before:origin-[0_0] before:transition-transform before:duration-[1s] before:ease-[cubic-bezier(0.07,0.51,0.12,1)] before:z-[-1] hover:before:translate-x-0 focus:before:translate-x-0",
  {
    variants: {
      variant: {
        primary: "bg-brandSecondary before:bg-white text-white border-brandSecondary hover:border-brandSecondary focus:border-brandSecondary hover:bg-brandSecondary focus:bg-brandSecondary hover:text-brandSecondary focus:text-brandSecondary",
        secondary: "bg-brandSecondary before:bg-white text-black border-neutral200 hover:border-neutral200 hover:bg-neutral200 hover:text-black focus:border-neutral200 focus:bg-white focus:text-black",
        outline: "bg-white before:bg-brandSecondary text-black border-grey300 hover:border-brandSecondary focus:border-brandSecondary hover:bg-white focus:bg-brandSecondary hover:text-white focus:text-white",
        danger: "bg-brandError before:bg-white text-white border-red hover:border-brandError focus:border-red hover:bg-brandError focus:bg-brandSecondary hover:text-brandError focus:text-red",
        voila: "bg-voila before:bg-white text-grey700 border-voila hover:border-voila focus:border-voila hover:bg-voila focus:bg-voila hover:text-voila focus:text-red",
        icon: "border-none"
      },
      size: {
        small: "text-sm px-3 py-1.5",
        medium: "text-base px-4 py-2",
        large: "text-lg px-6 py-3",
        none: "",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50 text-black bg-grey300 border-grey300 hover:border-grey300 before:bg-grey300 hover:bg-grey300",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      rounded: "full",
      disabled: false,
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    children: ReactNode;
  };

/**
 * Button component with hover effect and rounded corners.
 *
 * @param {ButtonProps} props - Props for the button.
 * @returns {JSX.Element} The rendered Button component.
 */
export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  rounded,
  disabled = false,
  asChild,
  children,
  ...props
}) => {
  if (asChild && React.isValidElement(children)) {
    // Narrow down the child element
    const child = children as React.ReactElement<
      React.HTMLAttributes<HTMLElement>
    >;

    // Pass `disabled` only when the element supports it
    const filteredProps = {
      ...props,
      className: cn(
        buttonVariants({ variant, size, rounded, disabled }),
        child.props.className // Merge child className
      ),
      ...(child.type === "button" && { disabled }), // Apply only if the child is a <button>
    };

    return React.cloneElement(child, filteredProps);
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, disabled }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
