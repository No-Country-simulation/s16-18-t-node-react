import { Trip } from "types"
import CardTrip from "./CardTrip"

interface Props {
    trips: Trip[]
}

const ListTrips = ({ trips }: Props) => {
    return (
        <div className="flex flex-wrap justify-between">
            {trips.map(item => (
                <CardTrip key={item.id} item={item} />
            ))}
        </div>
    )
}
export default ListTrips