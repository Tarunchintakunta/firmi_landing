/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, ReactNode, SetStateAction, memo } from "react";
import { type ClassValue } from "clsx";

import { cn } from "@/lib/utils";
import { OptionsInterface } from "utility";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "../ui/select";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";

export interface SelectProps {
  value: any;
  placeholder: string;
  options: OptionsInterface[];
  setState: Dispatch<SetStateAction<any>>;
  disabled?: boolean;
  defaultValue?: string;
  noOptionsText?: string;
  wrapperClassName?: string;
  label?: string | ReactNode;
  error?: string | ReactNode;
  errorClassName?: ClassValue;
  labelClassName?: ClassValue;
  triggerClassName?: ClassValue;
  contentClassName?: ClassValue;
  selectItemClassName?: string;
}

const SelectComponent = ({
  label,
  value,
  error,
  options,
  setState,
  disabled,
  placeholder,
  defaultValue,
  noOptionsText,
  errorClassName,
  labelClassName,
  triggerClassName,
  contentClassName,
  wrapperClassName,
  selectItemClassName,
}: SelectProps) => {
  const handleSelectOption = (option: string) => setState(option);

  return (
    <div className={wrapperClassName}>
      {label ? (
        <Label className={cn("mb-0", labelClassName)}>{label}</Label>
      ) : null}
      <Select
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        onValueChange={handleSelectOption}
      >
        <SelectTrigger className={cn("mb-0 capitalize", triggerClassName)}>
          <SelectValue {...{ placeholder }} className="px-1 line-clamp-1" />
        </SelectTrigger>
        <SelectContent
          className={cn(
            "rounded-md bg-input-container/100 text-text-inverse-default/100",
            contentClassName
          )}
        >
          <ScrollArea
            className={cn("rounded-md m-0 p-0 border-none", contentClassName)}
          >
            {options?.length ? (
              options.map(({ name, value }) => (
                <SelectItem
                  key={name}
                  value={value}
                  className={cn(
                    "capitalize h-8 rounded-lg border-none",
                    selectItemClassName
                  )}
                >
                  {name}
                </SelectItem>
              ))
            ) : (
              <SelectItem
                disabled
                key="no-options"
                value="no-options"
                className={cn(
                  "h-8 rounded-lg border-none",
                  selectItemClassName
                )}
              >
                {noOptionsText ?? "No options exist"}
              </SelectItem>
            )}
          </ScrollArea>
        </SelectContent>
      </Select>
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

export default memo(SelectComponent);
