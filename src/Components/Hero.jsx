import React from "react";
import { SiComma } from "react-icons/si";
import car from "../assets/23.png";
import { PiSteeringWheelFill } from "react-icons/pi";
import { BsFuelPumpFill } from "react-icons/bs";
import { TbSettingsBolt } from "react-icons/tb";

export default function Hero({heading ,subheading, tagline, description}) {
  return (
    <>
      <div className=" py-16 px-4 ">
        <div className="md:max-w-7xl mx-auto  flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          {/**left side */}
          <div className="text-center md:text-left max-w-sm relative">
            <h1 className="text-6xl font-extrabold text-amber-500 font-serif">
              {heading}
              <p className="text-4xl font-extrabold font-serif text-white">
             {subheading}<br /> {tagline}
              </p>
            </h1>
            <p className=" text-lg md:text-xl font-semibold text-slate-300 font-serif max-w-85">
             {description}
            </p>
          </div>
          {/* Center Car and Price */}
          <div className="relative text-center ">
            <div className="border-12 border-amber-600 pb-16 h-72 p-3 border-b-0">
              <h1 className="text-2xl font-bold text-white">
                PRICE STARTING FROM
              </h1>
              <div className="w-full h-1 bg-amber-500"></div>

              <div className="flex gap-2 justify-center">
                <h1 className="text-3xl text-slate-200 font-semibold">₹</h1>{" "}
                <span className="text-6xl font-extrabold text-amber-600 flex items-end">
                  599 <SiComma className="text-xl" />
                </span>
              </div>
            </div>
            {/**image section */}
            <img
              src={car}
              alt="car logo"
              className="absolute -bottom-10 md:-bottom-23 md:min-w-[400px] md:-left-10"
            />
          </div>
          {/**right side */}
          <div className="flex justify-between gap-3 mt-14">
            <div className="flex flex-col justify-between gap-10 relative z-10">
              {[
                <PiSteeringWheelFill />,
                <BsFuelPumpFill />,
                <TbSettingsBolt />,
              ].map((icon, i) => (
                <div
                  key={i}
                  className="bg-amber-400 p-2 rounded-2xl text-3xl font-bold z-10"
                >
                  {icon}
                </div>
              ))}
              <div className="absolute w-1 h-full bg-white z-0 left-1/2 -translate-x-1 "></div>
            </div>
            <div className="flex flex-col justify-between py-1">
              {[
                "Smooth Steering Control",
                "Fuel Efficient Vehicles",
                "Engine Serviced Regularly",
              ].map((item, i) => (
                <div key={i} className="bg-white text-sm font-semibold text-slate-900 px-3 py-2 rounded-md shadow-md shadow-teal-400 ">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
