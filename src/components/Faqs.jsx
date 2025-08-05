import React from "react";

const faqs = [
  "How quickly can I get paid?",
  "Do I need to drive my car anywhere?",
  "How does the video call appraisal process work?",
  "Is there any cost or obligation to get an offer?",
  "What I do after I get an online offer?",
];

const Faqs = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-2 flex items-center justify-center gap-1">
          <img src="/Symbol.png" alt="" className="w-3 h-3" />
          <span className="text-orange-500 font-bold text-sm">FAQs</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6">
          {faqs.map((q, i) => (
            <div key={i} className="flex justify-center items-center">
              <div className="flex-1 text-left pr-8">
                <span className="text-orange-500 text-lg cursor-pointer">
                  {q}
                </span>
              </div>
              <div className="w-8 flex justify-center">
                <span className="text-orange-500 text-2xl font-bold">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
