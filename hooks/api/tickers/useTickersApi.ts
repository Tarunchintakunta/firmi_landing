import { useMutation, useQuery } from "@tanstack/react-query";

import apiClient from "@/utils/service";
import { queryClient } from "@/providers/tanstack-providers";

interface TickerResponse {
  tickers: string[];
}

interface TickerRequest {
  ticker: string;
  user_id: string;
}

// Query keys for cache management
export const tickersKeys = {
  all: ["tickers"] as const,
  lists: () => [...tickersKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...tickersKeys.lists(), { filters }] as const,
  details: () => [...tickersKeys.all, "detail"] as const,
  detail: (id: string) => [...tickersKeys.details(), id] as const,
};

// Get list of tickers query
export const useTickers = (user_id: string, enabled = true) => {
  const fetchTickers = async (): Promise<TickerResponse> => {
    const response = await apiClient.get(`tickers/${user_id}`);
    return response.data;
  };

  return useQuery<TickerResponse, Error>({
    queryFn: fetchTickers,
    enabled: !!user_id && enabled,
    queryKey: tickersKeys.lists(),
  });
};

// Save ticker mutation
export const useSaveTickerMutation = () => {
  const saveTicker = async (
    tickerData: TickerRequest
  ): Promise<TickerResponse> => {
    const response = await apiClient.post("save_ticker", tickerData);
    return response.data;
  };

  return useMutation<TickerResponse, Error, TickerRequest>({
    mutationFn: saveTicker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tickersKeys.lists() });
    },
  });
};

// Delete a single ticker mutation
export const useDeleteTickerMutation = (user_id: string) => {
  const deleteTicker = async (tickerId: string): Promise<TickerResponse> => {
    const response = await apiClient.delete("delete_ticker", {
      data: {
        user_id,
        ticker: tickerId,
      },
    });

    return response.data;
  };

  return useMutation<TickerResponse, Error, string>({
    mutationFn: deleteTicker,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: tickersKeys.lists() });
    },
  });
};

// Delete multiple tickers mutation
export const useDeleteTickersMutation = (user_id: string) => {
  const deleteTickers = async (): Promise<TickerResponse> => {
    const response = await apiClient.delete(`delete_tickers/${user_id}`);

    return response.data;
  };

  return useMutation<TickerResponse, Error>({
    mutationFn: deleteTickers,
    onSuccess: () => {
      // Invalidate tickers list cache to trigger a refresh
      queryClient.invalidateQueries({ queryKey: tickersKeys.lists() });
    },
  });
};
