import { useState } from "react"
import { Button } from "./ui/button"
import { MagnifyingGlassIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import ListTrips from "./ListTrips"
import { Trip } from "types"

const trips: Trip[] = [
    {
        id: 1,
        origin: 'Buenos Aires',
        destination: 'Mendoza'
    },
    {
        id: 2,
        origin: 'Cordoba',
        destination: 'Misiones'
    },
    {
        id: 3,
        origin: 'Argentina',
        destination: 'Chile'
    },
    {
        id: 4,
        origin: 'Santa Fe',
        destination: 'Buenos Aires'
    }
]

const Home = () => {
    const [origin, setOrigin] = useState<string>('')
    const [destination, setDestination] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({ 'origen': origin, 'destino': destination })
    }

    const exchangeOriginDestination = () => {
        setOrigin(destination)
        setDestination(origin)
    }

    return (
        <div className="container mt-3 flex flex-col gap-7">
            <div>
                <h3>Busca tu viaje</h3>
                <form onSubmit={handleSubmit} className="flex gap-2 my-4 items-center lg:flex-row flex-col">
                    <input type="search" value={origin} onChange={e => setOrigin(e.target.value)} className="border border-gray-400 rounded w-30 py-2 px-3 text-gray-700 focus:outline-none" placeholder="Origen" />
                    <Button onClick={exchangeOriginDestination}><ArrowsRightLeftIcon className="size-6 cursor-pointer" /></Button>
                    <input type="search" value={destination} onChange={e => setDestination(e.target.value)} className="border border-gray-400 rounded w-30 py-2 px-3 text-gray-700 focus:outline-none" placeholder="Destino" />
                    <Button><MagnifyingGlassIcon className="size-6 cursor-pointer" /></Button>
                </form>
            </div>
            <div className="flex justify-between items-center">
                <h3>Viajes disponibles</h3>
                <Button className="w-[150px] rounded-xl">Crear Viaje</Button>
            </div>

            <ListTrips trips={trips} />
        </div>
    )
}
export default Home