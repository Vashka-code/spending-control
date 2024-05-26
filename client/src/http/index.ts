import axios from "axios";
import { AuthResponseInterface } from "../types/response/AuthResponce";

export const API_URL = "http://localhost:5000/api";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      (error.response.status = 401 && error.config && !error.config._isRetry)
    ) {
      try {
        const response = await axios.get<AuthResponseInterface>(
          `${API_URL}/refresh`,
          {
            withCredentials: true,
          }
        );

        localStorage.setItem("token", response.data.accessToken);

        return $api.request(originalRequest);
      } catch (e) {
        console.log("Not Authorized");
      }
    }

    throw error;
  }
);

export default $api;
