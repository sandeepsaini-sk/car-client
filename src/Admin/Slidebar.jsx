import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdBookOnline, MdPeople, MdDirectionsCar, MdAddBox } from "react-icons/md";

export default function Slidebar() {
  const data = [
    { path: "dashboard", item: "DashBoard", icon: <MdDashboard /> },
    { path: "booking", item: "Booking", icon: <MdBookOnline /> },
    { path: "users", item: "Users", icon: <MdPeople /> },
    { path: "cares", item: "Cars", icon: <MdDirectionsCar /> },
    { path: "addcar", item: "Add-Car", icon: <MdAddBox /> },
  ];

  const mobilecss =
    "shadow-sm shadow-teal-400 hover:shadow-blue-500 p-2 mb-5 hover:text-cyan-500 font-bold text-slate-500 transition-all duration-300 md:text-2xl font-serif";

  return (
    <div className="flex flex-col px-4 py-5">
      {data.map((e, i) => (
        <Link key={i} to={e.path} className={mobilecss}>
          <div className="flex items-center gap-2">
            <span className="text-black text-2xl">{e.icon}</span>
            {e.item}
          </div>
        </Link>
      ))}
    </div>
  );
}
