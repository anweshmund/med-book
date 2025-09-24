import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Profile from './pages/profile'
import Mybook from './pages/mybook'
import Appointment from './pages/Appointment'
import Navbar from './component/Navbar'
import Doctor from './pages/Doctor'
import Footer from './component/footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/doctors' element={<Doctor/>} />
      <Route path='/doctors/:speciality' element={<Doctor/>} />
      
      <Route part='/login' element ={<Login/>}/>
      <Route part='/about' element ={<About/>}/>
      <Route part='/contact' element ={<Contact/>}/>
      <Route part='/my-profile' element ={<Profile/>}/>
      <Route part='/my-appointments' element ={<Mybook/>}/>
      <Route part='/appointments:/docId' element ={<Appointment/>}/>
    </Routes>
   <Footer/>
    </div>
  )
}

export default App
