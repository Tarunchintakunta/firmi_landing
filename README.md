# API Hooks with TanStack Query

This directory contains a set of React hooks for interacting with the API endpoints using TanStack Query (formerly React Query).

## Installation

You need to install the required dependencies:

```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
# or
yarn add @tanstack/react-query @tanstack/react-query-devtools
# or
pnpm add @tanstack/react-query @tanstack/react-query-devtools
```

## Setup

First, wrap your application with the `QueryProvider` component in your `app/layout.tsx` or root component:

```tsx
import { QueryProvider } from '@/hooks/api';

export default function RootLayout({ children }) {
  return (
    <QueryProvider>
      {children}
    </QueryProvider>
  );
}
```

## Available Hooks

### LLM API

```tsx
import { useLlmApi } from '@/hooks/api';

function MyComponent() {
  const { 
    queryLlm, 
    isQueryingLlm, 
    queryLlmError 
  } = useLlmApi();

  const handleSubmit = async (prompt) => {
    try {
      const response = await queryLlm({ prompt });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isQueryingLlm && <p>Loading...</p>}
      {queryLlmError && <p>Error: {queryLlmError.message}</p>}
      {/* Your UI components */}
    </div>
  );
}
```

### Files API

```tsx
import { useFilesApi } from '@/hooks/api';

function FilesComponent() {
  const { 
    useFiles, 
    uploadFile, 
    downloadFile, 
    isUploading 
  } = useFilesApi();
  
  // Get files query
  const { 
    data: files, 
    isLoading, 
    error 
  } = useFiles();

  const handleUpload = async (file) => {
    try {
      await uploadFile({ file });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading files...</p>}
      {error && <p>Error: {error.message}</p>}
      {isUploading && <p>Uploading...</p>}
      
      {/* Display files */}
      {files?.map(file => (
        <div key={file.id}>{file.name}</div>
      ))}
    </div>
  );
}
```

### Tickers API

```tsx
import { useTickersApi } from '@/hooks/api';

function TickersComponent() {
  const { 
    useTickers, 
    saveTicker, 
    deleteTicker, 
    isSaving 
  } = useTickersApi();
  
  // Get tickers query
  const { 
    data: tickers, 
    isLoading, 
    error 
  } = useTickers();

  const handleSave = async (ticker) => {
    try {
      await saveTicker(ticker);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading tickers...</p>}
      {error && <p>Error: {error.message}</p>}
      {isSaving && <p>Saving ticker...</p>}
      
      {/* Display tickers */}
      {tickers?.map(ticker => (
        <div key={ticker.id}>{ticker.symbol}</div>
      ))}
    </div>
  );
}
```

### Chat API

```tsx
import { useChatApi } from '@/hooks/api';

function ChatComponent() {
  const { 
    useChats, 
    useChatById, 
    saveChat, 
    isSaving 
  } = useChatApi();
  
  // Get all chats
  const { 
    data: chats, 
    isLoading: isLoadingChats 
  } = useChats();
  
  // Get a specific chat
  const { 
    data: chat, 
    isLoading: isLoadingChat 
  } = useChatById('chat-id');

  const handleSave = async (chatData) => {
    try {
      await saveChat(chatData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* Chat UI components */}
    </div>
  );
}
```

### WebSocket API

```tsx
import { useWebSocketApi } from '@/hooks/api';

function WebSocketComponent() {
  const { 
    status, 
    messages, 
    sendMessage, 
    connect, 
    disconnect, 
    isConnected 
  } = useWebSocketApi({
    // Automatically connect when component mounts
    autoConnect: true,
    
    // Custom message handler
    onMessage: (message) => {
      console.log('New message:', message);
    },
    
    // Status change handler
    onStatusChange: (status) => {
      console.log('WebSocket status:', status);
    }
  });

  const handleSendMessage = () => {
    sendMessage({ type: 'client_message', data: 'Hello server!' });
  };

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={connect} disabled={isConnected}>Connect</button>
      <button onClick={disconnect} disabled={!isConnected}>Disconnect</button>
      <button onClick={handleSendMessage} disabled={!isConnected}>Send Message</button>
      
      {/* Display messages */}
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{JSON.stringify(msg)}</div>
        ))}
      </div>
    </div>
  );
}
```

## Best Practices

1. Use the provided query hooks whenever possible to leverage the TanStack Query caching and state management
2. For mutations, use the returned mutate functions and status properties
3. Always handle errors using try/catch blocks or the provided error states
4. Use the invalidation methods when you need to refresh data after mutations 