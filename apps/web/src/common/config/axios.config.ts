import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  withCredentials: true,
})

// instance.interceptors.request.use()