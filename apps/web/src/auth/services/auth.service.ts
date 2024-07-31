import { api } from "@/common/utils"
import type { LoginRequestData,  RegisterRequestData,  User } from "@/auth/interfaces/auth.interface"
import { isAxiosError } from "axios"

export const loginUser = async (loginData: LoginRequestData) => {
  try {
    const { data } = await api.post<User>(`auth/login`, loginData)
    
    return data
  } catch (error: unknown) {
    if (isAxiosError(error)) throw error?.response?.data?.message
    throw 'Internal error'
  }
}

export const registerUser = async (registerData: RegisterRequestData) => {
  try {
    const { data } = await api.post<User>(`auth/register`, registerData)
    
    return data
  } catch (error: unknown) {
    if (isAxiosError(error)) throw error?.response?.data?.message
    throw 'Internal error'
  }
}


export const renewToken = async () => {
  try {
    const { data } = await api.get<User>(`auth/renew-token`)
    return data
  } catch (error: unknown) {
    if (isAxiosError(error)) throw error?.response?.data?.message
    throw 'Internal error'
  }
}