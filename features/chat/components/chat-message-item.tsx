import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ChatMessage } from "./types";

interface ChatMessageItemProps {
  message: ChatMessage;
  formatTimestamp: (timestamp: string) => string;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({
  message,
  formatTimestamp,
}) => {
  const isAssistant = message.role === "assistant";

  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`flex max-w-[80%] rounded-lg p-4 ${
          isAssistant
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {isAssistant && (
              <Avatar className="h-6 w-6">
                <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                  AI
                </AvatarFallback>
              </Avatar>
            )}
            <span className="text-sm font-medium">
              {isAssistant ? "Assistant" : "You"}
            </span>
            <span className="text-xs opacity-70">
              {formatTimestamp(message.createdAt)}
            </span>
          </div>
          <div className="text-sm">{message.content}</div>
          {message.metadata?.mentionedCompanies &&
            message.metadata.mentionedCompanies.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                {message.metadata.mentionedCompanies.map((company) => (
                  <Badge key={company} variant="outline">
                    @{company}
                  </Badge>
                ))}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessageItem;
