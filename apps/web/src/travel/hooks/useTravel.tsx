import { useState } from "react"
import * as travelService from "../services/travel.service"
import { Travel } from "../interfaces/travel.interface"

export const useTravel = () => {
  const [travels, setTravels] = useState<Travel[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getLastTravels = () => {
    setIsLoading(true)

    return travelService.getTravelsByQueryParams({ start_date: '2024-07-28' })
      .then(data => setTravels(data))
      .finally(() => setIsLoading(false))
  }

  return {
    isLoading,
    getLastTravels,
    travels
  }
}
