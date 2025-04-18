import React, { useRef } from "react";
import { Send, Paperclip, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircularProgress } from "@/components/custom";
import { MentionState } from "./types";

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  error: string | null;
  mentionState: MentionState;
  companyList: string[];
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onSendMessage: () => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearError: () => void;
  onCompanySelect: (company: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  isLoading,
  error,
  mentionState,
  onInputChange,
  onKeyDown,
  onSendMessage,
  onFileChange,
  onClearError,
  onCompanySelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showDropdown, filteredCompanies, mentionedCompanies } = mentionState;
  const hasMentionedCompanies = mentionedCompanies.length > 0;

  return (
    <div className="border-t bg-background p-4">
      <div className="mx-auto max-w-3xl">
        {error && (
          <Alert variant="destructive" className="mb-2">
            <AlertDescription>{error}</AlertDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={onClearError}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        )}

        <div className="relative">
          {showDropdown && (
            <Card className="absolute bottom-full mb-1 max-h-[200px] w-[200px] overflow-y-auto z-10">
              <ScrollArea className="p-1">
                {filteredCompanies.map((company) => (
                  <Button
                    key={company}
                    variant="ghost"
                    className="w-full justify-start text-sm"
                    onClick={() => onCompanySelect(company)}
                  >
                    {company}
                  </Button>
                ))}
              </ScrollArea>
            </Card>
          )}

          <div className="flex items-end gap-2">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip className="h-5 w-5" />
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.txt,.doc,.docx,.ppt,.pptx"
                className="sr-only"
                onChange={onFileChange}
              />
            </Button>

            <Textarea
              value={input}
              onChange={onInputChange}
              onKeyDown={onKeyDown}
              placeholder="Type your message..."
              className="min-h-[60px] resize-none"
              rows={1}
            />

            <Button
              onClick={onSendMessage}
              disabled={!input.trim() || isLoading}
              size="icon"
            >
              {isLoading ? (
                <CircularProgress classNames="h-4 w-4" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {hasMentionedCompanies && (
          <div className="mt-2 flex flex-wrap gap-1">
            <span className="text-xs text-muted-foreground">Mentioned: </span>
            {mentionedCompanies.map((company) => (
              <Badge key={company} variant="outline" className="text-xs">
                @{company}
              </Badge>
            ))}
          </div>
        )}

        <p className="mt-2 text-center text-xs text-muted-foreground">
          AI assistant is in preview. Information may not be accurate.
        </p>
      </div>
    </div>
  );
};

export default ChatInput;
