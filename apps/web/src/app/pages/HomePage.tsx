import { TravelGrid } from '@/travel/components/TravelGrid'
import TravelSearchForm from '@/travel/components/TravelSearchForm'

export const HomePage = () => {
  return (
    <main>
      <div className="space-y-4">

        <h2 className='text-center'>Buscá tu viaje</h2>

        <TravelSearchForm />

      </div>

      <h2 className="pt-7 pb-4 text-center">Próximos viajes</h2>

      <TravelGrid />

    </main>
  )
}
