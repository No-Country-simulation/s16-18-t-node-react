import { MenuIcon } from '@icons'
import { Avatar } from '@ui'

export const Navbar = () => {
  return (
    <header className="flex h-[81px] justify-between items-center py-6">
      <Avatar />

      <h1 className='text-[#03CB23] text-2xl uppercase'>Eco<span className='text-[#04A6CC]'>Viaje</span></h1>

      <MenuIcon />
    </header>
  )
}
