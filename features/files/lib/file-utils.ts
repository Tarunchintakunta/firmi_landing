/**
 * Utility functions for file operations
 */

import {
  FileTextIcon,
  FileSpreadsheetIcon,
  PresentationIcon,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  FileCodeIcon,
  ArchiveIcon,
  FileQuestionIcon,
} from "lucide-react";

// Map of file extensions to mime types
export const extensionToMimeType: Record<string, string> = {
  // Text
  txt: "text/plain",
  md: "text/markdown",
  csv: "text/csv",

  // Documents
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",

  // Spreadsheets
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

  // Presentations
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",

  // Images
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  svg: "image/svg+xml",

  // Audio
  mp3: "audio/mpeg",
  wav: "audio/wav",

  // Video
  mp4: "video/mp4",
  webm: "video/webm",

  // Code
  json: "application/json",
  js: "text/javascript",
  html: "text/html",
  css: "text/css",
  ts: "text/typescript",
  tsx: "text/typescript-jsx",
  jsx: "text/jsx",

  // Archives
  zip: "application/zip",
  rar: "application/vnd.rar",
  "7z": "application/x-7z-compressed",
  tar: "application/x-tar",
  gz: "application/gzip",
};

// Get file type from filename or path
export const getFileType = (filename: string): string => {
  const extension = filename.split(".").pop()?.toLowerCase() || "";
  return extensionToMimeType[extension] || "application/octet-stream";
};

// Get file icon based on mime type
export const getFileIcon = (filename: string) => {
  const mimeType = getFileType(filename);

  if (mimeType.startsWith("image/")) {
    return ImageIcon;
  } else if (mimeType.startsWith("video/")) {
    return VideoIcon;
  } else if (mimeType.startsWith("audio/")) {
    return MusicIcon;
  } else if (mimeType.startsWith("text/") || mimeType === "application/json") {
    if (
      mimeType.includes("html") ||
      mimeType.includes("css") ||
      mimeType.includes("javascript") ||
      mimeType.includes("json")
    ) {
      return FileCodeIcon;
    }
    return FileTextIcon;
  } else if (
    mimeType.includes("spreadsheet") ||
    mimeType.includes("excel") ||
    mimeType === "text/csv"
  ) {
    return FileSpreadsheetIcon;
  } else if (
    mimeType.includes("presentation") ||
    mimeType.includes("powerpoint")
  ) {
    return PresentationIcon;
  } else if (
    mimeType.includes("zip") ||
    mimeType.includes("compressed") ||
    mimeType.includes("archive")
  ) {
    return ArchiveIcon;
  } else if (
    mimeType.includes("document") ||
    mimeType.includes("pdf") ||
    mimeType.includes("word")
  ) {
    return FileTextIcon;
  }

  return FileQuestionIcon;
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

// Get a descriptive file type name based on mime type
export const getFileTypeName = (filename: string): string => {
  const mimeType = getFileType(filename);

  if (mimeType.startsWith("image/")) {
    return "Image";
  } else if (mimeType.startsWith("video/")) {
    return "Video";
  } else if (mimeType.startsWith("audio/")) {
    return "Audio";
  } else if (
    mimeType.includes("spreadsheet") ||
    mimeType.includes("excel") ||
    mimeType === "text/csv"
  ) {
    return "Spreadsheet";
  } else if (
    mimeType.includes("presentation") ||
    mimeType.includes("powerpoint")
  ) {
    return "Presentation";
  } else if (mimeType.includes("document") || mimeType.includes("word")) {
    return "Document";
  } else if (mimeType === "application/pdf") {
    return "PDF";
  } else if (
    mimeType.includes("zip") ||
    mimeType.includes("compressed") ||
    mimeType.includes("archive")
  ) {
    return "Archive";
  } else if (mimeType.startsWith("text/")) {
    if (
      mimeType.includes("html") ||
      mimeType.includes("css") ||
      mimeType.includes("javascript") ||
      mimeType.includes("typescript")
    ) {
      return "Code";
    }
    return "Text";
  }

  return "File";
};
