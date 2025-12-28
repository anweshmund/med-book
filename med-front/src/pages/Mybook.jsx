import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Mybook = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div className="px-4 md:px-10 py-6">
      <p className="text-xl font-semibold text-gray-800 mb-6">
        My Appointment
      </p>

      <div className="flex flex-col gap-6">
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="grid grid-col-[1fr_2fr] sm:flex items-center gap-6
                       border-b  bg-white"
          >
            {/* Image */}
            <div>
              <img
                src={item.image}
                alt=""
                className="w-32 bg-indigo-50 "
              />
            </div>

            {/* Details */}
            <div className="flex-1 text-sm text-gray-600">
              <p className="text-lg font-medium text-gray-800">
                {item.name}
              </p>
              <p>{item.speciality}</p>

              <p className="mt-2 font-medium text-gray-700">
                Address:
              </p>
              <p>{item.address.line1}</p>
              <p>{item.address.line2}</p>

              <p className="mt-2">
                <span className="font-medium text-gray-700">
                  Date & Time:
                </span>{' '}
                25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Empty spacer (same as your code) */}
            <div></div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button
                className="px-6 py-2 rounded-md text-sm font-medium
                           bg-indigo-500 text-white
                           hover:bg-indigo-600 transition"
              >
                pay Online
              </button>

              <button
                className="px-6 py-2 rounded-md text-sm font-medium
                           border border-gray-300 text-gray-700
                           hover:bg-gray-100 transition"
              >
                Cancle appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mybook
