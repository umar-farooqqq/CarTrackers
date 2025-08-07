import React from 'react'
import Navbar from '../components/Navbar'


const Aboutus = () => {
  return (
    <div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen w-full bg-slate-500">
        <span className="text-4xl font-semibold text-center">
          Page For <br /> About Us
        </span>
      </div>
    </div>
  )
}

export default Aboutus