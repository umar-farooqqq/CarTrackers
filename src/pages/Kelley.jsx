import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Partners from "../components/Partners";

const Kelley = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen w-full bg-slate-500">
        <span className="text-4xl font-semibold text-center">
          Page For <br /> kelley Blue Book
        </span>
      </div>
    </div>
  );
};

export default Kelley;
