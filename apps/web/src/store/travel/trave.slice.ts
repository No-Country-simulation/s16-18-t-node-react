import { Travel } from '@/travel/interfaces/travel.interface'
import { type StateCreator } from 'zustand'

export interface TravelSlice {
  travels: Travel[]

}

export const createTravelSlice: StateCreator<TravelSlice> = (set) => ({
  travels: []
})