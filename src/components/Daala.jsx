import React from "react";

const Daala = () => {
  return (
    <div className="relative w-full h-[470px] flex items-center justify-center">
      {/* Background image goes here */}
      <img
        src="/daala.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-6 z-10">
          We buy all years, makes, & models
        </h2>
        <div className="w-full flex items-center justify-center mb-2 z-10">
          <div className="w-full border-t border-white opacity-80"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-6 z-10">
          {/* Add your logo images below */}
          <div className="flex flex-col items-center">
            <img src="/audi.png" alt="" className="w-20 h-12" />
          </div>
          <div className="flex flex-col items-center">
            <img src="/jaguar.png" alt="" className="w-[98px] h-12" />
          </div>
          <div className="flex flex-col items-center">
            <img src="/volks.png" alt="" className="w-[180px] h-12" />
          </div>
          <div className="flex flex-col items-center">
            <img src="/acura.png" alt="" className="w-[170px] h-12" />
          </div>
          <div className="flex flex-col items-center">
            <img src="/honda.png" alt="" className="w-[180px] h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daala;
