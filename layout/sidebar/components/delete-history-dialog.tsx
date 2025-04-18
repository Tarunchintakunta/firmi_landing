"use client";

import React from "react";
import { toast } from "sonner";
import { Trash } from "lucide-react";
import { useSession } from "next-auth/react";

import { useDeleteTickersMutation } from "@/hooks/api";
import { Button, ConfirmationDialog } from "@/components/custom";

import { useChatStore } from "../store/useChatStore";

export function DeleteHistoryDialog() {
  const { data: session } = useSession();
  const userId = session?.user?.email;

  const {
    clearAllChats,
    isDeletingAllChats,
    setIsDeletingAllChats,
    toggleIsDeletingAllChats,
  } = useChatStore();
  const { mutateAsync: deleteTickers, isPending: isDeletingTickers } =
    useDeleteTickersMutation(userId || "");

  const handleDelete = async () => {
    if (!userId) {
      console.error("User ID not available");
      setIsDeletingAllChats(false);
      return;
    }

    toast.promise(deleteTickers(), {
      loading: "Deleting history...",
      success: () => {
        clearAllChats();
        setIsDeletingAllChats(false);
        return "History deleted successfully";
      },
      error: "Failed to delete history",
    });
  };

  return (
    <ConfirmationDialog
      handleSubmit={handleDelete}
      modalOpen={isDeletingAllChats}
      title="Delete All Chat History"
      triggerButton={
        <Button
          size="sm"
          variant="ghost"
          isLoading={isDeletingTickers}
          onClick={toggleIsDeletingAllChats}
          className="justify-start text-destructive"
          startIcon={<Trash className="text-destructive" />}
        >
          Delete All Chat History
        </Button>
      }
      setModalOpen={setIsDeletingAllChats}
      description="This action cannot be undone. This will permanently delete all your
            chat history and associated data."
    />
  );
}
