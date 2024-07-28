import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createAuthSlice, type AuthSlice } from './auth/auth.slice'

type Slices = AuthSlice

export const useBoundStore = create<Slices>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
    })
  )
)