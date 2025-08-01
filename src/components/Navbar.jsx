import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-30 px-4 py-5 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="car trackers" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-5 pl-20 text-white text-sm">
          <li>
            <a
              href="#"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Sell your car
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Apply for a New Car
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Beat my Offer
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Faq
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Kelley Blue Book
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Media
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button className="bg-transparent border border-orange-500 text-white px-4 py-2 rounded hover:bg-orange-500 transition-colors text-sm font-medium">
            Get Offer
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-transparent border border-orange-500 transition-colors text-sm font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
