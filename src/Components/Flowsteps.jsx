import React from 'react'

export default function Flowsteps() {
      const steps = [
        {
          id: "01",
          title: "Select City & Travel dates"
        },
        {
          id: "02",
          title: "Choose Car & Delivery Mode"
        },
        {
          id: "03",
          title: "Verify Yourself"
        },
        {
          id: "04",
          title: "Make Payment"
        },
      ];
  return (
    <>
    <div className="bg-slate-200 pt-10 shadow-md hover:shadow-blue-300 p-3 ">
      <div className="text-center">
    <h1 className="text-3xl font-semibold text-slate-800 mb-2">
      How To Book a Self-Drive Car Online
    </h1>
    <span className="text-md text-slate-600">
      Book a car online in Jaipur from MyChoize in 4 Simple steps.
    </span>
  </div>
         
         <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 container mx-auto text-center py-10'>
                {steps.map((steps,i)=>(
                    <div key={i} className='bg-white p-5 rounded-2xl shadow-md shadow-teal-400 m-4 hover:scale-105 hover:shadow-blue-400 duration-300'>
                        <h1 className='text-2xl font-bold text-slate-800'>{steps.id}</h1>
                        <span className='text-md font-semibold text-slate-600'>{steps.title}</span>
                    </div>

                ))}
         </div>

    </div>
    
    </>
  )
}
