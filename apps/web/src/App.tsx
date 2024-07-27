import { Outlet, useNavigate } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'

import { Navbar } from './app/components/Navbar'
import { Footer } from './app/components/Footer'
// import { useBoundStore } from './store/bound.store'
// import { useEffect } from 'react'
// import { AUTH_STATUS } from './consts'

function App() {

  // const navigate = useNavigate()
  // const userStatus = useBoundStore(state => state.status)

  // useEffect(() => {
  //   if (userStatus === AUTH_STATUS.AUTHENTICATED) {
  //     navigate('/')
  //   }
  // },
  //   [])

  return (
    <div className="h-screen flex flex-col">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <div className='flex-1 px-9'>
        <Navbar />

        <Outlet />
      </div>

      <Footer className='px-9' />
    </div>
  )
}

export default App
