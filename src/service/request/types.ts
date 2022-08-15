import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface IYQZInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (err: any) => any;

  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

interface IYQZRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: IYQZInterceptors<T>;
}

export { axios, AxiosInstance, IYQZInterceptors, IYQZRequestConfig };
