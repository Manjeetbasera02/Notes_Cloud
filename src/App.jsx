import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import { Contextprovider } from './context/Usercontext'

function App() {

  return (
   <>
   <Contextprovider>
      <BrowserRouter>

        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Login' element={<Login/>} />
            <Route path='/Signup' element={<Signup/>} />
        </Routes>

      </BrowserRouter>
    </Contextprovider>
   </>
  )
}

export default App
