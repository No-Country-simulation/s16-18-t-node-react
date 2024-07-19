import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'

function App() {

  return (
    <>
      <nav className='flex gap-5'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Iniciar Sesión</Link>
        <Link to='/register'>Registrarme</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/register' element={<RegisterForm />}></Route>
      </Routes>
    </>
  )
}

export default App
