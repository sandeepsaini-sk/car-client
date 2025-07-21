import React from "react";
import { FaRegAddressCard,FaRegHandPointRight,FaRegHandPointUp } from "react-icons/fa";

export default function Paymentchoize() {
  const data = [
    {
      icon: <FaRegAddressCard className="text-7xl py-2"/>,
      title: "Multiple Payment Options",
      paragraph:
        "Don’t let payment mode come in between you and your dream car! Choose from credit card, debit card, net banking, or UPI",
    },
    {
      icon: <FaRegHandPointUp className="text-7xl text-purple-500 py-2" />,
      title: "Easy Cancellation",
      paragraph:
        "Change of plans made easy with MyChoize. Enjoy the flexibility to cancel your rental car reservation with just a few clicks",
    },
    {
      icon: <FaRegHandPointRight className="text-7xl text-amber-200 py-2"/>,
      title: "Best Price Guarantee",
      paragraph:
        "We guarantee the lowest prices on self-drive car rentals and subscriptions in India!",
    },
  ];
  return (
    <>
      <div className="bg-slate-100 py-10">
        <div className="text-3xl font-semibold text-slate-700 text-center ">
          Why ride with MyChoize?
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:container lg:mx-auto lg:gap-3 sm:gap-4 gap-6 py-10 items-center mx-5 justify-center">
          {data.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-300  shadow-sm shadow-teal-500 translate-2 lg:p-6 p-2  overflow-hidden hover:shadow-md">
              {item.icon}
              <h1 className="lg:text-2xl text-slate-900 font-bold ">
                {item.title}
              </h1>
              <p className="lg:text-md text-slate-500">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
