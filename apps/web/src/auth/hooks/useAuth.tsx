import { useBoundStore } from '@/store/bound.store'
import { LoginRequestData } from '../interfaces/auth.interface'
import * as authService from '../services/auth.service'

export const useAuth = () => {
  const loginStore = useBoundStore(state => state.onLogin)
  const logoutStore = useBoundStore(state => state.onLogout)
  const userCheckingStore = useBoundStore(state => state.onChecking)

  const onLogin = async (loginData: LoginRequestData) => {
    userCheckingStore()

    return authService.loginUser(loginData)
      .then(user => loginStore(user))
      .catch(error => {
        logoutStore()
        throw error
      })
  }

  const onRenewToken = async () => {
    userCheckingStore()

    authService.renewToken()
      .then(user => loginStore(user))
      .catch(() => logoutStore())
  }

  return {
    onLogin,
    onRenewToken
  }
}
