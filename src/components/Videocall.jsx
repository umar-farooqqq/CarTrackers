import React from 'react'

const Videocall = () => {
  return (
    <div className='bg-green-100 py-12'>
         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Left: Images */}
      <div className="flex gap-4 w-1/2">
        <img
          src="/phone.png"
          alt="Tablet"
          className="rounded-lg w-[460px] h-[300px] "
        />
      </div>
      {/* Right: Text */}
      <div className="w-1/2">
        <div className="flex items-center mb-2">
          <span className="text-orange-500 text-lg mr-2">★</span>
          <span className="text-orange-500 text-sm font-medium">
            Do You Have a Smart Phone?
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4">10 Minute Video Appraisal</h2>
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <img
              src="/phonetick.png"
              alt="Tablet"
              className="w-14 h-14 mb-2 text-orange-500"
            />
            <div className="my-4">
              <span className="font-semibold ml-6 ">Never Leave Your Home</span>
              <p className="text-sm ml-6 mt-3">
                Get a quick and accurate appraisal for your vehicle through a
                simple video call from the comfort of your home
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-1">
            <img
              src="/cartick.png"
              alt="Tablet"
              className="w-14 h-14 mb-2 text-orange-500"
            />
            <div>
              <span className="font-semibold ml-6">Final Offer</span>
              <p className="text-sm ml-6 mt-3">
                Stop wasting time driving to dealerships only to get low offers.
                With Car Trackers, you'll receive a final offer instantly after
                we assess your vehicle via video call. It doesn't get any
                easier!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Videocall