import { cn } from '@/common/utils'

import { MainBtn } from './MainBtn'
import { HomeIcon, BellIcon, } from '@icons'
import { Link } from 'react-router-dom'

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn(
      "flex items-center justify-between bg-secondary sticky bottom-0 py-5 w-full",
      className
    )}>


      <Link to="/" className='hover:cursor-pointer z-10'><HomeIcon fillColor='#652BB3' /></Link>

      <div className="absolute inset-x-0 flex justify-center -top-8">
        <MainBtn />
      </div>

      <Link to="/notifications" className='hover:cursor-pointer z-10'><BellIcon fillColor='#652BB3' /></Link>      
    </footer>
  )
}
