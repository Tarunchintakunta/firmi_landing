import React, { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Label } from "../ui/label";
import { Textarea, TextareaProps } from "../ui/textarea";

export type CustomTextAreaProps = {
  label?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  errorClassName?: string;
  labelClassName?: string;
  error?: string | ReactNode;
  setState?: (value: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} & Omit<TextareaProps, "onChange" | "value" | "placeholder">;

export const CustomTextArea: FC<CustomTextAreaProps> = ({
  label,
  labelClassName,
  error,
  onChange,
  setState,
  placeholder,
  errorClassName,
  ...props
}) => {
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.trimStart();

    setState?.(value);
  };

  return (
    <div>
      {label ? (
        <Label
          className={cn(
            "capitalize text-text-inverse-subtlest ",
            labelClassName
          )}
        >
          {label}
        </Label>
      ) : null}
      <Textarea
        {...props}
        placeholder={placeholder}
        onChange={onChange ? onChange : handleInput}
        className={cn(
          "rounded-none text-sm font-normal mt-1 focus:border-input-stroke-active/100 border-2 border-input-stroke/100 focus-visible:ring-0 focus-visible:ring-offset-0 scrollbar",
          props.className
        )}
      />
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
