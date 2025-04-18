import React, { PropsWithChildren, ReactNode, memo } from "react";

import { cn } from "@/lib/utils";
import { CircularProgress } from "@/components/custom";
import { ErrorScreen, ErrorScreenProps } from "../error";
import NotFound from "../not-found";

interface PreUIInterFace extends ErrorScreenProps {
  size?: number;
  error?: boolean;
  loading?: boolean;
  isLength?: boolean;
  className?: string;
  children?: ReactNode;
  preUIClassNames?: string;
  loaderClassName?: string;
  customErrorUI?: ReactNode;
  customLengthUI?: ReactNode;
  isCustomLoading?: ReactNode;
}

const PreUIWrapper = memo(
  ({
    children,
    preUIClassNames,
  }: PropsWithChildren<{ preUIClassNames?: string }>) => (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full",
        preUIClassNames
      )}
    >
      {children}
    </div>
  )
);

PreUIWrapper.displayName = "PreU`Wrapper";

function PreUI({
  error,
  loading,
  isLength,
  children,
  className,
  customErrorUI,
  loaderClassName,
  preUIClassNames,
  isCustomLoading,
  customLengthUI = <NotFound />,
  ...errorScreenProps
}: PreUIInterFace) {
  const renderPreUI = () => {
    switch (true) {
      case loading:
        return (
          <PreUIWrapper preUIClassNames={preUIClassNames}>
            {isCustomLoading ?? (
              <CircularProgress classNames={loaderClassName} />
            )}
          </PreUIWrapper>
        );
      case error:
        return (
          <PreUIWrapper preUIClassNames={preUIClassNames}>
            {customErrorUI ?? <ErrorScreen {...errorScreenProps} />}
          </PreUIWrapper>
        );
      case isLength:
        return (
          <PreUIWrapper preUIClassNames={preUIClassNames}>
            {customLengthUI}
          </PreUIWrapper>
        );

      default:
        return <div className={className}>{children}</div>;
    }
  };

  return renderPreUI();
}

export default memo(PreUI);
