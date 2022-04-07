import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import AxiosInstance from "./AxiosInstance";

export interface RequestConfig extends AxiosRequestConfig {}
export interface Response<T> extends AxiosResponse<T> {}
export interface RequestError<T> extends AxiosError<T> {}

class RequestService {
  public static get<T>(
    url: string,
    config: RequestConfig = {}
  ): Promise<Response<T>> {
    return AxiosInstance.get<T, Response<T>>(url, config);
  }
}

export default RequestService;
