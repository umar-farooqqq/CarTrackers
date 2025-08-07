import React from "react";
import HowItWorks from "./Howitworks";

const Hero = ({ endpoint1, imgpoint2 }) => {
  return (
    <div
      className={
        imgpoint2 === "/car.png"
          ? "relative w-full h-screen mb-32"
          : "relative w-full"
      }
    >
      {/* Background Image */}
      {/* Hero Image and overlays */}
      <div className="relative w-full h-[650px]">
        <img
          src={imgpoint2}
          alt="Hero"
          className="w-full h-[650px] object-cover"
        />
        {/* Black overlay and centered text only for Apply for a New Car */}
        {imgpoint2 === "/happy.png" && (
          <>
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <span
                className="text-xs text-white
                font-semibold mb-2 flex items-center gap-2"
              >
                <span className="text-lg text-orange-400">★</span> New Car
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center tracking-wider leading-tight mb-2">
                APPLY FOR A <br className="hidden md:block" /> NEW CAR
              </h1>
            </div>
          </>
        )}
      </div>

      {/* Content Container for car.png only */}
      {imgpoint2 === "/car.png" && (
        <div className="absolute inset-0 flex items-center justify-between px-8 lg:px-16 xl:px-64 pb-[180px]">
          {/* Left Side - Text Content */}
          <div className="text-white max-w-xl z-10">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight mb-4">
              {endpoint1}
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              so you can sell your vehicle today!
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-md p-6 w-full max-w-md z-10 shadow-2xl">
            {/* Tab Navigation */}
            <div className="flex mb-6">
              <button className="flex-1 py-3 px-4 text-sm font-medium rounded-l-md border bg-white text-gray-600 border-gray-300">
                Make / Model
              </button>
              <button className="flex-1 py-3 px-4 text-sm font-medium border-t border-b bg-gray-100 text-gray-900 border-gray-300">
                VIN
              </button>
              <button className="flex-1 py-3 px-4 text-sm font-medium rounded-r-md border bg-white text-gray-600 border-gray-300">
                License Plate
              </button>
            </div>

            {/* Form */}
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="VIN"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-[96px] bg-[#F59934] text-white py-2 px-2 rounded-md font-medium hover:bg-orange-600 transition-colors duration-200"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
      {/* Only show HowItWorks if car.png */}
      {imgpoint2 === "/car.png" && <HowItWorks />}
    </div>
  );
};

export default Hero;
