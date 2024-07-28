import { CalendarIcon, MapPointerIcon, UserIcon } from "@icons"
import { Avatar } from "@ui"

interface Props {
  origin: string
  destination: string
  startDate: string
  driverName: string
  driverImage: string
  driverRating: string
  availableSeats: number
}

export const TravelCard = ({ origin, destination, driverImage, driverRating, startDate, availableSeats, driverName }: Props) => {
  return (
    <div>
      <div className="bg-[#E7E0FA] rounded-t-xl flex justify-between py-3 px-5">
        <div className=" truncate mr-4 space-y-4">
          <div className="flex items-center gap-2">
            <span><MapPointerIcon /></span>
            <div>
              <p className="font-medium">ORIGEN</p>
              <p className="truncate font-light">{origin}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span><MapPointerIcon /></span>
            <div>
              <p>DESTINO</p>
              <p className="truncate text-secondary font-light">{destination}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Avatar />
          <div>
            <p>{driverName}</p>
            <p>⭐ {driverRating}</p>
          </div>
        </div>
      </div>

      <div className="py px-5 rounded-b-xl flex justify-between">
        <div className="w-[50%] py-2 flex flex-col gap-1 border-r-2 border-r-gray-300">
          <h3 className="text-xs">FECHA</h3>

          <div className="flex items-center gap-2">
            <CalendarIcon />
            <p>{startDate}</p>
          </div>
        </div>

        <div className="py-2 flex flex-col gap-1">
          <h3 className="text-xs">LUGARES</h3>

          <div className="flex items-center gap-2">
            <UserIcon />
            <p>{availableSeats}</p>
          </div>
        </div>
      </div>
    </div>
  )
}