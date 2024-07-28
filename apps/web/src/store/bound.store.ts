import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { createAuthSlice, type AuthSlice } from './auth/auth.slice'
import { createUiSlice, type UiSlice } from './ui/ui.slice'

type Slices = AuthSlice & UiSlice

export const useBoundStore = create<Slices>()(
  devtools(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUiSlice(...a),
    })
  )
)