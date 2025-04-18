import React, { Dispatch, FC, ReactNode, Ref, SetStateAction } from "react";
import { type ClassValue } from "clsx";

import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Input, InputProps } from "../ui/input";

import CustomTooltip from "./custom-tooltip";
import { LucideProps } from "lucide-react";
export type CustomInputProps = {
  value?: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
  endIcon?: ReactNode;
  tooltipData?: string;
  placeholder?: string;
  startIcon?: ReactNode;
  iconClassName?: string;
  errorClassName?: string;
  wrapperClassName?: string;
  error?: string | ReactNode;
  labelClassName?: ClassValue;
  containerClassName?: string;
  ref?: Ref<HTMLInputElement> | undefined;
  setState?: Dispatch<SetStateAction<string>>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<InputProps, "onChange" | "value" | "placeholder">;

export const CustomInput: FC<CustomInputProps> = ({
  label,
  error,
  endIcon,
  setState,
  onChange,
  startIcon,
  tooltipData,
  iconClassName,
  labelClassName,
  errorClassName,
  wrapperClassName,
  containerClassName,
  ...props
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setState && setState(e.target.value.trimStart());

  const iconWithClass =
    startIcon && React.isValidElement(startIcon)
      ? React.cloneElement(startIcon as React.ReactElement<LucideProps>, {
          className: cn(
            "absolute left-3 top-2.6 size-4 text-text-subtlest",
            iconClassName
          ),
        })
      : null;

  return (
    <div className={cn("flex-1", containerClassName)}>
      {label ? (
        <div className="inline-flex items-center mb-1">
          <Label
            className={cn(
              "mr-2 text-text-inverse-subtlest capitalize ",
              labelClassName
            )}
          >
            {label}
          </Label>
          {tooltipData && <CustomTooltip content={tooltipData} />}
        </div>
      ) : null}
      <div className={cn("relative flex items-center gap-2", wrapperClassName)}>
        {startIcon && iconWithClass}
        <Input
          {...props}
          className={cn(
            "text-text-inverse-default/100 rounded-none bg-input-container/100 text-sm font-normal focus:border-input-stroke-active/100 border-2 border-input-stroke/100 focus-visible:ring-0 focus-visible:ring-offset-0",
            startIcon && "pl-10",
            props.className
          )}
          onChange={onChange ? onChange : handleInput}
        />
        {endIcon}
      </div>
      {error ? (
        <p
          className={cn(
            "mb-2 text-sm font-medium text-destructive text-start",
            errorClassName
          )}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
};
