import YQZRequest from "./request";

import { BASE_URL, TIME_OUT } from "./config";

import { localCache } from "@/utils/cache";

const yqzRequest = new YQZRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor(config) {
      const token = localCache.getCache("token");
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          config.headers = { Authorization: `Bearer ${token}` };
        }
      }
      return config;
    },
  },
});

export default yqzRequest;
