import { type StateCreator } from 'zustand'

import { AUTH_STATUS } from '@/consts'
import { type User } from '@/auth/interfaces/auth.interface'

export interface AuthSlice {
  status: AUTH_STATUS
  user: User | null

  // errorMessage: string | null

  onChecking: () => void
  onLogin: (user: User) => void
  onLogout: () => void
  // onUpdate: (user: User) => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  status: AUTH_STATUS.CHECKING,
  // status: AUTH_STATUS.NOT_AUTHENTICATED,
  user: null,
  // errorMessage: null,

  onChecking: () => {
    set({
      status: AUTH_STATUS.CHECKING,
      user: null,
      // errorMessage: null
    })
  },

  onLogin: (user) => {
    set({
      status: AUTH_STATUS.AUTHENTICATED,
      user,
      // errorMessage: null
    })
  },

  onLogout: () => {
    set({
      status: AUTH_STATUS.NOT_AUTHENTICATED,
      user: null,
    })
  },

  // onUpdate: (user) => {
  //   set({ user })
  // }
})