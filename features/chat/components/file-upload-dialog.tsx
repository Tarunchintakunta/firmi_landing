import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircularProgress } from "@/components/custom";

interface FileUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedFiles: File[];
  uploadStatus: "idle" | "loading" | "success" | "error";
  onUpload: () => void;
  onCancel: () => void;
}

export const FileUploadDialog: React.FC<FileUploadDialogProps> = ({
  open,
  onOpenChange,
  selectedFiles,
  uploadStatus,
  onUpload,
  onCancel,
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload Files</DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium">Selected Files:</h4>
          <ul className="list-inside list-disc space-y-1">
            {selectedFiles.map((file, index) => (
              <li key={index} className="text-sm">
                {file.name}
              </li>
            ))}
          </ul>
        </div>

        {uploadStatus === "loading" ? (
          <div className="flex items-center justify-center space-x-2">
            <CircularProgress />
            <span>
              Uploading {selectedFiles.map((file) => file.name).join(", ")}
              ...
            </span>
          </div>
        ) : uploadStatus === "success" ? (
          <div className="flex items-center text-green-600 justify-center space-x-2">
            <span>
              Successfully uploaded{" "}
              {selectedFiles.length > 0
                ? selectedFiles.map((file) => file.name).join(", ")
                : "files"}
              !
            </span>
          </div>
        ) : uploadStatus === "error" ? (
          <div className="text-red-500 text-center">
            Upload failed. Please try again.
          </div>
        ) : (
          <div className="flex justify-center space-x-2">
            <Button onClick={onUpload}>Upload</Button>
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </DialogContent>
  </Dialog>
);

export default FileUploadDialog;
