import { ExclamationIcon } from "@icons"
import { AlertCard } from "@ui"
import { useNavigate } from "react-router-dom"

export const Travel404Page = () => {
  const navigate = useNavigate()

  return (
    <section className="space-y-10">
      <AlertCard
        icon={() => <ExclamationIcon />}
        title="Lo sentimos, no encontramos el viaje que buscabas"
      />

      <button onClick={() => navigate('/')} className='bg-[#6750A4] text-base text-white px-6 py-2 rounded-full w-full'>Buscar viaje</button>
    </section>
  )
}
