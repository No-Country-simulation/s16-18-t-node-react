import { paths } from "@/app/router/paths";
import { CalendarIcon, MapPointerIcon } from "@icons"
import { useNavigate } from "react-router-dom";

export const DetailPaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 pb-20 mt-8">
      <h2>Revisa los datos de tu reserva</h2>

      <div>
        <h3 className="text-primary font-normal">Pasajero</h3>
        <p>Catarina Perez</p>

        <hr className="border-b-2 mt-1.5" />
      </div>

      <div className="flex flex-col gap-2 border-2 border-primary rounded-lg p-6">
        <div className='flex gap-2 items-center truncate'>
          <span><CalendarIcon /></span>
          <p className='text-base truncate'>14 de Agosto 2024</p>
        </div>

        <div className='flex gap-2 items-center truncate'>
          <span><CalendarIcon /></span>
          <p className='text-base truncate'>15:30hs</p>
        </div>


        <div className='relative flex flex-col gap-2'>
          <div className='border-s h-[15.5px] border-dashed absolute top-5 left-[7.5px] border-primary'></div>

          <div className='flex gap-2 items-center'>
            <span className='pl-0.5'><MapPointerIcon /></span>
            <p className='text-base truncate'>San Fernando</p>
          </div>

          <div className='flex gap-2 items-center'>
            <span className='pl-0.5'><MapPointerIcon /></span>
            <p className='text-base truncate'>Rancagua</p>
          </div>
        </div>

        {/* <div className='flex gap-2'>
          <NoSmoking />
          <NoKids />
          <NoPets />
        </div> */}
      </div>


      <div className='flex items-center gap-2 p-4 border-2 border-primary rounded-lg'>
        <p className='font-bold text-xl'>$5.000</p>
        <a className='underline text-xs text-secondary mt-0.5'>Más información</a>
      </div>

      <div>
        <h3 className="text-primary">Política de cancelación</h3>
        <p className="pt-1">Si cancelas el viaje hasta 6 horas antes recibirás un reembolso parcial</p>
        <p className="text-primary py-2">Más información</p>

        <hr className="border-b-2 mt-1.5" />
      </div>

      <div className='flex justify-center'>
        <button className='bg-[#A996FF] text-xs text-primary px-4 py-1.5 rounded-full' onClick={() => navigate(paths.payments.methods)}>Continuar al pago</button>
      </div>
    </div>
  )
}
