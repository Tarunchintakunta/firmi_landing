import { AxiosError } from "axios";

export interface ErrorResponse {
  message: string;
  status?: number;
  errorCode?: string;
}

/**
 * Formats an error from an API request
 */
export function formatApiError(error: unknown): ErrorResponse {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const errorData = error.response?.data;

    // API-specific error
    if (errorData?.message) {
      return {
        message: errorData.message,
        status,
        errorCode: errorData.errorCode,
      };
    }

    // Network error
    if (error.message === "Network Error") {
      return {
        message:
          "Unable to connect to the server. Please check your internet connection.",
        status,
      };
    }

    // Generic Axios error
    return {
      message: error.message || "An unexpected error occurred",
      status,
    };
  }

  // Unknown error
  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }

  return {
    message: "An unknown error occurred",
  };
}
