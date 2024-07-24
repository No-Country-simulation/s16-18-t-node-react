import { MenuIcon } from '@icons'
import { Avatar } from '@ui'

export const Navbar = () => {
  return (
    <header className="flex h-[81px] justify-between items-center py-6">
      <Avatar />

      <h1>Eco - Viaje</h1>

      <MenuIcon />
    </header>
  )
}
