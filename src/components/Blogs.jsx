import React from "react";

const Blogs = () => {
  return (
    <div className="bg-[#FF8713] w-full py-12 relative overflow-hidden">
      {/* Left circular logo pattern */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 -scale-y-100">
        <img
          src="/logolarge.png"
          alt="logolarge"
          className="w-80 h-80 object-contain"
        />
      </div>

      {/* Right circular logo pattern */}
      <div className="absolute right-0 top-1/2 -translate-y-44 translate-x-16">
        <img
          src="/logolarge.png"
          alt="logolarge"
          className="w-72 h-56 object-contain"
        />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-16 px-8 text-center">
        <h1 className="text-white text-4xl font-bold mb-4 tracking-wide">
          SHOPPING AROUND? WE PAY THE MOST!
        </h1>
        <p className="text-white text-sm">
          We beat most dealership offers by up to $500*. Send over a valid
          written offer and we can pay you top dollar thanks to our low
          overhead.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
