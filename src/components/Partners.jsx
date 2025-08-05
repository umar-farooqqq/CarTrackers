import React from "react";

const Partners = () => {
  return (
    <div className="bg-[#FF8713] py-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="text-white text-sm font-semibold tracking-widest mb-8 text-center">
          OUR PARTNERS & SUPPORTS
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-6 w-full ">
          {/* Add your logo images below */}
          <div className="h-10 flex items-center">
            <img
              src="/logo1.png"
              alt=""
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="h-10 flex items-center">
            <img
              src="/logo2.png"
              alt=""
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="h-10 flex items-center">
            <img
              src="/logo3.png"
              alt=""
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="h-10 flex items-center">
            <img
              src="/logo4.png"
              alt=""
              className="object-contain filter brightness-0 invert"
            />
          </div>
          <div className="h-10 flex items-center">
            <img
              src="/logo5.png"
              alt=""
              className="object-contain filter brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
