import axios from "axios";

const API_BASE = "https://api.adzuna.com/v1/api/jobs";

const APP_ID = process.env.NEXT_PUBLIC_ADZUNA_APP_ID!;
const APP_KEY = process.env.NEXT_PUBLIC_ADZUNA_APP_KEY!;

const axiosInstance = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach app_id & app_key to every request automatically
axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    app_id: APP_ID,
    app_key: APP_KEY,
  };
  return config;
});

export default axiosInstance;