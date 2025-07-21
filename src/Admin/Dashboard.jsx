import React from 'react';
import { MdBookOnline, MdPeople, MdDirectionsCar, MdPayment } from "react-icons/md";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function Dashboard() {
  const data = [
    { title: "Users", icon: <MdPeople />, total: 200 },
    { title: "Cars", icon: <MdDirectionsCar />, total: 150 },
    { title: "Booking", icon: <MdBookOnline />, total: 100 },
    { title: "Sale", icon: <MdPayment />, total: 250 }
  ];

  const bookingData = [
     { name: "2020", total: 120 },
     { name: "2021", total: 150 },
    { name: "2022", total: 200 },
    { name: "2023", total: 150 },
    { name: "2024", total: 100 },
    { name: "2025", total: 250 },
  ];
  const saleData = [
     { name: "2020", total: 30000 },
     { name: "2021", total: 35000 },
    { name: "2022", total: 20000 },
    { name: "2023", total: 15000 },
    { name: "2024", total: 10000 },
    { name: "2025", total: 50000 },
  ];

  return (
    <>
      <div className='shadow-md text-2xl md:text-5xl font-serif font-semibold text-center py-4 bg-white sticky top-0 z-1'>DashBoard</div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 m-5'>
        {data.map((e, i) => (
          <div key={i} className='bg-white shadow-md rounded-sm font-serif font-extrabold flex items-center justify-around text-2xl p-3 shadow-teal-200 hover:scale-105 duration-300 transition-all'>
            <div className='text-4xl text-blue-500'>{e.icon}</div>
            <div>
              <h1>{e.title}</h1>
              <span className='text-xl font-semibold'>{e.total}</span>
            </div>
          </div>
        ))}
      </div>
            
            <div className='grid lg:grid-cols-2'>
      {/* Graph Section */}
      <div className='m-5 bg-white p-4 rounded shadow-md'>
        <h2 className='text-xl font-bold font-serif mb-4'>Booking Data Analytics Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bookingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#14b8a6" barSize={40} animationDuration={800} />
          </BarChart>
        </ResponsiveContainer>
      </div>
       {/* Sale section*/}
      <div className='m-5 bg-white p-4 rounded shadow-md'>
        <h2 className='text-xl font-bold font-serif mb-4'>Sale Data Analytics Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={saleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" fill="#6366f1" barSize={40} animationDuration={800}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </>
  );
}
