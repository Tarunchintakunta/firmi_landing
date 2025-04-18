import React, { ReactNode } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, ButtonProps } from "../ui/button";

export interface CustomButtonProps
  extends Omit<ButtonProps, "onClick" | "children"> {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(
  (
    { endIcon, onClick, children, startIcon, className, isLoading, ...props },
    ref
  ) => (
    <Button
      ref={ref}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 justify-center font-normal leading-normal",
        className
      )}
      {...props}
    >
      {startIcon}
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
      {endIcon}
    </Button>
  )
);

CustomButton.displayName = "CustomButton";
