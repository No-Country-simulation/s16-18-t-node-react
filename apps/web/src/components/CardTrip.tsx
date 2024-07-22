import { Trip } from "types"
import { Button } from "./ui/button"

interface Props {
    item: Trip
}

const CardTrip = ({ item }: Props) => {
    return (
        <div className="w-80 card border border-gray-400 rounded-md p-3 shadow-lg">
            <div className="card-body">
                <h2 className="card-title">Titulo</h2>
                <p>Origen: {item.origin}</p>
                <p>Destino: {item.destination}</p>
                <Button className="mt-2">Ver</Button>
            </div>
        </div>)
}
export default CardTrip