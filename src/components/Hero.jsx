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
      <img
        src={imgpoint2}
        alt="Hero"
        className="w-full h-[650px] object-cover"
      />

      {/* Content Container */}
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
      {imgpoint2 === "/car.png" && <HowItWorks />}
    </div>
  );
};

export default Hero;
