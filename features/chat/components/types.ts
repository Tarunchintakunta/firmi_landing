export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  createdAt: string;
  metadata?: {
    mentionedCompanies?: string[];
    ticker?: string;
    messageId?: string;
    [key: string]: unknown;
  };
}

export interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface FileInfo {
  id: string;
  name: string;
  size: number;
  filepath: string;
  uploadedAt: string;
}

export interface UIState {
  isLoading: boolean;
  error: string | null;
  fileDialogOpen: boolean;
  fileUploadDialogOpen: boolean;
  uploadStatus: "idle" | "loading" | "success" | "error";
}

export interface MentionState {
  showDropdown: boolean;
  filteredCompanies: string[];
  atSymbolIndex: number | null;
  mentionedCompanies: string[];
}
