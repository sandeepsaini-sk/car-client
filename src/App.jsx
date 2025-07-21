import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Dashboard from "./Admin/Dashboard";
import Admin from "./Admin/Admin";
import Users from "./Admin/Users";
import Cares from "./Admin/Cares";
import Addcar from "./Admin/Addcar";
import Bookings from "./Admin/Bookings";
import Mybook from "./pages/Mybook";


export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
         <Route path="register" element={<Register/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="/cars" element={<Cars/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/booking" element={<Booking/>}/>
           <Route path="/mybooking" element={<Mybook/>}/>

           {/* Admin panel */}
          <Route path="/admin" element={<Admin />}>
          <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users/>}/>
            <Route path="Cares" element={<Cares/>}/>
            <Route path="addcar" element={<Addcar/>}/>
            <Route path="booking" element={<Bookings/>}/>

          </Route>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
