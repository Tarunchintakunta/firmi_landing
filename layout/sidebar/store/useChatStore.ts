import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Ticker {
  tickerName: string;
}

interface ChatMessage {
  label: string; // 'user' or 'Ai'
  content: string;
  chatId: string; // tickerName
}

interface ChatStore {
  // Tickers/Chat History
  chatHistory: Ticker[];
  selectedChat: string | null;

  // Messages
  messages: ChatMessage[];

  // UI States
  isCreatingNewChat: boolean;
  isDeletingChat: boolean;
  isDeletingAllChats: boolean;
  isShowingFileExplorer: boolean;

  // Actions
  setSelectedChat: (tickerName: string | null) => void;
  setChatHistory: (chatHistory: Ticker[]) => void;
  addChat: (tickerName: string) => void;
  removeChat: (tickerName: string) => void;
  clearAllChats: () => void;

  setMessages: (messages: ChatMessage[]) => void;
  addMessage: (message: ChatMessage) => void;

  // UI Actions
  setIsCreatingNewChat: (isCreating: boolean) => void;
  setIsDeletingChat: (isDeleting: boolean) => void;
  setIsDeletingAllChats: (isDeleting: boolean) => void;
  setIsShowingFileExplorer: (isShowing: boolean) => void;

  toggleIsDeletingChat: () => void;
  toggleIsDeletingAllChats: () => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      // Initial states
      chatHistory: [],
      selectedChat: null,
      messages: [],

      isCreatingNewChat: false,
      isDeletingChat: false,
      isDeletingAllChats: false,
      isShowingFileExplorer: false,

      // Actions
      setSelectedChat: (tickerName) => set({ selectedChat: tickerName }),

      setChatHistory: (chatHistory) => set({ chatHistory }),

      addChat: (tickerName) =>
        set((state) => ({
          chatHistory: [{ tickerName }, ...state.chatHistory],
          selectedChat: tickerName,
        })),

      removeChat: (tickerName) =>
        set((state) => {
          const filteredHistory = state.chatHistory.filter(
            (chat) => chat.tickerName !== tickerName
          );

          const newSelectedChat =
            state.selectedChat === tickerName
              ? filteredHistory.length > 0
                ? filteredHistory[0].tickerName
                : null
              : state.selectedChat;

          return {
            chatHistory: filteredHistory,
            selectedChat: newSelectedChat,
            // Also filter out messages from the deleted chat
            messages: state.messages.filter((msg) => msg.chatId !== tickerName),
          };
        }),

      clearAllChats: () =>
        set({
          chatHistory: [],
          messages: [],
          selectedChat: null,
        }),

      setMessages: (messages) => set({ messages }),

      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),

      // UI Actions
      setIsCreatingNewChat: (isCreating) =>
        set({ isCreatingNewChat: isCreating }),
      setIsDeletingChat: (isDeleting) => set({ isDeletingChat: isDeleting }),
      setIsDeletingAllChats: (isDeleting) =>
        set({ isDeletingAllChats: isDeleting }),
      setIsShowingFileExplorer: (isShowing) =>
        set({ isShowingFileExplorer: isShowing }),

      toggleIsDeletingChat: () =>
        set((state) => ({ isDeletingChat: !state.isDeletingChat })),
      toggleIsDeletingAllChats: () =>
        set((state) => ({ isDeletingAllChats: !state.isDeletingAllChats })),
    }),
    {
      name: "chat-storage",
    }
  )
);
