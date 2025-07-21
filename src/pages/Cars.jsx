import React, { useState,useEffect } from "react";
import { PiSteeringWheelFill } from "react-icons/pi";
import { BsFuelPumpFill } from "react-icons/bs";
import {FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectcar } from "../redux/bookingSlice";
import { toast } from "react-toastify";
const Backend = import.meta.env.VITE_BACKEND_API;

export default function Cars() {
  const[car,setcars]=useState([])
   const navigate=useNavigate();
   const dispatch=useDispatch();
    //CARS get//
  const fetchcars = async () => {
    try {
      const cars = await fetch(`${Backend}/cars`);
      const data = await cars.json();
      setcars(data.cars);
      
    } catch (error) {
      toast.error("cars not fetch", error);
    }
  };
  useEffect(() => {
    fetchcars();
  }, []);

  const handleBooknow=(car)=>{
      dispatch(selectcar(car));
      navigate("/booking")

  }
  return (
    <>
    <div className="bg-sky-600 shadow-lg"><Hero 
  heading={"EXPLORE"}
  subheading={"OUR SERVICES"}
  tagline={"FOR EVERY JOURNEY"} description={"Choose from a wide range of rental cars — easy, fast & affordable."}/></div>
    <div className="bg-slate-100">
      <div className=" container py-10 mt-10 m-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center mx-5">
          {car.map((e, i) => (
            <div key={i} className="bg-white p-3 shadow-md rounded-md hover:scale-y-95 transition-all duration-300 hover:shadow-teal-400  ">
                 {/**image */}
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-52 object-contain rounded-md"
              />
              <h1 className="text-3xl font-serif font-semibold py-2 capitalize">{e.title}</h1>
              <div className="text-xl font-semibold">
                ₹ <span className="font-bold">{e.price}</span>/day
              </div>
               {/**Rating */}
              <div className="flex items-center gap-2 text-md">
                {" "}
                <span>Rating 4.5 </span>
                <div className="flex text-yellow-300 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
              </div>
               {/**basic details */}
              <div className="text-slate-500 text-xl capitalize"><span>{e.oil}</span> . {e.type}</div>
              <div className="flex items-center gap-2 text-slate-800">
                <div className="flex items-center gap-2"><BsFuelPumpFill/><span>{e.oil}</span></div>
                <div className="flex items-center gap-2"><PiSteeringWheelFill/><span>Auto</span></div>
                <div className="flex items-center gap-1"><MdOutlineAirlineSeatReclineExtra/><span>{e.seat} seater</span></div>
              </div>
               {/**available or not */}
              <div className={`text-xl font-semibold py-2 ${e.status==="available"?"text-green-500":"text-red-500"}`}>{e.status==="available"?"Available":"Not Available"}</div>
              {/**book button */}
              <button className={`w-full text-2xl font-semibold py-2 rounded-md ${e.status==="available"?"bg-blue-500 hover:bg-blue-600 text-white cursor-pointer":"bg-gray-300 text-gray-600 cursor-not-allowed"}`}>{e.status==="available"?(<h1 onClick={()=>handleBooknow(e)}>Book Now</h1>):"Unavailable"}</button>
            </div>
          ))}
        </div>
      </div>
      </div>
        <Footer/>
    </>
  );
}
