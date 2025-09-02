import * as React from "react"
import { cn } from "../utils"; 

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "border-solid border-[1px] border-grey500 p-4",
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
