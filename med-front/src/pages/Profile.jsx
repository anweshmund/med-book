import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Anwesh Mund",
    image: assets.profile_pic,
    email: 'anwesh@medbook.com',
    phone: '+91 9382971892',
    address: {
      line1: "57th floor, seyview apartment",
      line2: "BBSR, Odisha"
    },
    gender: 'Male',
    DoB: '2003-02-25'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="max-w-xl mx-auto ">

      {/* Profile Image */}
      <img
        src={userData.image}
        alt="profile"
        className="w-28 h-28 rounded-full object-cover mx-auto"
      />

      {/* Name */}
      <div className="text-center mt-4">
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={e =>
              setUserData(prev => ({ ...prev, name: e.target.value }))
            }
            className="border px-3 py-1 rounded"
          />
        ) : (
          <p className="text-xl font-semibold">{userData.name}</p>
        )}
      </div>

      <hr className="my-4" />

      {/* Contact Info */}
      <div>
        <p className="font-semibold mb-2">Contact Information</p>

        <p><b>Email:</b> {userData.email}</p>

        <p className="mt-2"><b>Phone:</b></p>
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={e =>
              setUserData(prev => ({ ...prev, phone: e.target.value }))
            }
            className="border px-3 py-1 rounded w-full"
          />
        ) : (
          <p>{userData.phone}</p>
        )}

        <p className="mt-2"><b>Address:</b></p>
        {isEdit ? (
          <>
            <input
              type="text"
              value={userData.address.line1}
              onChange={e =>
                setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value }
                }))
              }
              className="border px-3 py-1 rounded w-full mb-2"
            />
            <input
              type="text"
              value={userData.address.line2}
              onChange={e =>
                setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value }
                }))
              }
              className="border px-3 py-1 rounded w-full"
            />
          </>
        ) : (
          <p>
            {userData.address.line1}
            <br />
            {userData.address.line2}
          </p>
        )}
      </div>

      <hr className="my-4" />

      {/* Basic Info */}
      <div>
        <p className="font-semibold mb-2">Basic Information</p>

        <p><b>Gender:</b></p>
        {isEdit ? (
          <select
            value={userData.gender}
            onChange={e =>
              setUserData(prev => ({ ...prev, gender: e.target.value }))
            }
            className="border px-3 py-1 rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        ) : (
          <p>{userData.gender}</p>
        )}
       <p className="text-medium  mb-1"><b>Birthday:</b></p>
{
  isEdit 
  ? (
    <input
      type="date"
      onChange={e =>
        setUserData(prev => ({ ...prev, DoB: e.target.value }))
      }
      value={userData.DoB}
      className="border border-gray-300 rounded-md px-3 py-2 text-sm
                 outline-none focus:ring-2 focus:ring-indigo-400"
    />
  )
  : (
    <p className="text-gray-800 text-sm">
      {userData.DoB}
    </p>
  )
}

      </div>

      {/* Edit Button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className="px-6 py-2 bg-primary text-white rounded"
        >
          {isEdit ? "Save" : "Edit Profile"}
        </button>
      </div>

    </div>
  )
}

export default Profile
