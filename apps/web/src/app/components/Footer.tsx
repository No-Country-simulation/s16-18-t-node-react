import { cn } from '@/common/utils'

import { MainBtn } from './MainBtn'
import { HomeIcon, BellIcon, } from '@icons'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn(
      "flex items-center justify-between bg-secondary sticky bottom-0 py-5 w-full",
      className
    )}>


      <HomeIcon fillColor='#652BB3' />

      <div className="absolute inset-x-0 flex justify-center -top-8">
        <MainBtn />
      </div>

      <BellIcon fillColor='#652BB3' />
    </footer>
  )
}
