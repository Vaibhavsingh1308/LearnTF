import * as React from "react";
import { cn } from "../utils"; // classNames helper
export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "square" | "rounded" | "circle";
};

const variantClasses = {
  square: "before:rounded-[2px]",
  rounded: "before:rounded-md",
  circle: "before:rounded-full",
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant = "square", ...props }, ref) => {
    return (
      <input
        className={cn(
          "cursor-pointer h-[25px] w-[25px] border-none appearance-none relative before:content-[''] before:absolute before:top-0 before:left-0 before:border-solid before:border-2 before:border-brandBlack before:w-full before:h-full checked:before:bg-neutral-900 checked:after:content-[''] checked:after:w-[14px] checked:after:bg-brandBlack after:h-[7px] after:top-[8px] after:text-sm after:absolute after:-left-[1px] after:translate-x-1/2 after:text-brandWhite checked:after:border-l-2 after:border-l-solid after:border-l-brandWhite checked:after:border-b-2 after:border-b-solid after:border-b-brandWhite after:transform after:rotate-[-45deg]",
          variantClasses[variant],
          className
        )}
        ref={ref}
        type="checkbox"
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";
export { Checkbox };
