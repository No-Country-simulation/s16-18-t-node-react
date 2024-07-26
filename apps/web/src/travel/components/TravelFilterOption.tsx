
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
        <div className='flex justify-between items-center'>
            <div className='flex gap-3'>
                {icon()}
                <h1 className="text-secondary">{title}</h1>
            </div>
            <input
                type="checkbox"
                checked={value}
                onChange={handleChange}
                className="toggle toggle-sm bg-white [--tglbg:#6750A4] hover:bg-white"
            />
        </div>
    )
}
export default TravelFilterOption