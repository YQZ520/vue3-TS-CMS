import YQZRequest from "./request";

import { BASE_URL, TIME_OUT } from "./config";

const yqzRequest = new YQZRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export default yqzRequest;
