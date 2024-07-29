import { useEffect } from 'react'

import { TravelGrid } from '@/travel/components/TravelGrid'
import TravelSearchForm from '@/travel/components/TravelSearchForm'
import { useTravel } from '@/travel/hooks/useTravel'
import { TravelCardSkeleton } from "@/travel/components/TravelCardSkeleton"

export const HomePage = () => {
  const { onGetLastTravels, travels, isLoading } = useTravel()

  useEffect(() => {
    onGetLastTravels()
  }, [])

  return (
    <main>
      <div className="space-y-4">

        <h2 className='text-center'>Buscá tu viaje</h2>

        <TravelSearchForm />

      </div>

      <h2 className="pt-7 pb-4 text-center">Próximos viajes</h2>

      {isLoading && <TravelCardSkeleton />}

      <TravelGrid travels={travels} />

    </main>
  )
}
