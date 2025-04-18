import { memo } from "react";
import Router from "next/router";

import { Button } from "@/components/ui/button";
import { MdOutlineOfflineBolt } from "react-icons/md";

export interface ErrorScreenProps {
  isText?: boolean;
  onClick?: () => void;
  actionLabel?: string;
  errorMessage?: string;
}

export const ErrorScreen = memo(
  ({
    isText,
    onClick,
    actionLabel,
    errorMessage = "Something went wrong.",
  }: ErrorScreenProps) => {
    const handleReFresh = () => Router.reload();

    if (isText)
      return (
        <p className="mt-2 text-2xl font-medium text-start text-text-inverse-default">
          {errorMessage}
        </p>
      );

    return (
      <div className="flex flex-col items-center justify-center px-4 space-x-12 md:flex-row md:gap-6 md:px-16">
        <div className="flex flex-col items-start max-w-lg text-left">
          <h1 className="text-2xl font-medium text-text-inverse-default">
            {errorMessage}
          </h1>
          <p className="text-2xl font-medium text-text-inverse-default">
            Please try again later.
          </p>

          <p className="mt-6 text-base font-normal text-text-inverse-subtle">
            We&apos;re working on it!
            <br />
            Something went wrong, but we&apos;re looking into it.
          </p>
          <Button
            className="p-4 mt-4 w-36"
            onClick={onClick ? onClick : handleReFresh}
          >
            {actionLabel ? actionLabel : onClick ? "Reload" : "Refresh"}
          </Button>
        </div>
        <MdOutlineOfflineBolt className="w-full max-w-[484px] h-[447px]" />
      </div>
    );
  }
);

ErrorScreen.displayName = "ErrorScreen";
