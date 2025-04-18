import axios, { AxiosInstance } from "axios";

// Create an axios instance with default configurations
const createApiClient = (): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_API_LLM_HOST}/`,
    headers: { "Content-Type": "application/json" },
  });

  // // Add a request interceptor to include session ID in headers
  // apiClient.interceptors.request.use(
  //   (config) => {
  //     if (sessionId) config.headers["Session-ID"] = sessionId;

  //     return config;
  //   },
  //   (error: unknown) => Promise.reject(error)
  // );

  return apiClient;
};

const apiClient = createApiClient();

export default apiClient;
