import axios from 'axios'
import { HOST_API } from '@/config'

export const instance = axios.create({
  baseURL: HOST_API
})



// instance.interceptors.request.use()