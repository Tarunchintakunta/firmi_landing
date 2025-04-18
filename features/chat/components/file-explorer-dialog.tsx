import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@/components/custom";
import FileList from "./file-list";
import { FileInfo } from "./types";

interface FileExplorerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  files?: FileInfo[];
  isLoading: boolean;
  formatFileSize: (bytes: number) => string;
  handleFileDownload: (filepath: string) => void;
  onUploadClick: () => void;
}

export const FileExplorerDialog: React.FC<FileExplorerDialogProps> = ({
  open,
  onOpenChange,
  files,
  isLoading,
  formatFileSize,
  handleFileDownload,
  onUploadClick,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-3xl">
      <DialogHeader>
        <DialogTitle>Files</DialogTitle>
      </DialogHeader>

      {isLoading ? (
        <div className="flex justify-center p-4">
          <CircularProgress />
        </div>
      ) : files && files.length > 0 ? (
        <FileList
          files={files}
          handleFileDownload={handleFileDownload}
          formatFileSize={formatFileSize}
        />
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2 py-8">
          <p className="text-center text-sm text-muted-foreground">
            No files found. Upload a file to get started.
          </p>
          <Button onClick={onUploadClick}>Upload File</Button>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

export default FileExplorerDialog;
