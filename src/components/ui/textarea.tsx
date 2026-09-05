import * as React from "react";
import { cn } from "@/lib/utils";
import { fieldClass } from "@/components/ui/input";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(fieldClass, "h-auto min-h-32 py-3 resize-y", className)}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
