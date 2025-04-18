// API configuration for all endpoints
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "";
const API_WS_HOST = process.env.NEXT_PUBLIC_API_WS_HOST || "";

const config = {
  llm_plan: `${API_HOST}/api/v1/getTasks`,
  file_upload: `${API_HOST}/api/v1/upload`,
  save_chat: `${API_HOST}/api/v1/save_chat`,
  get_chat: `${API_HOST}/api/v1/chats`,
  download_file: `${API_HOST}/api/v1/files/{filepath:path}`,
  websocket_url: `${API_WS_HOST}/api/v1/ws`,
};

export default config;
