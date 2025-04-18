import React, { memo } from "react";

import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

interface CustomSwitchProps {
  title: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  description?: string;
  labelClassName?: string;
  containerClassName?: string;
  descriptionClassName?: string;
}

const CustomSwitch = ({
  title,
  checked,
  onChange,
  className,
  description,
  labelClassName,
  containerClassName,
  descriptionClassName,
}: CustomSwitchProps) => (
  <div className={cn(containerClassName)}>
    <div className={cn("flex items-center gap-2")}>
      <Label
        htmlFor={title}
        className={cn("text-xs text-text-inverse-default/100", labelClassName)}
      >
        {title}
      </Label>
      <Switch
        id={title}
        checked={checked}
        onCheckedChange={onChange}
        className={cn(
          "h-6 w-11 cursor-pointer rounded-full border-2 border-transparent",
          className
        )}
      />
    </div>
    <p className={cn("text-xs text-muted-foreground", descriptionClassName)}>
      {description}
    </p>
  </div>
);

export default memo(CustomSwitch);
