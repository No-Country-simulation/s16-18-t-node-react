import Cookies from 'js-cookie'

import { useBoundStore } from '@/store/bound.store'
import { LoginRequestData, RegisterRequestData } from '../interfaces/auth.interface'
import * as authService from '../services/auth.service'

export const useAuth = () => {
  const loginStore = useBoundStore(state => state.onLogin)
  const logoutStore = useBoundStore(state => state.onLogout)
  const userCheckingStore = useBoundStore(state => state.onChecking)

  const closeMenu = useBoundStore(state => state.close)

  const onLogin = async (loginData: LoginRequestData) => {
    userCheckingStore()

    return authService.loginUser(loginData)
      .then(user => loginStore(user))
      .catch(error => {
        logoutStore()
        throw error
      })
  }

  const onRegister = async (registerData: RegisterRequestData) => {
    return authService.registerUser(registerData)
      .then(user => loginStore(user))
  }

  const onRenewToken = async () => {
    userCheckingStore()

    authService.renewToken()
      .then(user => loginStore(user))
      .catch(() => logoutStore())
  }

  const onLogout = () => {
    logoutStore()
    closeMenu()

    Cookies.remove('access_token')
  }

  return {
    onLogin,
    onRegister,
    onRenewToken,
    onLogout
  }
}
