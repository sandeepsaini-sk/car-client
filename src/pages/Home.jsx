import React from "react";
import BookingSteps from "../Components/Bookpocess";
import Flowsteps from "../Components/Flowsteps";
import Hero from "../Components/Hero";
import Selfdrive from "../Components/Selfdrive";
import Paymentchoize from "../Components/Paymentchoize";
import Customerchozi from "../Components/Customerchozi";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-slate-900">
          <Hero  heading = {"BEST CAR"} subheading = {"FOR RENT"} tagline = {"TODAY!"} description = {"FIND THE PERFECT CAR FOR YOU TODAY!"}/>
        </div>
        <div className="mt-10">
          <BookingSteps />
        </div>
        <div className="mt-10">
          <Flowsteps />
        </div>
         <div className="mt-10">
          <Selfdrive />
        </div>
         <div className="mt-10">
          <Paymentchoize/>
        </div>
        <div className="mt-10">
          <Customerchozi/>
        </div>
      </div>
        <Footer/>
    </>
  );
}
