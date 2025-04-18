import { useState, useEffect, useRef, useCallback } from "react";
import config from "@/config";
import { useQueryClient } from "@tanstack/react-query";
import { chatKeys } from "../chat/useChatApi";
import { filesKeys } from "../files/useFilesApi";
import { tickersKeys } from "../tickers/useTickersApi";

type WebSocketStatus = "connecting" | "open" | "closing" | "closed" | "error";

interface WebSocketMessage {
  type: string;
  data: unknown;
  [key: string]: unknown;
}

interface WebSocketHookOptions {
  autoConnect?: boolean;
  onMessage?: (message: WebSocketMessage) => void;
  onStatusChange?: (status: WebSocketStatus) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for interacting with WebSocket API
 */
export const useWebSocketApi = ({
  autoConnect = true,
  onMessage,
  onStatusChange,
  onError,
}: WebSocketHookOptions = {}) => {
  const [status, setStatus] = useState<WebSocketStatus>("closed");
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<WebSocketMessage[]>([]);
  const socketRef = useRef<WebSocket | null>(null);
  const queryClient = useQueryClient();

  // Update the status and call the callback if provided
  const updateStatus = useCallback(
    (newStatus: WebSocketStatus) => {
      setStatus(newStatus);
      onStatusChange?.(newStatus);
    },
    [onStatusChange]
  );

  // Update the error and call the callback if provided
  const handleError = useCallback(
    (err: Error) => {
      setError(err.message);
      onError?.(err);
    },
    [onError]
  );

  // Function to establish WebSocket connection
  const connect = useCallback(() => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      updateStatus("connecting");

      // Get session ID from localStorage
      const sessionId = localStorage.getItem("sessionId");
      const wsUrl = sessionId
        ? `${config.websocket_url}?session_id=${sessionId}`
        : config.websocket_url;

      socketRef.current = new WebSocket(wsUrl);

      socketRef.current.onopen = () => {
        updateStatus("open");
        setError(null);
      };

      socketRef.current.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data) as WebSocketMessage;

          // Update messages state
          setMessages((prevMessages) => [...prevMessages, message]);

          // Call the onMessage callback if provided
          onMessage?.(message);

          // Invalidate relevant queries based on message type
          if (message.type) {
            switch (message.type) {
              case "chat_updated":
              case "new_chat_message":
                queryClient.invalidateQueries({ queryKey: chatKeys.all });
                break;
              case "file_uploaded":
              case "file_deleted":
                queryClient.invalidateQueries({ queryKey: filesKeys.all });
                break;
              case "ticker_updated":
              case "ticker_deleted":
                queryClient.invalidateQueries({ queryKey: tickersKeys.all });
                break;
              default:
                break;
            }
          }
        } catch (err) {
          console.error("Failed to parse WebSocket message:", err);
        }
      };

      socketRef.current.onerror = () => {
        updateStatus("error");
        handleError(new Error("WebSocket connection error"));
      };

      socketRef.current.onclose = () => {
        updateStatus("closed");
      };
    } catch (err) {
      updateStatus("error");
      handleError(
        err instanceof Error
          ? err
          : new Error("Failed to establish WebSocket connection")
      );
    }
  }, [updateStatus, handleError, onMessage, queryClient]);

  // Function to close WebSocket connection
  const disconnect = useCallback(() => {
    if (socketRef.current) {
      updateStatus("closing");
      socketRef.current.close();
      socketRef.current = null;
    }
  }, [updateStatus]);

  // Function to send message through WebSocket
  const sendMessage = useCallback((message: unknown) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      const messageString =
        typeof message === "string" ? message : JSON.stringify(message);

      socketRef.current.send(messageString);
      return true;
    }
    return false;
  }, []);

  // Function to clear message history
  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  // Auto-connect when component mounts if autoConnect is true
  useEffect(() => {
    if (autoConnect) {
      connect();
    }

    // Clean up WebSocket connection when component unmounts
    return () => {
      disconnect();
    };
  }, [autoConnect, connect, disconnect]);

  return {
    status,
    error,
    messages,
    connect,
    disconnect,
    sendMessage,
    clearMessages,
    isConnected: status === "open",
    isConnecting: status === "connecting",
    hasError: status === "error",
  };
};
