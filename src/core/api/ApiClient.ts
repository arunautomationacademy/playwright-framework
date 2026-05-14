import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import logger from '../../utils/logger';
import { env } from '../../config/env';

export class ApiClient {
  private client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL: env.apiBaseUrl,
      timeout: 15000,
      ...config
    });

    this.client.interceptors.request.use((request) => {
      logger.info(`API request: ${request.method?.toUpperCase()} ${request.baseURL}${request.url}`);
      return request;
    });

    this.client.interceptors.response.use(
      (response) => {
        logger.info(`API response: ${response.status} ${response.config.url}`);
        return response;
      },
      async (error) => {
        logger.error(`API error: ${error?.response?.status} ${error?.config?.url} - ${error?.message}`);
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.get<T>(url, config);
  }

  post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.post<T>(url, data, config);
  }

  put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.put<T>(url, data, config);
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.client.delete<T>(url, config);
  }
}
