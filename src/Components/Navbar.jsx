import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import {logout } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const dispatch = useDispatch();
  const { token,username,isAdmin} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [menu, setmenu] = useState(false);
  const [search, setsearch] = useState("");
  const data = [
    { path: "/", item: "Home" },
    { path: "/cars", item: "Cars" },
    { path: "/mybooking", item: "My-Book" },
    { path: "/about", item: "About" },
  ];
  const desktopcss="shadow-md hover:shadow-teal-400 py-1 px-3 rounded-sm hover:text-cyan-400 transition-all duration-300 ";
  const mobilecss="shadow-sm shadow-teal-400 hover:shadow-blue-500 p-2 px-4 mb-2 hover:text-cyan-500 font-bold text-slate-500 transition-all duration-300";

  return (
    <>
      <div className="bg-slate-500 sticky z-50 top-0">
        <div className="flex justify-between pr-4 md:px-0 py-4 container mx-auto items-center">
          {/*logo */}
          <Link
            to={"/"}
            className="md:text-4xl text-3xl shadow-md hover:shadow-teal-400 px-2 md:px-3 mx-4 md:mx-0 rounded-xl font-serif font-semibold"
          >
            C<span className="md:text-2xl text-xl">ar</span>
            <span className="text-red-700 italic md:text-xl text-sm">
              Rental
            </span>{" "}
          </Link>
          {/*search bar */}
          <form
            className="flex justify-center items-center relative rounded-full shadow-md hover:shadow-teal-400 lg:p-1"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("searching for:", search);
              setsearch("");
            }}
          >
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="bg-white text-black pl-12 pr-4 lg:py-2 py-1 rounded-full shadow-xl focus:outline-none focus:ring-3 focus:ring-blue-500 lg:w-96 w-40 sm:w-65"
            />
            <BiSearch className="absolute left-5 text-gray-600 text-2xl" />
          </form>

          <div className="text-white flex items-center">
            {/*this is destop */}
            <ul className=" hidden lg:flex gap-5 text-xl font-semibold items-center ">
              {data.map((item, i) => (
                <Link
                  key={i}
                  className={desktopcss}
                  to={item.path}
                >
                  {item.item}
                </Link>
              ))}
               {token?(
                <> <div className={desktopcss}>Hi,{username || "User"}</div>
                <button className={desktopcss} onClick={() => {dispatch(logout()); navigate("/")}}>Logout</button>
                {isAdmin &&(<Link to="/admin" className={desktopcss}>Admin</Link>)}
                </>):(<>
                <Link to="/register" className={desktopcss}>Register</Link>
                <Link to="/login" className={desktopcss}>Login</Link>
                </>)}
                
            </ul>

            {/*this is mobile use */}
            <div
              onClick={() => setmenu(!menu)}
              className="text-3xl lg:hidden ml-4 text-black shadow-md shadow-teal-400 hover:shadow-blue-500 p-1 "
            >
              {menu ? <MdClose /> : <MdMenu />}
              {menu ? (
                <ul className=" lg:hidden text-xl px-7 absolute right-1 top-20 bg-white shadow-2xl z-50 rounded-xl text-black p-6 flex flex-col">
                  {data.map((item, i) => (
                  <Link
                        to={item.path}
                        onClick={() => setmenu(false)}
                       key={i}
                      className={mobilecss}
                      >
                        {item.item}
                      </Link>
                  ))}
                  {token?(
                <div className="flex flex-col"> <div className={mobilecss}>Hi , {username|| "User"}</div>
                  
                  {isAdmin &&(<Link to="/admin" className={mobilecss}>Admin</Link>)}

                <button className={mobilecss} onClick={() => {dispatch(logout()); navigate("/")}}>Logout</button>
                </div>)
                :(<>
                <Link to="/register" className={mobilecss}>Register</Link>
                <Link to="/login" className={mobilecss}>Login</Link>
                </>)}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
