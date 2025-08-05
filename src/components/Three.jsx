import React from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

const Three = () => {
  return (
    <div className="bg-gray-100 py-8 px-16">
      <div className="max-w-6xl mx-auto my-4">
        {/* Card row with arrows */}
        <div className="relative flex items-center mx-6 ">
          {/* Left Arrow */}
          <button
            className="absolute left-[-40px] md:left-[-60px] bg-white rounded-full shadow p-2 flex items-center justify-center"
            aria-label="Previous"
          >
           <ArrowLeft className="w-5 h-5" />
          </button>
          
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
            {/* Same Day Wire Transfer */}
            <div className="bg-white rounded-md p-8 shadow-lg w-[250px] h-[220px]">
              <div className="flex items-center mx-auto mb-4">
                <img
                  src="/bank.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Same Day Wire
                <br />
                Transfer
              </h3>
              <ul className="text-gray-600 space-y-1 ml-1.5">
                <li>• Instant delivery</li>
                <li>• Direct Bank transfer</li>
              </ul>
            </div>

            {/* Next Business Day ACH */}
            <div className="bg-white rounded-md p-8 shadow-lg w-[250px] h-[220px]">
              <div className="flex items-center mx-auto mb-4">
                <img
                  src="/lr.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Next Business
                <br />
                Day ACH
              </h3>
              <ul className="text-gray-600 space-y-1 ml-1.5">
                <li>• Business day</li>
                <li>• Direct bank transfer</li>
              </ul>
            </div>

            {/* Company Check */}
            <div className="bg-white rounded-md p-8 shadow-lg w-[250px] h-[220px]">
              <div className="flex items-center mx-auto mb-4">
                <img
                  src="/cheque.png"
                  alt=""
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Company <br /> Check
              </h3>
              <ul className="text-gray-600 space-y-1 ml-1.5">
                <li>• Shipped overnight</li>
                <li>• Certified business check</li>
              </ul>
            </div>
          </div>
          {/* Right Arrow */}
          <button
            className="absolute right-[-40px] md:right-[-60px] bg-white rounded-full  p-2 flex items-center justify-center"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom section with stars and testimonial */}

        <div className="mt-6 ml-6 flex items-center mb-6">
          {/* 5 stars */}
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <p className="text-gray-600">
            We've more then, 2356 + Customer satisfied with our services{" "}
            <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
              Get Quote
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Three;
