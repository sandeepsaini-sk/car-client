import React from 'react'
import { Link } from "react-router-dom";
import { TfiLocationPin,TfiEmail } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi";
import { FaApple,FaGooglePlay } from "react-icons/fa";
export default function Footer() {
    const data=[
        {icon:<FaGooglePlay className='text-teal-700 text-2xl'/>,
         para:"Download the",
         title:"Google play"   
        },
        {icon:<FaApple className='text-black text-2xl'/>,
         para:"Download the",
         title:"Apple Store"   
        }
    ]
    const data2=[
        {
            icon:<TfiLocationPin className='text-5xl md:text-2xl'/>,
            title:"Sikar Road Nawalgarh cricle ke pass, JHUNJHUNU-333303 (RAJ) ,INDAI"
        },
         {
            icon:<TfiEmail className='text-2xl'/>,
            title:"Sandeepsaini21082003@gmail.com"
        },
         {
            icon:<FiPhoneCall className='text-2xl'/>,
            title:"+919549341479"
        }
    ]
  return (
    <>
    <div className='bg-slate-800 py-5 font-serif overflow-hidden'>
        <div className='text-slate-300 sm:mx-20 mx-3'>
             <div className='text-center mb-10'> <Link to={"/"} className="md:text-4xl text-3xl shadow-md shadow-teal-400 hover:shadow-blue-500 px-2 md:px-3 mx-4 md:mx-0 rounded-xl ">
            C<span className="md:text-2xl text-xl">ar</span>
            <span className="text-red-700 italic md:text-xl text-sm">Rental</span>{" "}
           </Link></div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                 
                  <div>
                    <h1 className='text-xl font-bold text-slate-400'>Reach us</h1>
                    {data2.map((item,i)=>(
                    <div key={i} className='flex items-center gap-5 mb-3'>{item.icon} 
                    <p className='text-xl font-semibold '>{item.title}</p></div>))}
                  </div>

                  <div>
                    <h1 className='text-xl font-bold text-slate-400'>Copyright, MyChoize 2025. All rights reserved</h1>
                    <div className='flex gap-10 items-center mt-2'>
                    {data.map((item,i)=>(
                        <div key={i} className='flex items-center bg-white rounded-2xl px-4 py-1 gap-4'>
                            {item.icon}
                            <div>
                                <span className='text-slate-500 text-[12px]'>{item.para}</span>
                                <h1 className='text-black font-bold text-xl'>{item.title}</h1>
                            </div>
                        </div>
                    ))}
                    </div>
                  </div>
            </div>
            <h1 className='text-center mt-5 text-2xl font-semibold italic text-teal-200'>By Sandeep kumar saini</h1>
        </div>
    </div>
    </>
  )
}
