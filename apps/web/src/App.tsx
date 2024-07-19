import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import Navbar from './components/ui/Navbar'

function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='/register' element={<RegisterForm />}></Route>
      </Routes>
    </>
  )
}

export default App
