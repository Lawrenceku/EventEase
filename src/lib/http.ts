import axios from "axios";
import Cookies from "js-cookie";

const http = axios.create({
  baseURL: "https://base-url.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(function (config) {
  const token = Cookies.get("tok");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data) {
    config.data = JSON.stringify(config.data);
  }

  return config;
});

export const get = (route: string) => http.get(route);
export const post = (route: string, data?: Record<string, any>) =>
  http.post(route, data);
export const put = (route: string, data?: Record<string, any>) =>
  http.put(route, data);
export const del = (route: string) => http.delete(route);

export default http;
