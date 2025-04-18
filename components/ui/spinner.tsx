import React from "react";
import { cn } from "@/lib/utils";
import { Loader2, LucideProps } from "lucide-react";

interface SpinnerProps extends Omit<LucideProps, "ref"> {
  size?: "default" | "sm" | "lg" | "xl";
}

export const Spinner = ({
  className,
  size = "default",
  ...props
}: SpinnerProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    default: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  return (
    <Loader2
      className={cn(
        "animate-spin text-muted-foreground",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
};
