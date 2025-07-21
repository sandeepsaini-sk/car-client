import React, { useEffect, useState } from "react";
const Backend = import.meta.env.VITE_BACKEND_API;
import { toast } from 'react-toastify';
const buttoncss =
  "w-1/12 text-blue-600 hover:underline hover:font-bold hover:text-blue-700 cursor-pointer text-center relative";
const inputcss =
  "w-full focus:outline-none rounded-sm focus:ring-2 focus:ring-blue-400 border border-gray-400 px-5 py-1 ";
export default function Users() {
  const [users, setusers] = useState([]);
  const [viewuser, setviewuser] = useState(null);
  const [edit, setedit] = useState(null);
  const [edituser, setedituser] = useState({
    username: "",
    email: "",
    phone: "",
    isAdmin: "",
  });
  
  //users get//
  const fetchusers = async () => {
    try {
      const users = await fetch(`${Backend}/alluser`);
      const data = await users.json();
      setusers(data.alluser);
    } catch (error) {
      toast.error("users not fetch", error);
    }
  };
  useEffect(() => {
    fetchusers();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${Backend}/user/${id}`, {
        method: "DELETE",
      });

      const res = await response.json();

      if (res.alert) {
        setusers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error("Error deleting user:", err);
    }
  };

  const handleinput = (e) => {
    setedituser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleupdate = async (id) => {
    try {
      const payload = {
        ...edituser,
        isAdmin: edituser.isAdmin === "true",
      };
      const response = await fetch(`${Backend}/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        setedit(null);
        fetchusers();
      } else {
        toast.info(data.message);
      }
    } catch (error) {
      toast.error("user data not found");
    }
  };
  return (
    <>
      <div className="shadow-md text-2xl md:text-5xl font-serif font-semibold text-center py-4 bg-white sticky top-0 z-1">
        Users
      </div>

      <div className="mx-3 my-2 font-serif">
        <div className="flex items-center justify-between rounded-lg bg-amber-300 py-2 px-3 shadow-sm hover:shadow-teal-400  duration-300 transition-all hover:scale-100 mb-2 sticky top-0 z-1 md:text-xl font-bold">
          <h1>ID</h1>
          <h1 className="w-1/5">Name</h1>
          <h1 className="w-1/4">Email</h1>
          <h1 className="w-1/12 text-center">View</h1>
          <h1 className="w-1/12 text-center">Edit</h1>
          <h1 className="w-1/12 text-center">Delete</h1>
        </div>

        {users.length === 0 ? (
          <div className="text-center text-gray-500 mt-4 w-1/">
            No users found
          </div>
        ) : (
          users.map((e, i) => (
            <>
              <div
                key={e._id}
                className="flex items-center justify-between rounded-lg bg-white py-2 px-3 shadow-sm hover:shadow-teal-400 duration-300 transition-all hover:scale-100 mb-2 md:text-xl"
              >
                <h1>{i + 1}</h1>
                <h1 className="w-1/5 truncate ">
                  {e.username}
                  {e.isAdmin && (
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-0.5 rounded ml-1">
                      Admin
                    </span>
                  )}
                </h1>
                <h1 className="w-1/4  truncate">{e.email}</h1>
                <button
                  onClick={() => {
                    setviewuser(viewuser === e._id ? null : e._id);
                    setedit(null);
                  }}
                  className="w-1/12 text-blue-600 hover:underline hover:font-bold hover:text-blue-700 cursor-pointer text-center "
                >
                  {viewuser === e._id ? "Hide" : "View"}
                </button>
                <button
                  onClick={() => {
                    setedit(edit === e._id ? null : e._id);
                    setedituser({
                      username: e.username,
                      email: e.email,
                      phone: e.phone,
                      isAdmin: e.isAdmin,
                    });
                    setviewuser(null);
                  }}
                  className="w-1/12 text-green-600 hover:underline hover:font-bold hover:text-green-700 cursor-pointer text-center relative"
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:underline hover:font-bold hover:text-red-700 cursor-pointer text-center w-1/12"
                  onClick={() => handleDelete(e._id)}
                >
                  Delete
                </button>
              </div>
              {/**viewuser*/}
              {viewuser === e._id ? (
                <div className="bg-gray-300 p-5 m-3 rounded-2xl shadow-md hover:shadow-teal-500 duration-300 transition-all w-md ">
                  <div className="w-full">
                    <span className="w-1/6">ID Number : </span>{" "}
                    <span>{e._id}</span>
                  </div>
                  <div className="w-full">
                    <span className="w-1/6">Username : </span>{" "}
                    <span>{e.username}</span>
                  </div>
                  <div className="w-full">
                    <span className="w-1/6">Email : </span>{" "}
                    <span>{e.email}</span>
                  </div>
                  <div>
                    <span className="w-1/6">Phone Number : </span>{" "}
                    <span>{e.phone}</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/**Edituser*/}
              {edit === e._id ? (
                <div className="bg-gray-300 p-5 m-3 rounded-md w-md shadow-md hover:shadow-teal-500 duration-300 transition-all">
                  <div className="mb-2 flex gap-4 items-center">
                    <label
                      htmlFor="email"
                      className="text-xl block mb-1 w-1/3 "
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      value={edituser.username}
                      onChange={handleinput}
                      className={inputcss}
                    />
                  </div>
                  <div className="mb-2 flex gap-4 items-center">
                    <label
                      htmlFor="email"
                      className="text-xl block mb-1 w-1/3 "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={edituser.email}
                      onChange={handleinput}
                      className={inputcss}
                    />
                  </div>
                  <div className="mb-2 flex gap-4 items-center">
                    <label
                      htmlFor="email"
                      className="text-xl block mb-1 w-1/3 "
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter Phone"
                      value={edituser.phone}
                      onChange={handleinput}
                      className={inputcss}
                    />
                  </div>
                  <div className="mb-2 flex gap-4 items-center">
                    <label
                      htmlFor="email"
                      className="text-xl block mb-1 w-1/3 "
                    >
                      isAdmin
                    </label>
                    <select
                      name="isAdmin"
                      value={edituser.isAdmin}
                      onChange={handleinput}
                      className={inputcss}
                    >
                      <option value="">Select</option>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                  <div className="mt-6 flex gap-4 items-center justify-around">
                    <button
                      onClick={() => {
                        setedit(null);
                      }}
                      className="bg-amber-300 w-30 text-xl p-1 rounded-md hover:bg-amber-500"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {handleupdate(e._id),setedit(null)}}
                      className="bg-blue-400 w-30 text-xl p-1 rounded-md hover:bg-blue-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))
        )}
      </div>
    </>
  );
}
