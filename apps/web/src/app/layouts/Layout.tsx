import { Outlet } from "react-router-dom"

import { Navbar } from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Footer } from "../components/Footer"

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />

      <div className='flex-1 px-9'>
        <Navbar />

        <Outlet />
      </div>

      <Footer className='px-9' />
    </div>
  )
}