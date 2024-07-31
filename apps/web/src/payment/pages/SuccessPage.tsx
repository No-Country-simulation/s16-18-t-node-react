import { CheckIcon } from "@icons"
import { AlertCard } from "@ui"

export const SuccessPage = () => {
  return (
    <AlertCard
      title="¡Tu pago se ha realizado con éxito!"
      description="Detalle"
      icon={() => <CheckIcon />}

    >
      <button className='bg-[#A996FF] text-xs text-primary px-6 py-2 rounded-full'>Listo</button>
    </AlertCard>
  )
}