import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-6 md:px-20">

      {/* Heading */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* Content */}
      <div className="my-14 flex flex-col md:flex-row items-center gap-12 mb-28 text-sm text-gray-600">

        {/* Image */}
        <img
          src={assets.contact_image}
          alt="Contact"
          className="w-full md:w-[420px] rounded-lg object-cover"
        />

        {/* Text Section */}
        <div className="flex flex-col gap-4 max-w-md">

          <p className="text-lg font-semibold text-gray-800">
            Our Office
          </p>

          <p>
            WD-20 Santi Nagar <br />
            Khariar, Odisha, India
          </p>

          <p>
            <span className="font-medium">Tel:</span> (+91) 891735985
          </p>

          <p className="text-lg font-semibold text-gray-800 mt-4">
            Careers at Med-Book
          </p>

          <p>
            Learn more about our team and job openings.
          </p>

          <button className="mt-3 w-fit px-6 py-2 border border-gray-400 rounded-md
                             hover:bg-primary hover:text-white  transition">
            Explore Jobs
          </button>
        </div>

      </div>
    </div>
  )
}

export default Contact
