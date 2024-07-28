import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import { Navbar } from './app/components/Navbar'
import { Footer } from './app/components/Footer'
import { useBoundStore } from './store/bound.store'
import { AUTH_STATUS } from './consts'
import { useAuth } from './auth/hooks/useAuth'
import Sidebar from './app/components/Sidebar'

function App() {

  const navigate = useNavigate()
  const userStatus = useBoundStore(state => state.status)

  const { onRenewToken } = useAuth()

  useEffect(() => {
    onRenewToken()
  }, [])

  useEffect(() => {
    if (userStatus === AUTH_STATUS.AUTHENTICATED) {
      navigate('/')
    } else {
      navigate('/auth/login')
    }
  }, [navigate, userStatus])

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <Sidebar />

      <div className='flex-1 px-9'>
        <Navbar />

        <Outlet />
      </div>

      <Footer className='px-9' />
    </div>
  )
}

export default App
