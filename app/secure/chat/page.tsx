import { ChatInterface } from "@/features/chat/chat-interface";

export default function ChatPage({
  params,
}: {
  params: { tickername: string };
}) {
  return <ChatInterface tickername={params.tickername} />;
}
