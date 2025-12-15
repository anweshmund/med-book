import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoc from '../component/RelatedDoc'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlottime] = useState('')

  // ------------------ GET DOCTOR ------------------
  useEffect(() => {
    const info = doctors.find(doc => doc._id === docId)
    setDocInfo(info)
  }, [doctors, docId])

  // ------------------ GENERATE SLOTS ------------------
  const getAvailableSlot = () => {
    if (!docInfo) return

    let slots = []
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      if (today.toDateString() === currentDate.toDateString()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        )
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10, 0, 0, 0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        timeSlots.push({
          datetime: new Date(currentDate),
          time: currentDate
            .toLocaleTimeString([], {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true,
            })
            .toUpperCase(),
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      slots.push(timeSlots)
    }

    setDocSlots(slots)
  }

  useEffect(() => {
    getAvailableSlot()
  }, [docInfo])

  if (!docInfo) return <p>Loading...</p>

  // ------------------ UI ------------------
  return (
    <div>
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={docInfo.image}
          alt={docInfo.name}
        />

        <div className="flex-1 border border-gray-400 rounded-lg p-8 bg-white">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-3">{docInfo.about}</p>

          <p className="text-gray-600 font-medium mt-4">
            Appointment fee: {currencySymbol}
            {docInfo.fees}
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="sm:ml-72 sm:pl-4 mt-6 font-medium text-gray-800">
        <p>Booking Slots</p>

        {/* Days */}
        <div className="flex gap-3 overflow-x-scroll mt-4">
          {docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSlotIndex(index)
                setSlottime('')
              }}
              className={`text-center py-4 min-w-16 rounded-full cursor-pointer
                ${
                  slotIndex === index
                    ? 'bg-primary text-white'
                    : 'border border-gray-400'
                }`}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Times */}
        <div className="flex gap-3 overflow-x-scroll mt-4">
          {docSlots[slotIndex]?.map((item, index) => (
            <p
              key={index}
              onClick={() => setSlottime(item.time)}
              className={`text-sm py-2 px-5 rounded-full cursor-pointer flex-shrink-0
                ${
                  slotTime === item.time
                    ? 'bg-primary text-white'
                    : 'border border-gray-400 text-gray-700'
                }`}
            >
              {item.time}
            </p>
          ))}
        </div>

        {/* Selected Slot */}
        {slotTime && (
          <p className="mt-4 text-sm text-gray-700">
            Selected Time: <b>{slotTime}</b>
          </p>
        )}

      <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book Appoinment</button>
      </div>
        <RelatedDoc docId={docId} speciality={docInfo.speciality}/>
    </div>
  )}

export default Appointment
