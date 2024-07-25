
interface Props {
    icon: () => JSX.Element
    title: string
    value: boolean
    onChange: (checked: boolean) => void
}


const TravelFilterOption = ({ title, icon, value, onChange }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    }

    return (
        <div className='flex justify-between'>
            <div className=' flex items-center gap-3'>
                {icon()}
                <p className='text-lg'>{title}</p>
            </div>
            <input
                type="checkbox"
                checked={value}
                onChange={handleChange}
            />
        </div>
    )
}
export default TravelFilterOption