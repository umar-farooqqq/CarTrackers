import React from "react";
import { NavLink } from "react-router";

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
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SellyourCar"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Sell your car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Apply"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Apply for a New Car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Beatoffer"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Beat my Offer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Faqs"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Faq
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Kelley"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Kelley Blue Book
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Media"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold border-b-4 border-orange-500 pb-6 transition-colors"
                  : "hover:text-gray-300 transition-colors"
              }
            >
              Media
            </NavLink>
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
