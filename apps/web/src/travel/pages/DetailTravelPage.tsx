import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Avatar } from '@/common/components/ui'
import { BabyIcon, CalendarIcon, MapPointerIcon, PetsIcon, SmokeIcon } from '@icons'

export const DetailTravelPage = () => {
  const { id } = useParams()

  useEffect(() => {
    //* get travel
  }, [])

  return (
    <section className='space-y-4'>
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

        <div className='flex gap-2'>
          <SmokeIcon />
          <BabyIcon />
          <PetsIcon />
        </div>

      </div>

      <div className='flex items-center gap-2 p-4 border-2 border-primary rounded-lg'>
        <p className='font-bold text-xl'>$16.000</p>
        <a className='underline text-xs text-secondary mt-0.5'>Más información</a>
      </div>

      <div className='space-y-2 max-w-[90%]'>
        <div className='flex items-center gap-2'>
          <span className='size-7'><Avatar /></span>
          <p className='text-primary text-base'>Claudio ⭐ 4.5 <span className='text-xs text-secondary'>(Conductor)</span></p>
        </div>

        <p>
          Viajo de vacaciones a ver a mí familia. Regreso en 1 semana.
          si me cebas Mates en el Camino sos el Mejor..!
        </p>
      </div>


      <div className='flex justify-center'>
        <button className='bg-[#A996FF] text-xs text-primary px-4 py-1.5 rounded-full'>Confirmar viaje</button>
      </div>

    </section>
  )
}