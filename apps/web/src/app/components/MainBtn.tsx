import { CircleIcon, WheelIcon } from '@icons'

export const MainBtn = () => {
  return (
    <div className="bg-[#A996FF] border-[5px] border-white size-[76px] rounded-full flex items-center justify-center">
      <button>
        <div className="absolute"><CircleIcon strokeColor='#652BB3' /></div>
        <div className="relative"><WheelIcon fillColor='#652BB3' /></div>
      </button>
    </div>
  )
}