import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Avatar } from '@/common/components/ui'
import { NoKids, MapPointerIcon, NoPets, NoSmoking, CarIcon, CalendarV2Icon, ClockIcon, CoinIcon, StarIcon } from '@icons'

import { useTravel } from '@/travel/hooks/useTravel'
import { TravelDetailSkeleton } from '@/travel/components/TravelDetailSkeleton'
import { Link } from 'react-router-dom'

export const DetailPaymentSummaryPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { isLoading, onGetTravelById, travels } = useTravel()

  const findTravelById = () => {
    if (!id) return

    onGetTravelById(id)
      .catch(() => navigate('/travel/404'))
  }

  useEffect(() => {
    findTravelById()
  }, [])

  if (isLoading) return <TravelDetailSkeleton />

  const travel = travels[0]

  return (
    <section className='space-y-4 pb-20'>

      <h2 className='text-center pb-2'>Revisa los datos de tu reserva</h2>

      <div className="grid grid-cols-5">
        <div className="space-y-2 col-span-3">
          <div className='relative flex flex-col gap-2 bg-[#E7E0FA] p-3'>
            <div className='border-s h-[15.5px] border-dashed absolute top-8 left-[19.4px] border-secondary'></div>

            <div className='flex gap-2 items-center'>
              <span className='pl-0.5'><MapPointerIcon /></span>
              <p className='text-base truncate'>{travel?.origin}</p>
            </div>

            <div className='flex gap-2 items-center'>
              <span className='pl-0.5'><MapPointerIcon /></span>
              <p className='text-base truncate'>{travel?.destination}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <div className='flex gap-2 items-center truncate'>
              <span><CalendarV2Icon /></span>
              <p className='text-base truncate'>{travel?.startDate}</p>
            </div>

            <div className='flex gap-2 items-center truncate'>
              <span><ClockIcon /></span>
              <p className='text-base truncate'>{travel?.hour}</p>
            </div>

            <div className='flex items-center gap-2 border-y-2 py-2'>
              <CoinIcon />
              <p className='font-semibold text-lg'>{travel?.price}</p>
              <a className='underline text-xs text-secondary mt-0.5'>Más info.</a>
            </div>

            <div className='flex items-center gap-2'>
              <NoPets />
              <NoKids />
              <NoSmoking />
              <a className='underline text-xs text-secondary mt-0.5'>Más info.</a>
            </div>

          </div>

        </div>

        <div className="pl-4">
          <CarIcon />
        </div>

      </div>
      <div className=' [&>div]:py-5 px-4'>

        <div className='flex items-center gap-1'>
          <span className='size-7'><Avatar /></span>

          <p className='text-[#034363] text-base font-semibold mr-1'>{travel?.driver[0].name}</p>
          <StarIcon />
          <p className='text-[#034363] text-base font-semibold'>{travel?.rating.average ?? 0}</p>
          <span className='text-xs text-secondary'>(Conductor)</span>
        </div>

        <div className="border-t-2 flex gap-1">
          <p className='font-bold text-[#6E7191]'>Punto de encuentro:</p>
          <p className='text-secondary text-xs'>{travel?.meetingPoint}</p>
        </div>

        <div className="flex place-items-center gap-5 border-t-2">
          <div className="h-full w-[90px]">
            <img className='rounded-2xl' src={'https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Medium/ford/figo-sedan/mx/RT_PU_94a2ea9500a648feb4f66b4864d20920.webp'}></img>
          </div>
          <div className="flex flex-col items-end">
            <h1 className='font-bold'>{`***${travel?.car?.patent.slice(-3)}`}</h1>
            <p>{`${travel?.car.brand} - ${travel?.car.color}`}</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-primary font-bold">Política de cancelación</p>
        <p className="pt-1">Si cancelas el viaje hasta 6 horas antes recibirás un reembolso parcial</p>
        <p className="text-primary py-2 font-bold underline">Más información</p>

        <hr className="border-b-2 mt-1.5" />
      </div>

      <Link to={`/payment/summary/${id}`} className='bg-tertiary text-base text-white rounded-full flex items-center justify-center py-2'>Continuar al pago</Link>
    </section>
  )
}