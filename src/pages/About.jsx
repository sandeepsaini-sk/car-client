import React from "react";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      
      <div className="bg-emerald-600 shadow-lg"><Hero heading={"ABOUT"}
  subheading={"CARENTAL"}
  tagline={"DRIVE WITH TRUST"}
  description={"500+ customers, 20+ cars, 100% satisfaction. Your journey begins here."}/></div>
      <div className="text-4xl font-serif font-semibold p-3 shadow-xl mt-2 text-center">
        About
      </div>
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-6">
        <div className="text-xl py-4">
          <p>
            Welcome to{" "}
            <span className="font-serif font-semibold text-2xl text-blue-700">
              CarRental
            </span>
            , your trusted partner for reliable and affordable car rental
            services.
          </p>
          <p>
            We are passionate about making travel easy, convenient, and
            enjoyable for everyone.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-serif py-3 font-bold">
            🚗 What We Offer
          </h1>
          <ul className="list-disc ml-5 text-xl text-slate-800">
            <li>Wide range of well-maintained vehicles</li>
            <li>Flexible rental packages (daily/weekly)</li>
            <li>Easy online booking</li>
            <li>Doorstep car delivery & pickup</li>
            <li>Friendly customer support</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-serif py-3 font-bold">🎯 Our Mission</h1>
          <p>
            To provide a smooth and hassle-free car rental experience that suits
            your needs and budget.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-serif py-3 font-bold">
            📊 Our Stats (Updated)
          </h1>
          <ul className="list-disc ml-5 text-xl text-slate-800">
            <li>🚘 Total Cars: 20+ premium and economy vehicles</li>
            <li>👥 Happy Customers: 500+ satisfied riders</li>
            <li>⭐ Average Rating: 4.7/5 based on user reviews</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-serif py-3 font-bold">
            📍 Why Choose Us?
          </h1>
          <ul className="list-disc ml-5 text-xl text-slate-800">
            <li>Transparent pricing</li>
            <li>No hidden charges</li>
            <li>Quality assurance</li>
            <li>24/7 customer assistance</li>
          </ul>
        </div>
        <p className="font-serif text-xl py-4">
          Whether you're planning a weekend getaway or need a vehicle for daily
          use, we’ve got you covered!
        </p>
        <p className="italic text-center text-gray-500 text-lg">
          "Driven by trust, powered by service."
        </p>
      
      </div>
        <Footer/>
    </>
  );
}
