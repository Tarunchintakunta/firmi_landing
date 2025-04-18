"use client";

import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { DownloadIcon, RefreshCwIcon } from "lucide-react";

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/custom";
import PreUI from "@/components/component/preUI";
import { Spinner } from "@/components/ui/spinner";
import InlineAlert from "@/components/component/inline-alert";
import { useFiles, useDownloadFileMutation } from "@/hooks/api";

import { FileUpload } from "./components/file-upload";
import { EmptyState } from "./components/empty-state";
import { FileDetailsDialog } from "./components/file-details-dialog";
import { formatFileSize, getFileIcon, getFileTypeName } from "./lib/file-utils";

const Files = () => {
  const { data: session } = useSession();
  const {
    refetch,
    isError,
    isLoading,
    isFetching,
    data: files,
  } = useFiles(session?.user?.email || "");
  const downloadFileMutation = useDownloadFileMutation();

  const fileUploadRef = useRef<HTMLDivElement>(null);

  const handleDownload = (filepath: string) =>
    downloadFileMutation.mutate({ filepath });

  const handleRefresh = () => refetch();

  const scrollToUpload = () =>
    fileUploadRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <div className="grid gap-6">
        <div ref={fileUploadRef}>
          <FileUpload onSuccess={handleRefresh} />
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-2xl">Your Files</CardTitle>
              <CardDescription>
                {session?.user?.email
                  ? `Files for ${session.user.email}`
                  : "Manage your uploaded files"}
              </CardDescription>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleRefresh}
              startIcon={isFetching ? <Spinner /> : <RefreshCwIcon />}
            >
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            <PreUI
              error={isError}
              onClick={refetch}
              loading={isLoading}
              isLength={!files?.length}
              isCustomLoading={<Spinner />}
              customLengthUI={
                <EmptyState
                  onAction={scrollToUpload}
                  title="No files available"
                  description="You haven't uploaded any files yet. Upload your first file to get started."
                />
              }
              customErrorUI={
                <InlineAlert variant="error" message="Error loading files" />
              }
            >
              <Table>
                <TableCaption>A list of all your uploaded files.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {files?.map((file) => {
                    const FileIcon = getFileIcon(file.name);
                    return (
                      <TableRow key={file.id}>
                        <TableCell className="font-medium flex items-center">
                          <FileIcon className="mr-2 h-4 w-4" />
                          {file.name}
                        </TableCell>
                        <TableCell>{getFileTypeName(file.name)}</TableCell>
                        <TableCell>{formatFileSize(file.size)}</TableCell>
                        <TableCell>
                          {file.uploadedAt
                            ? format(
                                new Date(file.uploadedAt),
                                "MMM d, yyyy h:mm a"
                              )
                            : "Unknown"}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <FileDetailsDialog file={file} />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDownload(file.filepath)}
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
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </PreUI>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Files;
