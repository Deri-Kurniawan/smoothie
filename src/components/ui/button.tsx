import { forwardRef } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative bg-primary text-white font-montserrat font-semibold text-base leading-[130%] rounded-[30.5px] cursor-pointer transition-colors duration-300 min-w-[132px] min-h-[48px] outline outline-2",
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

export default Button;
