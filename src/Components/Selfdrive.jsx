import React from 'react'
import { FaCarSide, FaCity, FaGlobe, FaUserShield } from 'react-icons/fa';

export default function Selfdrive() {
    const data=[
        {
            icon:<FaCarSide/>,
            title:"Unlimited km to drive"
        },
        {
            icon:<FaCity/>,
            title:"100+ Locations in 16 cities"
        },
        {
            icon:<FaGlobe/>,
            title:"Anywhere delivery"
        },
        {
            icon:<FaUserShield/>,
            title:"Privacy & freedom"
        }
    ]
  return (
    <>
    <div className='bg-slate-100 text-center py-10'>
        <div className='text-3xl font-semibold text-slate-700 '>Features & Benefits of Renting a Self-Drive <br/> Car</div>
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 container mx-auto text-center py-10'>
            {data.map((item,i)=>(
                <div key={i} className='bg-white p-5 rounded-2xl shadow-md shadow-teal-400 m-4 hover:scale-105 hover:shadow-blue-400 flex items-center gap-3 py-10 border border-slate-400'>
                    <h1 className='text-5xl bg-slate-300 rounded-full'>{item.icon}</h1>
                    <h1 className='text-slate-700 font-semibold'>{item.title}</h1>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
