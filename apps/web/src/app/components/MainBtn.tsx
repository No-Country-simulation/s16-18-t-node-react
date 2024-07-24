import { CircleIcon, WheelIcon } from '@icons'

export const MainBtn = () => {
  return (
    <div className="bg-[#A996FF] border-[5px] border-white size-[76px] rounded-full flex items-center justify-center">
      <button>
        <div className="absolute">
          <CircleIcon />
        </div>
        <div className="relative">
          <WheelIcon />
        </div>
      </button>
    </div>
  )
}