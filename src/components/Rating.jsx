import React from "react";

const testimonials = [
  {
    name: "Jane. L",
    location: "Venice Beach, CA– July 6, 2024",
    text: "I've been looking to get out of my lease Car Trackers came through -- better than the dealership buyout. The process was smooth and my car was picked up the following day. And the best part... He found me a new car the same week! For all my future car needs, I definitely plan to use Car Trackers again.",
  },
  {
    name: "Diane. C",
    location: "Ventura, CA– September 1, 2024",
    text: "I don't often take the time to leave a review but it was so refreshing working with Car Trackers. I sold them my VW Golf and got an amazing price. The team was great and everything was extremely convenient.",
  },
  {
    name: "Robert. C",
    location: "Oceanside, CA– October 10, 2024",
    text: "Great people to work with and I had no issues selling car. I was a bit concerned at first like everybody else, but the process was seamless and the business is legit. The money arrived in the bank with no issues and I sold the car with confidence.",
  },
];

const Rating = () => {
  return (
    <div className="bg-white py-12 px-2 md:px-0 flex justify-center">
      <div className="w-full max-w-6xl ">
        {/* Stars and Yelp */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center space-x-1 mb-2">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                className="w-7 h-7 text-orange-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
            {/* Half star */}
            <svg
              className="w-7 h-7 text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="white" />
                </linearGradient>
              </defs>
              <path
                d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"
                fill="url(#half)"
              />
            </svg>
          </div>
          <span className="text-orange-400 font-semibold text-sm">
            4.5 Stars on Yelp
          </span>
        </div>
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 mt-2"
          style={{ fontFamily: "inherit" }}
        >
          What our customers are
          <br />
          saying about us
        </h2>
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-orange-400 rounded-xl p-6 flex flex-col w-fullh-full"
            >
              <div className="flex items-center mb-2">
                <span className="text-orange-400 text-lg">★★★★★</span>
              </div>
              <p className="text-gray-700 text-sm mb-6">{t.text}</p>
              <div className="mt-auto">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-xs text-gray-500">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
