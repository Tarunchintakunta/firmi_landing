import { useMutation, useQuery } from "@tanstack/react-query";

import config from "@/config";
import apiClient from "@/utils/service";
import { queryClient } from "@/providers/tanstack-providers";

// Types for file operations
interface FileUploadResponse {
  success: boolean;
  filepath: string;
  filename: string;
  [key: string]: unknown;
}

interface FileInfo {
  id: string;
  name: string;
  filepath: string;
  size: number;
  uploadedAt: string;
  [key: string]: unknown;
}

// Query keys for cache management
export const filesKeys = {
  all: ["files"] as const,
  lists: () => [...filesKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...filesKeys.lists(), { filters }] as const,
  details: () => [...filesKeys.all, "detail"] as const,
  detail: (id: string) => [...filesKeys.details(), id] as const,
};

// Get list of files query
export const useFiles = (user_id: string) => {
  const getFiles = async (): Promise<FileInfo[]> => {
    const response = await apiClient.get(`files?user_id=${user_id}`);
    return response.data;
  };

  return useQuery({
    queryFn: getFiles,
    enabled: !!user_id,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: 1000 * 60 * 5, // 5 minutes
    queryKey: filesKeys.lists(),
  });
};

// Upload file mutation
export const useUploadFileMutation = () => {
  const uploadFile = async ({
    file,
    additionalData,
  }: {
    file: File;
    additionalData?: Record<string, unknown>;
  }): Promise<FileUploadResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    // Add any additional data if provided
    if (additionalData) {
      Object.entries(additionalData).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
    }

    const response = await apiClient.post(config.file_upload, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  };

  return useMutation<
    FileUploadResponse,
    Error,
    { file: File; additionalData?: Record<string, unknown> }
  >({
    mutationFn: uploadFile,
    onSuccess: () => {
      // Invalidate files list cache to trigger a refresh
      queryClient.invalidateQueries({ queryKey: filesKeys.lists() });
    },
  });
};

// Download file mutation
export const useDownloadFileMutation = () => {
  const downloadFile = async ({
    filepath,
  }: {
    filepath: string;
  }): Promise<FileUploadResponse> => {
    const url = config.download_file.replace(
      "{filepath:path}",
      encodeURIComponent(filepath)
    );

    const response = await apiClient.get(url, {
      responseType: "blob",
    });

    // Create a download link and trigger the download
    const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
    const filename = filepath.split("/").pop() || "downloaded-file";

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();

    // Clean up
    window.URL.revokeObjectURL(downloadUrl);
    document.body.removeChild(link);

    return { success: true, filename, filepath };
  };

  return useMutation<FileUploadResponse, Error, { filepath: string }>({
    mutationFn: downloadFile,
  });
};
