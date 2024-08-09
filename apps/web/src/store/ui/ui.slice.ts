import { type StateCreator } from 'zustand'

export interface UiSlice {
  isOpen: boolean
  
  open: () => void
  close: () => void
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
  isOpen: false,

  open() { set({ isOpen: true })},
  close() { set({isOpen: false})}
})