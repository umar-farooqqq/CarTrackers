import React from 'react'
import Three from '../components/Three';

const Getpaid = () => {
  return (
    <div>
        {/* Get Paid section */}
      <div className="relative bg-white mb-4 flex flex-col items-center">
        <img
          src="/worker.jpg"
          alt="Get Paid"
          className="w-full object-contain"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-between p-6 pl-52 pr-[1000px]">
          <div>
            <span className="text-sm text-orange-400 font-bold tracking-widest flex items-center">
              <span className="text-2xl">*</span> HOW TO GET PAID
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-2 leading-tight">
              HOW TO GET
              <br />
              PAID
            </h2>
            <p className="text-white text-sm mb-6">
              Pick a payment option that works for you.
              <br />
              We know customers have different preferences—
              <br />
              whether it's a tangible method or a direct transfer to your bank —
              we're ready to provide you with certified funds.
            </p>
          </div>
          <button className="bg-orange-400 text-white font-semibold px-6 py-2 rounded shadow hover:bg-orange-500 transition w-40 h-16">
            GET QUOTE &rarr;
          </button>
        </div>
        <div className="absolute py-8 right-0 top-0">
          <Three />
        </div>
      </div>
    </div>
  )
}

export default Getpaid