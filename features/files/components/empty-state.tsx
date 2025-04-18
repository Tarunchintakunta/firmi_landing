"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FolderIcon, UploadIcon } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title = "No files found",
  description = "Upload some files to see them here.",
  actionLabel = "Upload a file",
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-4">
        <FolderIcon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground mt-1 mb-4">{description}</p>
      {onAction && (
        <Button onClick={onAction}>
          <UploadIcon className="mr-2 h-4 w-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
