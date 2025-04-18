import React, { memo } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/custom";

interface InlineAlertProps {
  message: string;
  className?: string;
  onRetry?: () => void;
  icon?: React.ReactNode;
  retryButtonLabel?: string;
  variant?: "error" | "warning" | "info" | "success";
}

const InlineAlert: React.FC<InlineAlertProps> = ({
  message,
  onRetry,
  className = "",
  variant = "error",
  retryButtonLabel = "Retry",
  icon = <AlertCircle className="w-5 h-5" />,
}) => {
  const variantStyles = {
    info: "bg-info/10 border-info text-info",
    warning: "bg-warning/10 border-warning text-warning",
    success: "bg-success/10 border-success text-success",
    error: "bg-destructive/10 border-destructive text-destructive",
  };

  const buttonVariantStyles = {
    info: "bg-info text-white hover:bg-info-dark",
    success: "bg-success text-white hover:bg-success-dark",
    warning: "bg-warning text-black hover:bg-warning-dark",
    error: "hover:bg-destructive hover:text-destructive-foreground",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-between w-full p-1.5 space-x-4 border rounded-md",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span className="text-sm font-medium">{message}</span>
      </div>
      {onRetry && (
        <Button
          size="sm"
          variant="outline"
          onClick={onRetry}
          startIcon={<RefreshCw className="size-3" />}
          className={cn(
            "hover:bg-opacity-20 h-8 text-sm",
            buttonVariantStyles[variant]
          )}
        >
          {retryButtonLabel}
        </Button>
      )}
    </div>
  );
};

export default memo(InlineAlert);
