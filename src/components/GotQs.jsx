import React from "react";

const GotQs = () => {
  return (
    <section className="relative w-full bg-[#FF8713] min-h-[240px] flex items-center justify-center overflow-hidden">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-center relative z-10 py-8">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-5xl font-semibold  mb-4 text-black" >
            GOT QUESTIONS?
          </h2>
          <p className="text-white text-base md:text-lg mb-6">
            Give us a call and we’ll walk you through everything.
          </p>
          <button className="bg-white text-black font-normal px-8 py-4 rounded shadow-md border border-transparent hover:bg-gray-100 transition-all duration-200 flex items-center gap-2 mx-auto">
            <img src="/plus.svg" alt="" className="w-3 h-3" /> GET IN TOUCH
          </button>
        </div>
        
      </div>
      {/* Optionally, you can add a placeholder div for the image absolutely positioned on the right */}
      <div className="absolute -right-16 top-0 bg-[#FF8713]">
      <img src="/logolarge.png" alt="" className="w-60 h-60 object-contain" />
      </div>
    </section>
  );
};

export default GotQs;
