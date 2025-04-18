import React, { useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircularProgress } from "@/components/custom";
import ChatMessageItem from "./chat-message-item";
import { ChatMessage } from "./types";

interface ChatMessagesProps {
  messages?: ChatMessage[];
  isLoading: boolean;
  formatTimestamp: (timestamp: string) => string;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
  messages,
  isLoading,
  formatTimestamp,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ScrollArea className="flex-1 p-4">
      <div className="mx-auto max-w-3xl space-y-4 pb-20">
        {isLoading ? (
          <div className="flex justify-center p-4">
            <CircularProgress />
          </div>
        ) : messages && messages.length > 0 ? (
          messages.map((message) => (
            <ChatMessageItem
              key={message.id}
              message={message}
              formatTimestamp={formatTimestamp}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2 py-12">
            <h3 className="text-lg font-medium">No messages yet</h3>
            <p className="text-sm text-muted-foreground">
              Start a conversation by typing a message below.
            </p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
};

export default ChatMessages;
