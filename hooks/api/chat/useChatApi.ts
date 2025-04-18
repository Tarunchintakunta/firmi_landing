import { useMutation, useQuery } from "@tanstack/react-query";

import config from "@/config";
import apiClient from "@/utils/service";
import { queryClient } from "@/providers/tanstack-providers";

// Types for chat operations
interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  createdAt: string;
  metadata?: Record<string, unknown>;
}

interface Chat {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

interface SaveChatRequest {
  chatId?: string;
  title?: string;
  messages: Omit<ChatMessage, "id" | "createdAt">[];
}

interface ChatResponse {
  success: boolean;
  message?: string;
  data?: Chat | Chat[];
}

// Query keys for cache management
export const chatKeys = {
  all: ["chats"] as const,
  lists: () => [...chatKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...chatKeys.lists(), { filters }] as const,
  details: () => [...chatKeys.all, "detail"] as const,
  detail: (id: string) => [...chatKeys.details(), id] as const,
};

/**
 * Hook for interacting with Chat APIs
 */

// Get all chats query
//
export const useChats = (enabled = true) => {
  const getChats = async (): Promise<Chat[]> => {
    const response = await apiClient.get(config.get_chat);
    return response.data;
  };

  return useQuery({
    enabled,
    queryFn: getChats,
    queryKey: chatKeys.lists(),
  });
};

// Get single chat by ID
export const useChatById = (chatId: string, enabled = true) => {
  const getChatById = async (): Promise<Chat> => {
    const response = await apiClient.get(`${config.get_chat}/${chatId}`);
    return response.data;
  };
  return useQuery({
    queryFn: getChatById,
    queryKey: chatKeys.detail(chatId),
    enabled: Boolean(chatId) && enabled,
  });
};

// Save chat mutation
export const useSaveChatMutation = () => {
  const saveChat = async (chatData: SaveChatRequest): Promise<ChatResponse> => {
    const response = await apiClient.post(config.save_chat, chatData);
    return response.data;
  };

  return useMutation<ChatResponse, Error, SaveChatRequest>({
    mutationFn: saveChat,
    onSuccess: (data) => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: chatKeys.lists() });

      // If we have a chat ID, also invalidate the specific chat detail
      if (data.data && "id" in data.data) {
        queryClient.invalidateQueries({
          queryKey: chatKeys.detail((data.data as Chat).id),
        });
      }
    },
  });
};
