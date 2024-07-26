import { AxiosRequestConfig } from 'axios'
import { instance } from '../config/axios.config'

export const api = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    return await instance.get<T>(url, config)
  },
  post: async <T>(url: string, data: unknown, config?: AxiosRequestConfig) => {
    return await instance.post<T>(url,data, config)
  },
  patch: async <T>(url: string, data: unknown, config?: AxiosRequestConfig) => {
    return await instance.patch<T>(url,data, config)
  },
  delete: async <T>(url: string, config?: AxiosRequestConfig) => {
    return await instance.delete<T>(url, config)
  }
}