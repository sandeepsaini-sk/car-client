import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { login } from "../redux/authSlice";
import {useDispatch} from 'react-redux'
const Backend=import.meta.env.VITE_BACKEND_API
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Login() {
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const [pshow, setpshow] = useState(false);
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
   const submithandle =async(e) => {
     e.preventDefault();
   try {
     const response=await fetch(`${Backend}/login`,{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(user)
   });
    const data=await response.json();
   if(response.ok){
     // localstorage save
    const { userid, token, email, isAdmin,username } = data;
   dispatch(login({ userid, token, email, isAdmin,username}));
 
     setuser({
     email: "",
     password: "",
     })
     toast.success(data.message)
     navigate("/")
   }
    } catch (error) {
    toast.error(error);
    
  }
  };
  return (
    <>
      <div className="h-[95vh] flex justify-center items-center bg-gray-200">
        <div className="shadow-2xl z-0 px-1 sm:px-5 pt-5 rounded-xl sm:min-w-96 bg-white pb-15 shadow-teal-400 m-4 hover:scale-105 hover:shadow-blue-400 ">
          <h1 className="text-center text-3xl italic font-semibold pb-5 ">
            Login
          </h1>
          <form method="post" action={"/"} onSubmit={submithandle}>
            <div className="mb-2 px-3">
              <label htmlFor="email" className="text-xl block mb-1 ">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
                className="w-full focus:outline-none rounded-sm focus:ring-2 focus:ring-blue-400 border border-gray-400 px-5 py-2 "
              />
            </div>

            <div className=" mb-5 px-3">
              <label htmlFor="password" className="text-xl block mb-1 ">
                Password
              </label>
              <div className="flex justify-between items-center border border-gray-400 rounded-sm hover:border-3 hover:border-blue-400 ">
                <input
                  type={pshow ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={user.password}
                  onChange={(e) =>
                    setuser({ ...user, password: e.target.value })
                  }
                  className="focus:outline-none px-5 py-2 w-full"
                />
                <div onClick={() => setpshow(!pshow)} className="text-2xl px-2">
                  {pshow ? <BiHide /> : <BiShow />}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white font-semibold p-2 rounded-md text-xl bg-blue-500 hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    
    </>
  );
}
