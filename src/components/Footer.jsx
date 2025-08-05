import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161616] text-[#BDBDBD] font-sans relative overflow-hidden">
      {/* Top support bar */}
      <div className="bg-[#161616] border-b-4 border-[#000000] relative py-6">
        <div className="absolute -left-24 top-0 w-[700px] h-[233px] overflow-hidden opacity-40">
          <img
            src="/logolarge.png"
            alt=""
            className="w-[500px] h-[300px] object-cover object-top"
          />
        </div>
        <div className="px-6 md:px-0 pt-12 pb-10 flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto relative">
          <div className="flex-1 flex flex-col items-start relative z-10">
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-white mb-3">
              SUPPORT@CARTRACKERS.COM
            </h2>
            <p className="text-sm text-[#BDBDBD] max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolor et.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex justify-end relative z-10">
            <button className="relative flex items-center bg-[#333333] px-10 py-6">
              {/* Orange left border */}
              <span className="absolute left-0 top-0 h-full w-1 bg-orange-500"></span>
              <span className="text-white ml-4">
                <img src="/rightarrow.svg" alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="bg-[#161616] px-6 md:px-0 py-28 border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-16">
          {/* Left: Logo and info */}
          <div className="flex-1 min-w-[280px] flex flex-col gap-y-4">
            <div className="mb-4">
              <img src="/logo.png" alt="" />
            </div>
            <p className="text-md leading-relaxed text-[#BDBDBD] max-w-sm">
              Hit the road with the astounding ShiftUp theme, made especially
              for repair shops, car rental and automotive easing services.
            </p>
            <div className="text-md mt-2 text-[#BDBDBD]">
              Support center 24/7
            </div>
            <div className="text-white -mt-2 text-lg mb-2">
              + 3 123 456-7890
            </div>
            <div className="text-md text-[#BDBDBD]">Our address</div>
            <div className="text-md -mt-2 text-[#BDBDBD]">
              94 RDA MALAKA,
              <br />
              WEST JAKARTA CITY
            </div>
          </div>

          {/* Center/right: Links */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            <div>
              <div className="text-sm text-white mb-6 tracking-wide font-medium">
                ABOUT US
              </div>
              <ul className="space-y-6 text-sm text-[#BDBDBD]">
                <li className="hover:text-white cursor-pointer transition-colors">
                  ABOUT US
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  WHO WE ARE
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  OUR OFFERS
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  OUR CLIENTS
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm text-white mb-6 tracking-wide font-medium">
                SERVICES
              </div>
              <ul className="space-y-6 text-sm text-[#BDBDBD]">
                <li className="hover:text-white cursor-pointer transition-colors">
                  FAQ PAGE
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  WHEELS & TIRES
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  DRIVING EVENTS
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  CLASSIC STORE
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm text-white mb-6 tracking-wide font-medium">
                CONTACT
              </div>
              <ul className="space-y-6 text-sm text-[#BDBDBD]">
                <li className="hover:text-white cursor-pointer transition-colors">
                  WHERE WE ARE
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  CONTACT US
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  OUR TEAM
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm text-white mb-6 tracking-wide font-medium">
                DISCOVER MORE
              </div>
              <ul className="space-y-6 text-sm text-[#BDBDBD]">
                <li className="hover:text-white cursor-pointer transition-colors">
                  OIL CHANGE
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  VEHICLES
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  SCHEDULE
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#000000] w-full">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-0 py-6 max-w-6xl mx-auto">
          <div className="text-sm text-[#BDBDBD]">
            © 2024 CARTRACKERS , All Rights Reserved
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social icons */}
            <div className="w-6 h-6 hover:opacity-75 cursor-pointer transition-opacity">
              <img src="/fb.svg" alt="Facebook" />
            </div>
            <div className="w-6 h-6 hover:opacity-75 cursor-pointer transition-opacity">
              <img src="/twt.svg" alt="Twitter" />
            </div>
            <div className="w-6 h-6 hover:opacity-75 cursor-pointer transition-opacity">
              <img src="/insta.svg" alt="Instagram" />
            </div>
            <div className="w-6 h-6 hover:opacity-75 cursor-pointer transition-opacity">
              <img src="/pint.svg" alt="Pinterest" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
