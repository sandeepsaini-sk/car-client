import React from 'react'
import { Outlet } from "react-router-dom";
import Slidebar from './Slidebar';
export default function Admin() {
  return (
    <>
    <div className='flex md:h-[91vh] h-[92vh] overflow-hidden'>
     <div className='bg-amber-100 w-64 min-w-max h-full overflow-hidden sticky top-0'>
        <Slidebar/>
     </div>
     <div className='bg-slate-100 w-full h-full overflow-y-auto'>
        <Outlet/>
     </div>
    </div>
    </>
  )
}
