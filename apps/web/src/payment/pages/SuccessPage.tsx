import { CheckIcon, FillCircleIcon } from "@icons"

export const SuccessPage = () => {
  return (
    <div className="border-2 border-primary p-8 rounded-lg flex flex-col items-center gap-8 mt-8">
      <div className="flex relative justify-center items-center inset-0">
        <FillCircleIcon />
        <div className="flex absolute justify-center items-center inset-0"><CheckIcon /></div>
      </div>

      <div>¡Tu pago se a realizado con éxito!</div>

      <p className="text-center">Detalle</p>

      <div className='flex justify-center'>
        <button className='bg-[#A996FF] text-xs text-primary px-6 py-2 rounded-full'>Listo</button>
      </div>
    </div>
  )
}
