import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <form
      className="min-h-[80vh] flex items-center justify-center px-4"
    >
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8">

        {/* Title */}
        <p className="text-2xl font-semibold text-gray-800 text-center">
          {state === 'sign Up' ? "Create Account" : "Login"}
        </p>

        <p className="text-sm text-gray-500 text-center mt-1">
          Please {state === 'sign Up' ? "sign up" : "log in"} to book appointment
        </p>
          {
            state=== "sign Up"&&  <div className="mt-6">
          <p className="text-sm text-gray-600 mb-1">Full Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.name)}
            value={name}
            required
            className="w-full px-4 py-2 border rounded-md outline-none
                       focus:ring-2 focus:ring-indigo-400"
          />
        </div>
          }
       

        {/* Email */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-1">Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.name)}
            value={email}
            required
            className="w-full px-4 py-2 border rounded-md outline-none
                       focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-1">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.name)}
            value={password}
            required
            className="w-full px-4 py-2 border rounded-md outline-none
                       focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-primary text-white py-2 rounded-md
                     hover:bg-primary transition font-medium"
        >
          {state === 'sign Up' ? "Create Account" : "Login"}
        </button>
        {
          state === "sign Up" ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> : <p>Create an new Account? <span onClick={() => setState('sign Up')} className='text-primary underline cursor-pointer'>clickn Here</span>  </p>
        }
      </div>
      3:36:30
    </form>
  )
}

export default Login
