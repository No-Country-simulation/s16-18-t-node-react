import { Travel } from "../interfaces/travel.interface"
import { TravelCard } from "./TravelCard"

interface Props {
  travels: Travel[]
}

export const TravelGrid = ({ travels }: Props) => {

  return (
    <section className="flex flex-col gap-5 mb-16">
      {
        travels?.map(travel => (
          <TravelCard
            key={travel?.id}
            travelId={travel?.id}
            availableSeats={travel?.disponibility}
            origin={travel?.origin}
            destination={travel?.destination}
            driverImage='notfound'
            driverName={travel?.driver[0]?.name}
            driverRating={travel?.rating?.average ?? 0}
            startDate={travel?.startDate}
          />
        ))
      }
    </section>
  )
}
