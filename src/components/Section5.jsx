import React from "react";

const Section5 = () => {
  return (
    <div className="relative w-full h-[270px]">
      {/* Background image */}
      <img src="/sec5.jpg" alt="" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-8">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center flex-1">
            {/* Place your icon here */}
            <div className="mb-2 bg-[#FF8713] rounded-full p-5"><img src="/brake3.png" alt="Icon 1" className="w-8 h-8 object-contain " /></div>
            <div className="text-3xl font-bold text-white mb-1">1,566+</div>
            <div className="text-white text-sm">Car Trackers Installed</div>
          </div>
          {/* Divider */}
          <div className="h-36 border-r-2 border-dashed border-white opacity-80 mx-4"></div>
          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-2 bg-[#FF8713] rounded-full p-5"><img src="/like3.png" alt="Icon 2" className="w-8 h-8 object-contain"/></div>
            <div className="text-3xl font-bold text-white mb-1">25+</div>
            <div className="text-white text-sm">Years Experience</div>
          </div>
          <div className="h-36 border-r-2 border-dashed border-white opacity-80 mx-4"></div>
          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-2 bg-[#FF8713] rounded-full p-5"><img src="/medal3.png" alt="Icon 3" className="w-8 h-8 object-contain"/></div>
            <div className="text-3xl font-bold text-white mb-1">125+</div>
            <div className="text-white text-sm">Get Wining awards</div>
          </div>
          <div className="h-36 border-r-2 border-dashed border-white opacity-80 mx-4"></div>
          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-2 bg-[#FF8713] rounded-full p-5"><img src="/users3.png" alt="Icon 4" className="w-8 h-8 object-contain" /></div>
            <div className="text-3xl font-bold text-white mb-1">180+</div>
            <div className="text-white text-sm">Expert Team Members</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
