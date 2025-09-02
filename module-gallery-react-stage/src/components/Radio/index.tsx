import * as React from "react";
import { cn } from "../utils";

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          "cursor-pointer h-[22px] w-[22px] border-none appearance-none relative before:content-[''] before:absolute before:top-0 before:left-0 before:border-solid before:rounded-full before:border-2 before:w-full before:h-full after:content-[''] after:w-3 after:h-3 checked:after:bg-neutral-900 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
          className
        )}
        ref={ref}
        type="radio"
        {...props}
      />
    );
  }
);

Radio.displayName = "Radio";

export { Radio };

