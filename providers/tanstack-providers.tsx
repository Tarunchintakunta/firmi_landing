"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface QueryProviderProps {
  children: ReactNode;
}

// Create a client with default settings
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Stale time 5 minutes by default
      staleTime: 1000 * 60 * 5,
      // Retry failed queries 3 times
      retry: 3,
      // Refetch when window regains focus
      refetchOnWindowFocus: true,
      // Cache data for 30 minutes
      gcTime: 1000 * 60 * 30,
    },
    mutations: {
      // Retry failed mutations 1 time
      retry: 1,
    },
  },
});

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Show devtools only in development */}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
