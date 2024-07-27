import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Avatar } from '@/common/components/ui'
import { NoKids, CalendarIcon, MapPointerIcon, NoPets, NoSmoking, CarIcon, CalendarV2Icon, ClockIcon, CoinIcon, StarIcon } from '@icons'

export const DetailTravelPage = () => {
  const { id } = useParams()

  useEffect(() => {
    //* get travel
  }, [])

  return (
    <section className='space-y-4'>
      <div className="grid grid-cols-5">
        <div className="space-y-2 col-span-3">
          <div className='relative flex flex-col gap-2 bg-[#E7E0FA] p-3'>
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
          <div className="flex flex-col gap-2 p-2">
            <div className='flex gap-2 items-center truncate'>
              <span><CalendarV2Icon /></span>
              <p className='text-base truncate'>14 de Agosto 2024</p>
            </div>

            <div className='flex gap-2 items-center truncate'>
              <span><ClockIcon /></span>
              <p className='text-base truncate'>15:30hs</p>
            </div>

            <div className='flex items-center gap-2 border-y-2 py-2'>
              <CoinIcon />
              <p className='font-semibold text-lg'>$16.000</p>
              <a className='underline text-xs text-secondary mt-0.5'>Más info.</a>
            </div>


            <div className='flex gap-2'>
              <NoPets />
              <NoKids />
              <NoSmoking />
              <a className='underline text-xs text-secondary mt-0.5'>Más info.</a>
            </div>

          </div>

        </div>
        <div className="">
          <CarIcon />
        </div>
      </div>
      <div className=' [&>div]:py-5 px-4'>
        <div className='flex items-center gap-1'>
          <span className='size-7'><Avatar /></span>
          <p className='text-[#034363] text-base font-semibold mr-1'>Claudio</p>
          <StarIcon />
          <p className='text-[#034363] text-base font-semibold'>4.5</p>
          <span className='text-xs text-secondary'>(Conductor)</span>
        </div>

        <div className="border-t-2 flex gap-1">
          <p className='font-bold text-[#6E7191]'>Punto de encuentro:</p>
          <p className='text-secondary text-xs'>YPF de Galvez y Puan</p>
        </div>
        <div className="border-t-2">
          <p className='text-[#6E7191] text-xs font-[300]'>
            Viajo de vacaciones a ver a mí familia. Regreso en 1 semana.
            si me cebas Mates en el Camino sos el Mejor..!
          </p>
        </div>
        <div className="flex place-items-center gap-5 border-t-2">
          <div className="h-full w-[70px]">
            <img className='h-full w-full' src={'https://santaisabel.vtexassets.com/arquivos/ids/160355/Pollo-asado-kg.jpg?v=637469375609970000'}></img>
          </div>
          <div className="flex flex-col items-end">
            <h1 className='font-bold'>***h21</h1>
            <p>Honda Civic - rojo</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='bg-[#6750A4] text-[16px] text-white px-4 py-1.5 rounded-[30px] w-[302px] h-[39px] font-medium '>Confirmar viaje</button>
      </div>
    </section>
  )
}