import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className=' m-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6  md:w-2/4 text-sm text-gray-600'>
          <p>Wellcome to Med Book Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque magni unde qui optio cum a eligendi expedita incidunt, ex mollitia?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit maxime quos labore? Ut, sint blanditiis esse nam nisi, laudantium offici suscipit harum doloremque.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quos esse ullam quam doloremque culpa soluta ipsam nisi possimus labore!</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p >WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Stermlined Appointment Sheduling that fits into busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE</b>
          <p>Access to a network of trusted Healthcare professionals in year area.</p>
          </div>
       <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>Tailores reccommendation and reminders to help you stay on top pf your health.</p>
          </div>
      </div>
    </div>
  )
}

export default About
