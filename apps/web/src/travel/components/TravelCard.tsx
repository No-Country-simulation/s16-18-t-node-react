import { Calendar, MapPointerIcon, UserIcon } from "@icons"
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
      <div className="bg-[#D9DBE933] rounded-t-xl flex justify-between p-9">
        <div className="space-y-1 truncate mr-2">
          <div className="flex items-center gap-2">
            <span><MapPointerIcon /></span>
            <p className="truncate text-primary">{origin}</p>
          </div>

          <div className="flex items-center gap-2">
            <span><MapPointerIcon /></span>
            <p className="truncate text-primary">{destination}</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Avatar />
          <div>
            <p>{driverName}</p>
            <p>⭐ {driverRating}</p>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-b-xl flex justify-between border border-[#D9DBE9]">
        <div className="flex flex-col gap-1">
          <h3 className="text-xs">FECHA</h3>

          <div className="flex items-center gap-2">
            <Calendar />
            <p>{startDate}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
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