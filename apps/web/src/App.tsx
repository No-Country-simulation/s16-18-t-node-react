import { Outlet } from 'react-router-dom'

import { Navbar } from './app/components/Navbar'
import { Footer } from './app/components/Footer'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className='flex-1 px-9'>
        <Navbar />

        <Outlet />
      </div>

      <Footer className='px-9' />
    </div>
  )
}

export default App
