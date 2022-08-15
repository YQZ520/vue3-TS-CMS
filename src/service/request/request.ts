import {
  axios,
  IYQZInterceptors,
  IYQZRequestConfig,
  AxiosInstance,
} from "./types";

class YQZRequest {
  private instance: AxiosInstance;
  private interceptors?: IYQZInterceptors;

  constructor(config: IYQZRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    // global interceptors start
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err,
    );

    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err,
    );

    // 不同实例各自的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    );
  }

  private request<T = any>(config: IYQZRequestConfig<T>) {
    return new Promise<T>((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
        })
        .catch((err) => {
          if (config.interceptors?.responseInterceptorCatch) {
            err = config.interceptors.responseInterceptorCatch(err);
          }
          reject(err);
        });
    });
  }

  get<T = any>(config: IYQZRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T = any>(config: IYQZRequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
}

export default YQZRequest;
