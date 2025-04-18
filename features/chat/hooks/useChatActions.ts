import { useCallback } from "react";
import { ChatMessage, Chat } from "../components/types";
import {
  useChats,
  useChatById,
  useSaveChatMutation,
} from "@/hooks/api/chat/useChatApi";
import { useQueryLlmMutation } from "@/hooks/api/llm/useLlmApi";
import {
  useFiles,
  useUploadFileMutation,
  useDownloadFileMutation,
} from "@/hooks/api";

export const useChatActions = (
  userId: string,
  tickername: string,
  input: string,
  currentChat: string | null,
  mentionedCompanies: string[],
  updateUiState: (updates: any) => void,
  setInput: (input: string) => void,
  updateMentionState: (updates: any) => void
) => {
  // API Hooks
  const { data: chats, isLoading: chatsLoading } = useChats();
  const { data: currentChatData, isLoading: currentChatLoading } = useChatById(
    currentChat || ""
  );
  const { mutateAsync: saveChatMutation } = useSaveChatMutation();
  const { mutateAsync: queryLlm } = useQueryLlmMutation();
  const { data: files, isLoading: filesLoading } = useFiles();
  const { mutateAsync: uploadFile } = useUploadFileMutation();
  const { mutateAsync: downloadFile } = useDownloadFileMutation();

  // Send a message
  const handleSendMessage = useCallback(async () => {
    if (!input.trim()) return;

    try {
      updateUiState({ isLoading: true, error: null });

      const newMessage: Omit<ChatMessage, "id" | "createdAt"> = {
        role: "user",
        content: input,
        metadata: {
          mentionedCompanies,
          ticker: tickername,
        },
      };

      const saveResponse = await saveChatMutation({
        chatId: currentChat || undefined,
        title: currentChat ? undefined : `Chat with ${tickername}`,
        messages: currentChatData
          ? [...currentChatData.messages, newMessage]
          : [newMessage],
      });

      // Get the chat ID if it's a new chat
      const chatId =
        currentChat ||
        (saveResponse.data && "id" in saveResponse.data
          ? (saveResponse.data as Chat).id
          : null);

      // Query LLM for response
      const llmResponse = await queryLlm({
        prompt: input,
        conversationId: chatId || undefined,
        tickername,
        mentionedCompanies,
      });

      // Save assistant response
      const assistantMessage: Omit<ChatMessage, "id" | "createdAt"> = {
        role: "assistant",
        content: llmResponse.text,
        metadata: {
          messageId: llmResponse.messageId,
        },
      };

      await saveChatMutation({
        chatId: chatId || undefined,
        messages: currentChatData
          ? [...currentChatData.messages, newMessage, assistantMessage]
          : [newMessage, assistantMessage],
      });

      // Clear input and mentioned companies
      setInput("");
      updateMentionState({
        mentionedCompanies: [],
        showDropdown: false,
        atSymbolIndex: null,
      });
    } catch (err) {
      console.error("Error sending message:", err);
      updateUiState({ error: "Failed to send message. Please try again." });
    } finally {
      updateUiState({ isLoading: false });
    }
  }, [
    input,
    currentChat,
    tickername,
    currentChatData,
    mentionedCompanies,
    saveChatMutation,
    queryLlm,
    setInput,
    updateUiState,
    updateMentionState,
  ]);

  // Upload a file
  const handleFileUpload = useCallback(
    async (selectedFiles: File[]) => {
      try {
        updateUiState({ uploadStatus: "loading" });

        for (const file of selectedFiles) {
          await uploadFile({
            file,
            additionalData: {
              tickername,
              userId,
            },
          });
        }

        updateUiState({ uploadStatus: "success" });
        // Automatically close after success
        setTimeout(() => {
          updateUiState({
            fileUploadDialogOpen: false,
            uploadStatus: "idle",
          });
        }, 2000);
      } catch (err) {
        console.error("Error uploading files:", err);
        updateUiState({
          uploadStatus: "error",
          error: "Failed to upload files. Please try again.",
        });
      }
    },
    [tickername, userId, uploadFile, updateUiState]
  );

  // Download a file
  const handleFileDownload = useCallback(
    async (filepath: string) => {
      try {
        await downloadFile({ filepath });
      } catch (err) {
        console.error("Error downloading file:", err);
        updateUiState({ error: "Failed to download file. Please try again." });
      }
    },
    [downloadFile, updateUiState]
  );

  return {
    // Data
    chats,
    files,
    currentChatData,

    // Loading states
    chatsLoading,
    currentChatLoading,
    filesLoading,

    // Actions
    handleSendMessage,
    handleFileUpload,
    handleFileDownload,
  };
};

export default useChatActions;
