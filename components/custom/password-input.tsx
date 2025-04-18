import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Input } from "../custom";
import { InputProps } from "../ui/input";

type PasswordInputProps = {
  value?: string;
  placeholder?: string;
  setState?: (value: string) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<InputProps, "onChange" | "value" | "placeholder">;

export function PasswordInput({
  value,
  setState,
  onChange,
  placeholder,
  ...props
}: PasswordInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleInput = (setInput: (value: string) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  };

  const togglePasswordVisibility = () => setPasswordVisible((prev) => !prev);

  return (
    <div className="relative flex-1">
      <Input
        type={passwordVisible ? "text" : "password"}
        onChange={onChange ? onChange : handleInput(setState!)}
        value={value}
        placeholder={placeholder}
        {...props}
        className={cn("pr-8", props.className)}
      />
      <label
        className="absolute right-0 mr-3 transform -translate-y-1/2 cursor-pointer top-1/2"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? <EyeIcon size={17} /> : <EyeOffIcon size={17} />}
      </label>
    </div>
  );
}
