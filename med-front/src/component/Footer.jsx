import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-1/2 text-gray-500 leading-6 '>Lorem ipsum dolor sit amet.</p>
        </div>
        {/* center section */}
        <div>
            <p className=' text-xl front-medium mb-5'>Company</p>
            <ul className=' flex flex-col gap-2 text-gray-600 '>
                <li>Home </li>
                <li>About us </li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                
            </ul>
        </div>
        {/* right section */}
        <div>
            <p className=' text-xl front-medium mb-5'>Get In Touch</p>
            <ul className=' flex flex-col gap-2 text-gray-600 '>
                <li>+9390293993</li>
                <li>anweshmund@gmail.com</li>
            </ul>
        </div>

      </div>
        {/* underline and copyright section */}
      <div >  
        <hr />
      <p className="py-5 text-sm text-center text-gray-500">
    © {new Date().getFullYear()} Anwesh Mund. All rights reserved.
  </p>
      </div>
    </div>
  )
}

export default Footer

