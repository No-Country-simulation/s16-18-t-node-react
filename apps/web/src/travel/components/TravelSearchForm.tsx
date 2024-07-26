import { CustomInput } from '@ui'
import { CalendarIcon, ExchangeIcon, Filter, MapPointerIcon, NoKids, NoPets, NoSmoking, UserIcon } from '@/common/components/icons'
import { useState } from 'react'
import TravelFilterOption from './TravelFilterOption'
import { SearchBtn } from '@/app/components/SearchBtn'

interface TravelData {
    origin: string
    destination: string
    startDate: string
    totalCost: number
    noPets: boolean
    noKids: boolean
    noSmoking: boolean
    noRating: boolean
}

const initialTravelData: TravelData = {
    origin: '',
    destination: 'sdf',
    startDate: '',
    totalCost: 100000,
    noPets: false,
    noKids: false,
    noSmoking: false,
    noRating: false
}

const TravelSearchForm = () => {
    const [formValues, setFormValues] = useState<TravelData>(initialTravelData)
    const [show, setShow] = useState<boolean>(false)

    const handleShowFilters = () => {
        setShow(!show)
    }

    const handleFilterChange = (field: keyof TravelData) => (checked: boolean) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [field]: checked
        }));
    };

    const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevValues => ({
            ...prevValues,
            totalCost: Number(e.target.value)
        }))
    }


    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues(prevValues => ({
            ...prevValues,
            startDate: e.target.value
        }))
    }

    const exchangeValues = () => {
        setFormValues(prevValues => ({
            ...prevValues,
            origin: formValues.destination,
            destination: formValues.origin
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formValues)
        alert('enviado')
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            <div className='relative'>
                <CustomInput
                    title='Origen'
                    icon={() => <MapPointerIcon />}
                    placeholder='Ingresa desde donde viajas'
                    style={{ borderBottomLeftRadius: '0', borderBottomRightRadius: '0' }}
                />
                <CustomInput
                    title='Destino'
                    icon={() => <MapPointerIcon />}
                    placeholder='Ingresa hasta donde viajas'
                    style={{ borderTopLeftRadius: '0', borderTopRightRadius: '0' }}
                />

                <div onClick={exchangeValues} className='bg-tertiary p-[5px] cursor-pointer grid place-items-center rounded-sm absolute top-[45px] right-3'>
                    <ExchangeIcon />
                </div>
            </div>

            <div className="h-[59px] px-4 rounded-xl flex justify-between border border-primary">
                <div className="flex flex-col w-[50%] gap-1 border-e-2 justify-center">
                    <h3 className="text-xs text-center">FECHA</h3>

                    <div className="flex items-center gap-2">
                        {/* <CalendarIcon /> */}
                        <input type="date" value={formValues.startDate} onChange={handleChangeDate} className='text-base text-secondary outline-none w-[120px]' />
                        {/* <p className='text-base'>{formValues.startDate}</p> */}
                    </div>
                </div>

                <div className="flex flex-col w-[50%] items-center gap-1 justify-center">
                    <h3 className="text-xs">PASAJEROS</h3>

                    <div className="flex items-center gap-2">
                        <UserIcon />
                        <p className='text-base'>1</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center gap-3">
                <Filter />
                <span onClick={handleShowFilters} className="underline text-secondary text-sm font-bold cursor-pointer">Filtro avanzado</span>
            </div>

            <div className={`${show ? 'block' : 'hidden'} flex flex-col justify-center items-center gap-3 p-8 border border-primary rounded-[10px]`}>
                <div>
                    <label className="text-base font-bold text-[#6E7191]">Costo máximo</label>
                    <input
                        type="range"
                        min="100"
                        max="100000"
                        value={formValues.totalCost}
                        onChange={handleCostChange}
                        className='w-full' />
                    <span className='text-secondary'>${formValues.totalCost}</span>
                </div>

                <div className="w-full flex flex-col gap-5 text-primary">
                    <label className="text-base font-bold text-[#6E7191] my-1">Preferencias</label>

                    <TravelFilterOption
                        title='No mascotas'
                        icon={() => <NoPets />}
                        value={formValues.noPets}
                        onChange={handleFilterChange('noPets')}
                    />

                    <TravelFilterOption
                        title='No niños'
                        icon={() => <NoKids />}
                        value={formValues.noKids}
                        onChange={handleFilterChange('noKids')}
                    />

                    <TravelFilterOption
                        title='No fumadores'
                        icon={() => <NoSmoking />}
                        value={formValues.noSmoking}
                        onChange={handleFilterChange('noSmoking')}
                    />

                    <TravelFilterOption
                        title='No calificación'
                        icon={() => <NoSmoking />}
                        value={formValues.noRating}
                        onChange={handleFilterChange('noRating')}
                    />
                </div>
            </div>

            <SearchBtn />
        </form>
    )
}
export default TravelSearchForm