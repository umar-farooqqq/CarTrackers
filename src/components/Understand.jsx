import React from "react";
import Three from "./Three";

const Understand = () => {
  return (
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
            WE UNDERSTAND <span className="text-black">HOW BUSY YOU ARE.</span>
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
  );
};

export default Understand;
