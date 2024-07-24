import { MapPointerIcon } from '@/common/components/icons'
import { TravelCard } from '@/travel/components/TravelCard'
import { CustomInput } from '@ui'

export const HomePage = () => {
  return (
    <main>
      <div className="space-y-4">
        <h2>Busca tu viaje</h2>

        <CustomInput
          title='Origen'
          icon={() => <MapPointerIcon />}
          placeholder='Ingresa desde donde viajas'
          searchButton
        />

      </div>

      <h2 className="pt-8 pb-4">Proximo viajes</h2>

      <TravelCard
        availableSeats={4}
        origin='San Fernando, Chilessssssssssssssssssss'
        destination='Rancagua, Chilesfddddddddddddddddddddd'
        driverImage='notfound'
        driverName='Manuel'
        driverRating='4'
        startDate={'2024-07-23'}
      />

    </main>
  )
}
