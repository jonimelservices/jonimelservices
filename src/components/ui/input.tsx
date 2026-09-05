import * as React from "react";
import { cn } from "@/lib/utils";

const fieldClass =
  "flex h-11 w-full rounded-md bg-surface px-3.5 text-base text-fg shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 ease-out placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:shadow-[var(--shadow-border-hover)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(fieldClass, className)} ref={ref} {...props} />;
  },
);
Input.displayName = "Input";

export { Input, fieldClass };
