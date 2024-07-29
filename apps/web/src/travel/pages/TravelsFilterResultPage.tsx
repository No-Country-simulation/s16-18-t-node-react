import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { useTravel } from "../hooks/useTravel"
import { TravelGrid } from "../components/TravelGrid"
import { TravelCardSkeleton } from "../components/TravelCardSkeleton"

export const TravelsFilterResultPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const navigate = useNavigate()

  const { origin, destination, start_date, max_price } = Object.fromEntries(queryParams.entries())
  const { onGetTravelsByQueryParams, isLoading, travels } = useTravel()

  useEffect(() => {
    onGetTravelsByQueryParams({ origin, destination, start_date, max_price: Number(max_price) })

    if (!isLoading && travels.length <= 0) navigate('/travel/404')
  }, [])

  return (
    <section>
      <div className="space-y-4">
        {
          isLoading && Array(4).fill(null).map((_, index) => (
            <TravelCardSkeleton key={index} />
          ))
        }
      </div>

      <TravelGrid travels={travels} />
    </section>
  )
}
