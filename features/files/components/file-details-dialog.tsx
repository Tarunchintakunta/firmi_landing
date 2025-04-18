"use client";

import React from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InfoIcon, DownloadIcon, CalendarIcon, ScaleIcon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useDownloadFileMutation } from "@/hooks/api";
import {
  formatFileSize,
  getFileIcon,
  getFileTypeName,
} from "../lib/file-utils";

interface FileInfo {
  id: string;
  name: string;
  filepath: string;
  size: number;
  uploadedAt: string;
  [key: string]: unknown;
}

interface FileDetailsDialogProps {
  file: FileInfo;
  trigger?: React.ReactNode;
}

export function FileDetailsDialog({ file, trigger }: FileDetailsDialogProps) {
  const downloadFileMutation = useDownloadFileMutation();
  const FileIcon = getFileIcon(file.name);

  const handleDownload = () => {
    downloadFileMutation.mutate({ filepath: file.filepath });
  };

  const getFileExtension = (filename: string) => {
    return filename.split(".").pop()?.toLowerCase() || "";
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="ghost" size="icon">
            <InfoIcon className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileIcon className="mr-2 h-5 w-5" />
            {file.name}
          </DialogTitle>
          <DialogDescription>
            {getFileTypeName(file.name)} file details
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground">Type</span>
              <span className="font-medium">{getFileTypeName(file.name)}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground">Extension</span>
              <span className="font-medium">{getFileExtension(file.name)}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground flex items-center">
                <ScaleIcon className="mr-1 h-3 w-3" /> Size
              </span>
              <span className="font-medium">{formatFileSize(file.size)}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-muted-foreground flex items-center">
                <CalendarIcon className="mr-1 h-3 w-3" /> Uploaded
              </span>
              <span className="font-medium">
                {file.uploadedAt
                  ? format(new Date(file.uploadedAt), "MMM d, yyyy h:mm a")
                  : "Unknown"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={handleDownload}
            disabled={downloadFileMutation.isPending}
          >
            {downloadFileMutation.isPending ? (
              <Spinner className="mr-2 h-4 w-4" />
            ) : (
              <DownloadIcon className="mr-2 h-4 w-4" />
            )}
            Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
