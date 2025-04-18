"use client";

import React, { memo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AlertCircle, MessageSquareText } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTickers } from "@/hooks/api";
import { Button } from "@/components/custom";
import PreUI from "@/components/component/preUI";
import { Skeleton } from "@/components/ui/skeleton";
import InlineAlert from "@/components/component/inline-alert";

import { useChatStore } from "../store/useChatStore";
import { ScrollArea } from "@/components/ui/scroll-area";

const LoadingChats = memo(() => (
  <div className="flex items-center justify-center py-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <Skeleton key={index} className="h-8 w-full" />
    ))}
  </div>
));

LoadingChats.displayName = "LoadingChats";

const NoChats = memo(() => (
  <div className="flex flex-col items-center justify-center h-full py-10">
    <MessageSquareText className="h-8 w-8 text-muted-foreground mb-2" />
    <p className="text-sm text-muted-foreground text-center">
      No conversations yet
    </p>
  </div>
));

NoChats.displayName = "NoChats";

export function ChatList() {
  const router = useRouter();
  const { data: session } = useSession();

  const { chatHistory, selectedChat, setSelectedChat } = useChatStore();

  const {
    isError,
    isPending,
    data: tickers,
  } = useTickers(session?.user?.email || "");

  const handleSelectChat = (tickerName: string) => {
    setSelectedChat(tickerName);
    router.push(`/chat/${tickerName}`);
  };

  return (
    <PreUI
      error={isError}
      loading={isPending}
      className="mt-2 space-y-1 max-w-full"
      customLengthUI={<NoChats />}
      isLength={!chatHistory.length}
      customErrorUI={
        <InlineAlert
          variant="error"
          icon={<AlertCircle />}
          message="Error loading chats"
        />
      }
      isCustomLoading={<LoadingChats />}
    >
      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
        <span className="data-[collapsed=true]:hidden">
          Recent Conversations
        </span>
      </div>
      <ScrollArea className="h-[calc(100vh-34.3rem)] space-y-1 py-2 -pr-3 -mr-3 max-w-full">
        {tickers?.tickers.map((chat) => (
          <div key={chat} className="flex items-center group">
            <Button
              variant={selectedChat === chat ? "secondary" : "ghost"}
              className={cn(
                "flex-1 justify-start text-sm font-medium transition-colors hover:bg-muted-foreground/10",
                selectedChat === chat ? "bg-secondary" : "transparent"
              )}
              onClick={() => handleSelectChat(chat)}
              startIcon={<MessageSquareText className="mr-2 h-4 w-4" />}
            >
              <span>{chat}</span>
            </Button>
            {/* <Button
              size="icon"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedChat(chat);
                setIsDeletingChat(true);
              }}
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Delete</span>
            </Button> */}
          </div>
        ))}
      </ScrollArea>
    </PreUI>
  );
}
