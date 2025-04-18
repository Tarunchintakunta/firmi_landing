"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { Plus } from "lucide-react";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { useSaveTickerMutation } from "@/hooks/api";
import { Button, Input } from "@/components/custom";

import { useChatStore } from "../store/useChatStore";

export function NewChatDialog() {
  const { data: session } = useSession();

  const userId = session?.user?.email;

  const [tickerName, setTickerName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { mutateAsync: saveTicker, isPending: isSavingTicker } =
    useSaveTickerMutation();
  const { chatHistory, addChat, isCreatingNewChat, setIsCreatingNewChat } =
    useChatStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const normalizedTicker = tickerName.trim().toUpperCase();

    if (!normalizedTicker) {
      setError("Ticker name cannot be empty.");
      return;
    }

    // TODO: this is moved to the backend
    if (chatHistory.some((chat) => chat.tickerName === normalizedTicker)) {
      setError("This ticker already exists.");
      return;
    }

    if (!userId) {
      setError("You must be logged in to create a new chat.");
      return;
    }

    try {
      // Save ticker to API
      await saveTicker({
        ticker: normalizedTicker,
        user_id: userId,
      });

      // Add to local state
      addChat(normalizedTicker);

      // Close dialog and reset
      setTickerName("");
      setError(null);
      setIsCreatingNewChat(false);
    } catch (error) {
      setError("Failed to create new chat. Please try again.");
      console.error("Error creating new chat:", error);
    }
  };

  return (
    <Dialog open={isCreatingNewChat} onOpenChange={setIsCreatingNewChat}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          startIcon={<Plus />}
          onClick={() => setIsCreatingNewChat(true)}
          className="justify-start text-sm font-medium transition-all w-full text-white mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
        >
          <span className="ml-2 data-[collapsed=true]:hidden">New Chat</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start New Chat</DialogTitle>
          <DialogDescription>
            Enter a ticker name to start a new conversation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <Input
              autoFocus
              id="ticker-name"
              label="Ticker Name"
              placeholder="e.g., AAPL, MSFT, GOOGL"
              value={tickerName}
              onChange={(e) => {
                setTickerName(e.target.value);
                setError(null); // Clear error when user types
              }}
              autoComplete="off"
              className="uppercase"
              error={error}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsCreatingNewChat(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              isLoading={isSavingTicker}
              disabled={isSavingTicker || !tickerName.trim()}
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
