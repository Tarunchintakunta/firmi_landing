import { useState, useCallback } from "react";
import { UIState, MentionState } from "../components/types";

export const useChatState = () => {
  const [input, setInput] = useState("");
  const [currentChat, setCurrentChat] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [companyList, setCompanyList] = useState<string[]>([]);

  // UI state
  const [uiState, setUiState] = useState<UIState>({
    isLoading: false,
    error: null,
    fileDialogOpen: false,
    fileUploadDialogOpen: false,
    uploadStatus: "idle",
  });

  // Mention state
  const [mentionState, setMentionState] = useState<MentionState>({
    showDropdown: false,
    filteredCompanies: [],
    atSymbolIndex: null,
    mentionedCompanies: [],
  });

  // Helper functions to update state
  const updateUiState = useCallback((updates: Partial<UIState>) => {
    setUiState((prev) => ({ ...prev, ...updates }));
  }, []);

  const updateMentionState = useCallback((updates: Partial<MentionState>) => {
    setMentionState((prev) => ({ ...prev, ...updates }));
  }, []);

  // Reset file upload state
  const resetFileUpload = useCallback(() => {
    setSelectedFiles([]);
    updateUiState({
      fileUploadDialogOpen: false,
      uploadStatus: "idle",
    });
  }, [updateUiState]);

  // Format utilities
  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  const formatTimestamp = useCallback((timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, []);

  return {
    // State
    input,
    setInput,
    currentChat,
    setCurrentChat,
    selectedFiles,
    setSelectedFiles,
    companyList,
    setCompanyList,
    uiState,
    mentionState,

    // State update helpers
    updateUiState,
    updateMentionState,
    resetFileUpload,

    // Utilities
    formatFileSize,
    formatTimestamp,
  };
};

export default useChatState;
