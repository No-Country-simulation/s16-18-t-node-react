import { MapPointerIcon } from "@icons"
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
    <article>
      <div className="bg-[#D9DBE933] p-8 rounded-t-xl flex justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MapPointerIcon />
            <h3>{origin}</h3>
          </div>
          <div className="flex items-center gap-2">
            <MapPointerIcon />
            <h3>{destination}</h3>
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
        <div>
          <div className="flex flex-col">
            <h3>FECHA</h3>

            <div className="flex items-center gap-2">
              <MapPointerIcon />
              <p>{startDate}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3>LUGARES</h3>

          <div className="flex items-center gap-4">
            <MapPointerIcon />
            <p>{availableSeats}</p>
          </div>
        </div>
      </div>
    </article>
  )
}