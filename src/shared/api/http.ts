import axios from "axios";

type ApiError = {
  message: string;
  status?: number;
};

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL;
const baseURL = rawBaseUrl ? rawBaseUrl.replace(/\/+$/, "") : undefined;
const timeout = Number(import.meta.env.VITE_API_TIMEOUT);

export const http = axios.create({
  baseURL,
  timeout
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message ??
      error?.message ??
      "Unknown API error";

    return Promise.reject({ message, status } satisfies ApiError);
  }
);
