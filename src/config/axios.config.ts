import axios from "axios";

const axiosInstance = axios({
  baseURL: import.meta.env.VITE_API_URL,
});

export { axiosInstance };
