"use client";

import React, { useEffect } from "react";

import {
  ChatMessages,
  ChatInput,
  FileExplorerDialog,
  FileUploadDialog,
} from "./components";
import { useChatState, useChatActions } from "./hooks";
import { useSession } from "next-auth/react";

export interface ChatInterfaceProps {
  tickername: string;
}

export function ChatInterface({ tickername }: ChatInterfaceProps) {
  const { data: session } = useSession();
  const {
    input,
    setInput,
    currentChat,
    selectedFiles,
    setSelectedFiles,
    companyList,
    setCompanyList,
    uiState,
    mentionState,
    updateUiState,
    updateMentionState,
    resetFileUpload,
    formatFileSize,
    formatTimestamp,
  } = useChatState();

  const {
    files,
    currentChatData,
    currentChatLoading,
    filesLoading,
    handleSendMessage,
    handleFileUpload,
    handleFileDownload,
  } = useChatActions(
    session?.user?.email ?? "",
    tickername,
    input,
    currentChat,
    mentionState.mentionedCompanies,
    updateUiState,
    setInput,
    updateMentionState
  );

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    if (mentionState.atSymbolIndex !== null) {
      const searchTerm = inputValue.slice(mentionState.atSymbolIndex + 1);

      if (searchTerm.length > 0) {
        const filtered = companyList.filter((company) =>
          company.toLowerCase().includes(searchTerm.toLowerCase())
        );
        updateMentionState({
          filteredCompanies: filtered,
          showDropdown: filtered.length > 0,
        });
      } else {
        updateMentionState({
          filteredCompanies: companyList,
          showDropdown: true,
        });
      }
    }
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (
        mentionState.showDropdown &&
        mentionState.filteredCompanies.length === 1
      ) {
        handleCompanySelect(mentionState.filteredCompanies[0]);
      } else {
        handleSendMessage();
      }
    } else if (e.key === "@") {
      const textareaElement = e.target as HTMLTextAreaElement;
      updateMentionState({
        atSymbolIndex: textareaElement.selectionStart,
        filteredCompanies: companyList,
        showDropdown: true,
      });
    }
  };

  // Handle company selection
  const handleCompanySelect = (company: string) => {
    if (mentionState.atSymbolIndex !== null) {
      const beforeAt = input.slice(0, mentionState.atSymbolIndex);
      const afterAt = input.slice(mentionState.atSymbolIndex + 1);
      const searchEndIndex = afterAt.search(/\s|$/);
      const newInput =
        beforeAt + "@" + company + " " + afterAt.slice(searchEndIndex);

      setInput(newInput);
      updateMentionState({
        mentionedCompanies: mentionState.mentionedCompanies.includes(company)
          ? mentionState.mentionedCompanies
          : [...mentionState.mentionedCompanies, company],
        showDropdown: false,
        atSymbolIndex: null,
      });
    }
  };

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const files = Array.from(event.target.files);

      const allowedTypes = [".pdf", ".txt", ".doc", ".docx", ".ppt", ".pptx"];
      const filteredFiles = files.filter((file) => {
        const extension = file.name
          .slice(file.name.lastIndexOf("."))
          .toLowerCase();
        return allowedTypes.some((type) => extension.endsWith(type));
      });

      if (filteredFiles.length > 0) {
        setSelectedFiles(filteredFiles);
        updateUiState({ fileUploadDialogOpen: true });
      } else {
        updateUiState({ error: "No files of allowed types were selected" });
      }
    }
  };

  // Load company list when userId changes
  useEffect(() => {
    if (session?.user?.email) {
      // In a real application, fetch this from an API
      setCompanyList(["AAPL", "MSFT", "GOOGL", "AMZN", "FB", "TSLA"]);
    }
  }, [session?.user?.email, setCompanyList]);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      {/* Messages */}
      <ChatMessages
        messages={currentChatData?.messages}
        isLoading={currentChatLoading}
        formatTimestamp={formatTimestamp}
      />

      {/* Input Area */}
      <ChatInput
        input={input}
        isLoading={uiState.isLoading}
        error={uiState.error}
        mentionState={mentionState}
        companyList={companyList}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onSendMessage={handleSendMessage}
        onFileChange={handleFileChange}
        onClearError={() => updateUiState({ error: null })}
        onCompanySelect={handleCompanySelect}
      />

      {/* File Explorer Dialog */}
      <FileExplorerDialog
        open={uiState.fileDialogOpen}
        onOpenChange={(open) => updateUiState({ fileDialogOpen: open })}
        files={files}
        isLoading={filesLoading}
        formatFileSize={formatFileSize}
        handleFileDownload={handleFileDownload}
        onUploadClick={() => {
          updateUiState({ fileDialogOpen: false });
          setTimeout(() => document.getElementById("fileInput")?.click(), 100);
        }}
      />

      {/* File Upload Dialog */}
      <FileUploadDialog
        open={uiState.fileUploadDialogOpen}
        onOpenChange={(open) => updateUiState({ fileUploadDialogOpen: open })}
        selectedFiles={selectedFiles}
        uploadStatus={uiState.uploadStatus}
        onUpload={() => handleFileUpload(selectedFiles)}
        onCancel={resetFileUpload}
      />

      {/* Hidden file input */}
      <input
        id="fileInput"
        type="file"
        multiple
        accept=".pdf,.txt,.doc,.docx,.ppt,.pptx"
        className="sr-only"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default ChatInterface;
