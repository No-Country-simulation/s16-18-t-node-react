import { cn } from "@/common/utils"

import { useAuth } from "@/auth/hooks/useAuth"
import { useBoundStore } from "@/store/bound.store"
import { LogoutIcon } from "@icons"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const { onLogout } = useAuth()

  const isOpenMenu = useBoundStore(state => state.isOpen)
  const closeMenu = useBoundStore(state => state.close)

  return (
    <>
      <div onClick={closeMenu} className={`w-full hover:cursor-pointer fixed inset-0 bg-tertiary/50 z-10 ${isOpenMenu ? 'block' : 'hidden'}`}></div >

      <aside className={
        cn('w-3/4 shadow-m p-4 transition-all duration-300 bg-gray-100 fixed top-0 bottom-0 right-0 z-20', {
          'translate-x-[100%]': !isOpenMenu
        })
      }>

        <button onClick={onLogout} className="px-4 py-3 flex items-center gap-2 rounded-md text-secondary w-full hover:bg-tertiary hover:text-gray-200">
          <LogoutIcon />
          <span>Cerrar sesión</span>
        </button>

        <Link onClick={closeMenu} to='/profile' className="px-4 py-3 flex items-center gap-2 rounded-md text-secondary w-full hover:bg-tertiary hover:text-gray-200">
          <span>Mi Perfil</span>
        </Link>

      </aside>
    </>
  )
}

export default Sidebar