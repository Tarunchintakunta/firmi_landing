import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileInfo } from "./types";

interface FileListProps {
  files: FileInfo[];
  handleFileDownload: (filepath: string) => void;
  formatFileSize: (bytes: number) => string;
}

export const FileList: React.FC<FileListProps> = ({
  files,
  handleFileDownload,
  formatFileSize,
}) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Size</TableHead>
        <TableHead>Uploaded</TableHead>
        <TableHead className="w-[100px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {files.map((file) => (
        <TableRow key={file.id}>
          <TableCell>{file.name}</TableCell>
          <TableCell>{formatFileSize(file.size)}</TableCell>
          <TableCell>
            {new Date(file.uploadedAt).toLocaleDateString()}
          </TableCell>
          <TableCell>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => handleFileDownload(file.filepath)}
            >
              <Download className="h-4 w-4" />
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default FileList;
