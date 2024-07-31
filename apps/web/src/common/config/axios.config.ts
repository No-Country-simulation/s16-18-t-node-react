import axios from 'axios'
import { HOST_API } from '@/config'

export const instance = axios.create({
  baseURL: HOST_API,
  withCredentials: true,
})

// instance.interceptors.request.use()