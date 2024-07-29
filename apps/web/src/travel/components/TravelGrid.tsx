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
            key={travel.id}
            travelId={travel.id}
            availableSeats={3}
            origin={travel.origin}
            destination={travel.destination}
            driverImage='notfound'
            driverName='Manuel'
            driverRating='4'
            startDate={travel.startDate}
          />
        ))
      }
    </section>
  )
}
