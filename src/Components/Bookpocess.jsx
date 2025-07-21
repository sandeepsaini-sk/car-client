import React from "react";
import { FaCarSide, FaCalendarAlt } from "react-icons/fa";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import cartopview from "../assets/car-top-view-svgrepo-com.svg";
import dot from "../assets/dot.svg";
export default function Bookpocess() {
  const steps = [
    {
      id: "01",
      title: "Select City & Travel dates",
      icon: (
        <div className="bg-green-100 p-5 rounded-full relative">
          <FaCalendarAlt className="text-green-600 text-2xl" />
          <FaCarSide className="text-red-600 text-2xl  absolute bottom-1 right-3" />

        </div>
      ),
    },
    {
      id: "02",
      title: "Choose Car & Delivery Mode",
      icon: (
        <div className="bg-blue-100 p-5 rounded-full">
          <MdOutlineLocationOn className="text-blue-600 text-2xl" />
        </div>
      ),
    },
    {
      id: "03",
      title: "Verify Yourself",
      icon: (
        <div className="bg-rose-100 p-5 rounded-full ">
          <HiOutlineDocumentCheck className="text-rose-600 text-2xl" />
        </div>
      ),
    },
    {
      id: "04",
      title: "Make Payment",
      icon: (
        <div className="bg-yellow-100 p-5 rounded-full">
          <RiMoneyRupeeCircleLine className="text-yellow-600 text-2xl" />
        </div>
      ),
    },
  ];

  return (
    <>
       <div className="bg-slate-100 py-10">
  <div className="text-center">
    <h1 className="text-3xl font-semibold text-slate-800 mb-2">
      How To Book a Self-Drive Car Online
    </h1>
    <span className="text-md text-slate-600">
      Book a car online in Jaipur from MyChoize in 4 Simple steps.
    </span>
  </div>

  <div className="py-16 px-4 relative">
    {/* Horizontal Line for Desktop */}
    <div className="hidden md:block absolute h-[2px] bg-slate-300 top-1/2 left-[7.5%] right-[8.5%] z-0"></div>

    {/* Vertical Line for Mobile */}
    <div className="block md:hidden absolute w-[2px] bg-slate-300 top-20 bottom-20 left-1/2 -translate-x-1/2 z-0"></div>

    {/* Main Layout */}
    <div className="relative flex flex-col md:grid md:grid-cols-6 gap-8 items-center text-center z-10">
      {/* Car */}
      <div className="flex justify-center z-10">
        <img src={cartopview} alt="car" className="w-10 rotate-90 md:rotate-90" />
      </div>

      {/* Steps */}
      {steps.map((step, i) => (
        <div key={i} className="flex md:flex-col gap-8 justify-center items-center space-y-2 z-10">
          {step.icon}
          <h1 className="text-2xl font-bold text-slate-700 md:p-3 bg-white rounded-full shadow-sm shadow-teal-400 hover:shadow-blue-500">{step.id}</h1>
          <span className="text-sm font-semibold text-slate-800 max-w-[130px]">
            {step.title}
          </span>
        </div>
      ))}

      {/* Dot */}
      <div className="flex justify-center z-10">
        <img src={dot} alt="dot" className="w-15 rotate-90 md:rotate-0" />
      </div>
    </div>
  </div>
</div>

    </>
  );
}
