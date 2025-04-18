"use client";

import React from "react";
import { toast } from "sonner";
import { Trash } from "lucide-react";
import { useSession } from "next-auth/react";

import { useDeleteTickerMutation } from "@/hooks/api";
import { Button, ConfirmationDialog } from "@/components/custom";

import { useChatStore } from "../store/useChatStore";

export function ClearConversationDialog() {
  const { data: session } = useSession();
  const userId = session?.user?.email;

  const {
    selectedChat,
    removeChat,
    isDeletingChat,
    setIsDeletingChat,
    toggleIsDeletingChat,
  } = useChatStore();

  const { mutateAsync: deleteTicker, isPending: isDeletingTicker } =
    useDeleteTickerMutation(userId || "");

  const handleClear = async () => {
    if (!userId || !selectedChat) {
      console.error("User ID or selected chat not available");
      setIsDeletingChat(false);
      return;
    }

    toast.promise(deleteTicker(selectedChat), {
      loading: "Deleting conversation...",
      success: () => {
        removeChat(selectedChat);
        setIsDeletingChat(false);

        return "Conversation deleted successfully";
      },
      error: "Failed to delete conversation",
    });
  };

  return (
    <ConfirmationDialog
      title="Clear Conversation"
      handleSubmit={handleClear}
      modalOpen={isDeletingChat}
      setModalOpen={setIsDeletingChat}
      triggerButton={
        <Button
          size="sm"
          variant="ghost"
          isLoading={isDeletingTicker}
          onClick={toggleIsDeletingChat}
          className="justify-start text-destructive py-0.5"
          startIcon={<Trash className="text-destructive" />}
        >
          Clear Conversation
        </Button>
      }
      description={
        <>
          Are you sure you want to clear all messages for
          <span className="font-semibold">{selectedChat}</span>? This action
          cannot be undone.
        </>
      }
    />
  );
}
