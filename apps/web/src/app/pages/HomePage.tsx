import { MapPointerIcon } from '@icons'
import { CustomInput } from '@ui'

import { TravelGrid } from '@/travel/components/TravelGrid'

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

      <h2 className="pt-8 pb-4">Próximos viajes</h2>

      <TravelGrid />

    </main>
  )
}
