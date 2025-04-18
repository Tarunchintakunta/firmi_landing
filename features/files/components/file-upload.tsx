"use client";

import React, { useState, useRef } from "react";
import { useUploadFileMutation } from "@/hooks/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import { UploadIcon } from "lucide-react";

interface FileUploadProps {
  onSuccess?: () => void;
}

export function FileUpload({ onSuccess }: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const uploadFileMutation = useUploadFileMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      await uploadFileMutation.mutateAsync({ file: selectedFile });
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      onSuccess?.();
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload File</CardTitle>
        <CardDescription>
          Upload your documents, spreadsheets, or presentations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {uploadFileMutation.isError && (
            <Alert variant="destructive">
              <AlertDescription>
                {uploadFileMutation.error?.message ||
                  "Failed to upload file. Please try again."}
              </AlertDescription>
            </Alert>
          )}

          <div className="flex items-center gap-4">
            <Input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <Button
              variant="outline"
              onClick={handleButtonClick}
              className="flex-1"
            >
              <UploadIcon className="mr-2 h-4 w-4" />
              {selectedFile ? selectedFile.name : "Choose File"}
            </Button>

            <Button
              onClick={handleUpload}
              disabled={!selectedFile || uploadFileMutation.isPending}
            >
              {uploadFileMutation.isPending ? (
                <>
                  <Spinner className="mr-2 h-4 w-4" />
                  Uploading...
                </>
              ) : (
                "Upload"
              )}
            </Button>
          </div>

          {selectedFile && (
            <div className="text-sm text-muted-foreground">
              Selected file: {selectedFile.name} (
              {(selectedFile.size / 1024).toFixed(2)} KB)
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
