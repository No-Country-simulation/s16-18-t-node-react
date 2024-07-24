import { TravelCard } from "./TravelCard"

export const TravelGrid = () => {
  return (
    <section className="flex flex-col gap-5 pb-4">
      <TravelCard
        availableSeats={4}
        origin='San Fernando, Chilessssssssssssssssssss'
        destination='Rancagua, Chilesfddddddddddddddddddddd'
        driverImage='notfound'
        driverName='Manuel'
        driverRating='4'
        startDate={'2024-07-23'}
      />

      <TravelCard
        availableSeats={4}
        origin='San Fernando, Chilessssssssssssssssssss'
        destination='Rancagua, Chilesfddddddddddddddddddddd'
        driverImage='notfound'
        driverName='Manuel'
        driverRating='4'
        startDate={'2024-07-23'}
      />

      <TravelCard
        availableSeats={4}
        origin='San Fernando, Chilessssssssssssssssssss'
        destination='Rancagua, Chilesfddddddddddddddddddddd'
        driverImage='notfound'
        driverName='Manuel'
        driverRating='4'
        startDate={'2024-07-23'}
      />
    </section>
  )
}
