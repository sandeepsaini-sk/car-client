import React from 'react'
import { FaRegHandPointer } from "react-icons/fa";
import { CiUser,CiStar, CiCreditCard2 } from "react-icons/ci";
import { PiCarLight } from "react-icons/pi";
import { IoMdStar,IoMdStarHalf } from "react-icons/io";

export default function Customerchozi() {
  return (
    <>
    <div className='bg-slate-100 py-10'>
       <div className=' max-w-7xl mx-auto py-4 px-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-x-10 m-5'>
                {/**left side */}
                <div className='sm:flex gap-8 justify-center items-center'>
                  <div className='flex flex-col gap-8'>
                    {/**first */}
                      <div className='bg-red-200 py-4 px-5 rounded-2xl flex flex-col justify-center items-center gap-3 w-64 shadow-md shadow-teal-400 m-4 hover:scale-105 hover:shadow-blue-400 duration-300 '>
                    <div className='w-16 h-16 bg-white rounded-full relative z-0 p-1 border-r-6 border border-red-800'>
                        <CiCreditCard2 className='absolute text-5xl -left-3 top-0 text-red-500'/>
                        <FaRegHandPointer className='absolute text-2xl bottom-2 right-3 text-red-500'/>
                    </div>
                    <h1 className='text-slate-700 font-semibold text-xl text-center'>200k+ <br/>Customers Served</h1>
                   </div>
                   {/**second */}
                     <div className='bg-blue-100 py-4 px-5 rounded-2xl w-64 flex flex-col justify-center items-center gap-3 shadow-md shadow-teal-400 m-4 hover:scale-105 hover:shadow-blue-400 duration-300'>
                    <div className='w-16 h-16 bg-white rounded-full relative z-0 p-1 border-r-6 border border-blue-500'>
                        <CiUser className='absolute text-3xl left-2 top-1 text-blue-400'/>
                        <div className='absolute text-2xl bottom-0 -left-7 text-blue-300 flex '><CiStar/><CiStar/><CiStar/></div>
                    </div>
                    <h1 className='text-slate-700 font-semibold text-xl text-center'>4.3 Rating <br/> on App</h1>
                   </div>
                  </div>
                  {/**this middle */}
                   <div>
                      <div className='bg-emerald-100 py-4 px-5 rounded-2xl w-64 flex flex-col justify-center items-center gap-3 shadow-md shadow-teal-400 m-4 hover:scale-105 hover:shadow-blue-400 duration-300'>
                    <div className='w-16 h-16 bg-white rounded-full relative z-0 p-1 border-r-6 border border-emerald-500'>
                        <PiCarLight className='absolute text-5xl -left-3 top-3 text-emerald-300'/>
                    </div>
                    <h1 className='text-slate-700 font-semibold text-xl text-center'>100 Million+ <br/> Kms</h1>
                   </div>
                   </div>
                </div>
                {/**right side */}
                <div className='px-20'>
                    <div className='flex gap-2 text-5xl text-amber-400 py-3'><IoMdStar/><IoMdStar/><IoMdStar/><IoMdStarHalf/><IoMdStarHalf/></div>
                    <h1 className='text-slate-700 font-bold md:text-4xl text-3xl'>8 Out of 10 customer<br/> loves <span className='text-slate-950 font-extrabold'>MyChoize</span></h1>
                </div>
            </div>
       </div>
       </div>
    </>
  )
}
