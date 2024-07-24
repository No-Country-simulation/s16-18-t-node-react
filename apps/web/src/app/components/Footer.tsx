import { cn } from '@/common/utils'

import { MainBtn } from './MainBtn'
import { HomeIcon, BellIcon, } from '@icons'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn(
      "flex items-center justify-between bg-[#D9DBE9] sticky bottom-0 py-5 w-full",
      className
    )}>

      <HomeIcon />

      <div className="absolute inset-x-0 flex justify-center -top-8">
        <MainBtn />
      </div>

      <BellIcon />
    </footer>
  )
}
