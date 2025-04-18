import { ChatInterface } from "@/features/chat/chat-interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat | Firmi",
  description: "Chat with Firmi AI",
};

export default function ChatPage() {
  return <ChatInterface />;
}
