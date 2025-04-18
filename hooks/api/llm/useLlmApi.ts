import { useMutation } from "@tanstack/react-query";

import config from "@/config";
import apiClient from "@/utils/service";

interface QueryRequest {
  prompt: string;
  conversationId?: string;
  [key: string]: unknown;
}

interface TaskRequest {
  description: string;
  [key: string]: unknown;
}

interface QueryResponse {
  text: string;
  messageId?: string;
  [key: string]: unknown;
}

interface TasksResponse {
  tasks: Array<{
    id: string;
    description: string;
    completed?: boolean;
    [key: string]: unknown;
  }>;
  [key: string]: unknown;
}

export const useQueryLlmMutation = () => {
  const queryLlm = async (data: QueryRequest): Promise<QueryResponse> => {
    const response = await apiClient.post("query", data);
    return response.data;
  };

  return useMutation<QueryResponse, Error, QueryRequest>({
    mutationFn: queryLlm,
  });
};

// Get LLM tasks mutation
export const useGetLlmTasksMutation = () => {
  const getLlmTasks = async (data: TaskRequest): Promise<TasksResponse> => {
    const response = await apiClient.post(config.llm_plan, data);
    return response.data;
  };

  return useMutation<TasksResponse, Error, TaskRequest>({
    mutationFn: getLlmTasks,
  });
};
