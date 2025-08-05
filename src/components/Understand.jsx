import React from "react";
import Three from "./Three";

const Understand = () => {
  return (
    <div>
      {/* Understand Section */}
      <div className="bg-[#FF8713] w-full py-2 flex items-center justify-center relative overflow-x-hidden">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-8">
          {/* Left vertical dashed line */}
          <div className="absolute left-30 top-0 bottom-0 border-l-2 border-dashed border-white "></div>
          <img
            src="/logolarge.png"
            alt="logolarge"
            className="w-52 h-52 object-contain"
          />

          {/* Right vertical dashed line */}
          <div className="absolute left-[435px] top-0 bottom-0 border-l-2 border-dashed border-white "></div>

          <div className="flex-1 ml-16 px-8">
            <h1 className="text-white text-4xl font-bold mb-4 tracking-wide">
              WE UNDERSTAND{" "}
              <span className="text-black">HOW BUSY YOU ARE.</span>
            </h1>
            <p className="text-white text-sm">
              We can do videocall appraisals to purchase your vehicle from the
              convenience of your home, work, or anywhere you have signal. Our
              licensed appraisers will handle everything from paperwork to
              payment.
            </p>
          </div>

          {/* Right logo absolutely positioned */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 -scale-x-100">
            <img
              src="/logolarge.png"
              alt="logolarge"
              className="w-52 h-52 object-contain"
            />
          </div>
        </div>
      </div>

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
  );
};

export default Understand;
