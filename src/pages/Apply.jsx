import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Understand from "../components/Understand";
import Application from "../components/Application";
import GotQs from "../components/GotQs";

const Apply = () => {
  return (
    <div>
      <Navbar />
      <Hero imgpoint2={`/happy.png`} />
      <Understand />
      <Application />
      <GotQs />
      <Footer />
    </div>
  );
};

export default Apply;
