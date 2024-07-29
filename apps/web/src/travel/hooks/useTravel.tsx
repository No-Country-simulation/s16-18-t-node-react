import { useState } from "react"
import * as travelService from "../services/travel.service"
import { SearchTravelsQueryParams, Travel } from "../interfaces/travel.interface"

export const useTravel = () => {
  const [travels, setTravels] = useState<Travel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const onGetLastTravels = () => {
    setIsLoading(true)

    return travelService.getTravelsByQueryParams({ start_date: '2024-07-28' })
      .then(data => setTravels(data))
      .finally(() => setIsLoading(false))
  }

  const onGetTravelById = (travelId: string) => {
    setIsLoading(true)

    return travelService.getTravelById(travelId)
      .then(data => setTravels([data]))
      .finally(() => setIsLoading(false))
  }

  const onGetTravelsByQueryParams = async (filters: SearchTravelsQueryParams) => {
    setIsLoading(true)

    return travelService.getTravelsByQueryParams(filters)
      .then(data => setTravels(data))
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    travels,

    onGetLastTravels,
    onGetTravelsByQueryParams,
    onGetTravelById
  }
}
