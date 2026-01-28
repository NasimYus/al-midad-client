import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL ?? "";
const timeout = Number(import.meta.env.VITE_API_TIMEOUT ?? 10000);

export const httpClient = axios.create({
  baseURL,
  timeout
});
