import React from 'react'
import Navbar from '../components/Navbar'

const Media = () => {
  return (
    <div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen w-full bg-slate-500">
        <span className="text-4xl font-semibold text-center">
          Page For <br /> Media
        </span>
      </div>
    </div>
  )
}

export default Media