import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import { usercontext } from './context/Usercontext'

function App() {

  const {user, setuser} = useContext(usercontext)

  return (
   <>
      <BrowserRouter>

        <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/Login' />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Login' element={user ? <Navigate to='/' /> : <Login/>} />
            <Route path='/Signup' element={user ? <Navigate to='/' /> : <Signup/>} />
        </Routes>

      </BrowserRouter>
   </>
  )
}

export default App
