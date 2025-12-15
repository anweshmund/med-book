import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Profile from './pages/profile'
import Mybook from './pages/mybook'

import Navbar from './component/Navbar'
import Doctor from './pages/Doctor'
import Footer from './component/footer'
import Appointment from './pages/Appointment'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctor/>} />
      <Route path='/doctors/:speciality' element={<Doctor/>} />
      <Route path='/login' element ={<Login/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/my-profile' element ={<Profile/>}/>
      <Route path='/my-appointments' element ={<Mybook/>}/>
      <Route path='/appointments/:docId' element ={<Appointment/>} />
    </Routes>
   <Footer/>
    </div>
  )
}

export default App
