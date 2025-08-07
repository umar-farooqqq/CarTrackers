import React from "react";

const SellCar = () => {
  return (
    <section className="w-full bg-[#fafafa] py-20">
      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-between px-4 md:px-0">
        <div className="flex-1 w-full min-w-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-xl">✱</span>
            <span className="text-orange-500 font-semibold text-base">
              Most Convenient Way to Sell your Car
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-black mb-4">
            Why wait? Sell your car
            <br />
            today with Car Trackers
          </h1>
          <p className="text-gray-700 text-md mb-4">
            Selling your car to Car Trackers is the easiest and most convenient
            choice for any vehicle owner. Our virtual appraisal process allows
            you to receive an instant offer from the comfort of your home,
            eliminating the hassle of visiting multiple dealerships.
          </p>
          <div className="flex flex-col">
            <div className="flex items-center gap-3 py-4 px-2">
              <img src="/globe.svg" alt="" />
              <span className="font-semibold text-lg text-black">
                Get Paid on the Spot
              </span>
            </div>
            <div className="w-full h-px bg-[#ECECEC]" />
            <div className="flex items-center gap-3 py-4 px-2">
              <img src="/man.svg" alt="" />
              <span className="font-semibold text-lg text-black">
                We Handle all DMV Paperwork
              </span>
            </div>
            <div className="w-full h-px bg-[#ECECEC]" />
            <div className="flex items-center gap-3 py-4 px-2">
              <img src="/clock.svg" alt="" />
              <span className="font-semibold text-lg text-black">
                Free Pickup
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center relative w-full md:w-[420px] min-h-[380px]">
          <img src="/soldcar.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SellCar;
