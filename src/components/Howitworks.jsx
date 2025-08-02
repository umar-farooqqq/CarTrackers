import React from "react";

const HowItWorks = () => (
  <div className="bg-blue-100 py-12">
    {/* How It Works Section */}
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-yellow-100 rounded-xl shadow-md py-8 px-6">
        <h1 className="text-4xl text-orange-500 font-bold text-center mb-4">
          How It Works
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-x-6">
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/tag.png"
              alt="tag"
              className="w-10 h-10 mb-2 text-orange-500"
            />
            <h3 className="text-orange-500 font-semibold mb-1">
              Get Instant Offer
            </h3>
            <p className="text-sm">
              Submit your vehicle info online, it only takes 2 minutes
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/phonetick.png"
              alt="phone tick"
              className="w-10 h-10 mb-2 text-orange-500"
            />
            <h3 className="text-orange-500 font-semibold mb-1">
              10 Minute Videos Appraisal
            </h3>
            <p className="text-sm">
              Walk around your vehicle and show us the condition with your smart
              phone
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center text-center">
            <img
              src="/reciept.png"
              alt="receipt"
              className="w-10 h-10 mb-2 text-orange-500"
            />
            <h3 className="text-orange-500 font-semibold mb-1">Get Paid</h3>
            <p className="text-sm">
              Get paid instantly when we pick up the vehicle
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* 10 Minute Video Appraisal Section */}
   
  </div>
);

export default HowItWorks;
