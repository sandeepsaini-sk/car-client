import React, { useState, useEffect } from "react";
import { ImagetoBase64 } from "../Utility/ImagetoBase64";
import { toast } from 'react-toastify';
const Backend = import.meta.env.VITE_BACKEND_API;

export default function Cares() {
  const [cars, setcars] = useState([]);
  const [viewcar, setviewcar] = useState(null);
  const [edit, setedit] = useState(null);
  const [editcar, seteditcar] = useState({
    image: "",
    title: "",
    brand: "",
    oil: "",
    type: "",
    seat: "",
    price: "",
  });
  const [Image, setimage] = useState("");
  //CARS get//
  const fetchcars = async () => {
    try {
      const cars = await fetch(`${Backend}/cars`);
      const data = await cars.json();
      setcars(data.cars);
    } catch (error) {
      toast.error("cars not fetch");
    }
  };
  useEffect(() => {
    fetchcars();
  }, []);

  //delete function
  const handledelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this cars?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${Backend}/cars/${id}`, {
        method: "DELETE",
      });

      const res = await response.json();

      if (res.alert) {
        setcars((prevUsers) => prevUsers.filter((cars) => cars._id !== id));
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (err) {
      toast.error("Error deleting user:");
    }
  };
  ///handle image
  const handleimage = async (e) => {
    const file = await ImagetoBase64(e.target.files[0]);
    setimage(file);
    seteditcar((prev) => ({ ...prev, image: file }));
  };
  ///input handle
  const handleCarInput = (e) => {
    seteditcar((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  ///update function
  const handleUpdate = async (id) => {
    try {
      const payload = {
        ...editcar,
        image: editcar.image || Image,
        price: Number(editcar.price),
        seat: Number(editcar.seat),
      };
      const response = await fetch(`${Backend}/cars/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (response.ok) {
        setedit(null);
        toast.success(data.message)
        fetchcars();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("cars data not found");
    }
  };
  //status change function
  const handleToggleStatus = async (id, newstatus) => {
    const Status = newstatus === "available" ? "unavailable" : "available";

    try {
      const response = await fetch(`${Backend}/cars/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: Status }),
      });
      const data = await response.json();
     
      if (response.ok) {
        toast.success(data.message)
        fetchcars(); // refresh list
      } else {
        toast.error("Toggle failed", data.message);
      }
    } catch (error) {
      toast.error("Toggle status error:");
    }
  };

  return (
    <>
      <div className="shadow-md text-2xl font-serif font-semibold text-center py-1 bg-white sticky top-0 z-1">
        Cars
      </div>
      <div className="mx-3 my-3 font-serif md:text-xl">
        {/* Table header */}
        <div className="flex justify-between gap-3 items-center text-center bg-amber-300 px-3 py-1 rounded font-bold shadow-sm hover:shadow-teal-400  duration-300 transition-all hover:scale-100 mb-2 sticky top-0 z-1">
          <h1 className="w-10">ID</h1>
          <h1 className="w-24 text-left">Image</h1>
          <h1 className="w-40 text-left">Car Name</h1>
          <h1 className="w-16">Status</h1>
          <h1 className="w-16">View</h1>
          <h1 className="w-16">Edit</h1>
          <h1 className="w-16">Delete</h1>
        </div>
        {cars.length === 0 ? (
          <h1 className="text-center text-5xl font-bold">Cars not found</h1>
        ) : (
          <>
            {cars.map((e, i) => (
              <>
                <div
                  key={i}
                  className="flex justify-between gap-3 items-center text-center bg-white px-3 py-1 rounded shadow-sm hover:shadow-teal-400  duration-300 transition-all hover:scale-100 mb-2 sticky top-0 z-1"
                >
                  <h1 className="w-10">{i + 1}</h1>
                  <h1 className="w-24">
                    <img
                      src={e.image}
                      alt="car image"
                      className="w-full h-11 object-contain"
                    />
                  </h1>
                  <h1 className="w-40 text-left">
                    {e.title}
                    {e.status === "available" && (
                      <span className="text-xs bg-green-200 text-green-900 px-2 py-0.5 rounded ml-2">
                        available
                      </span>
                    )}
                  </h1>

                  <button
                    onClick={() => handleToggleStatus(e._id, e.status)}
                    className={`w-16 cursor-pointer font-semibold `}
                  >
                    <div
                      className={`rounded font-bold w-10 md:w-15 text-white ${
                        e.status === "available"
                          ? "bg-green-500 "
                          : "bg-red-500"
                      }`}
                    >
                      {e.status === "available" ? "on" : "off"}
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setviewcar(viewcar === e._id ? null : e._id);
                      setedit(null);
                    }}
                    className="w-16 text-center text-blue-500 hover:text-blue-600 underline cursor-pointer"
                  >
                    {viewcar === e._id ? "Hide" : "View"}
                  </button>
                  <button
                    onClick={() => {
                      setedit(edit === e._id ? null : e._id);
                      seteditcar({
                        title: e.title,
                        image: e.image,
                        brand: e.brand,
                        oil: e.oil,
                        type: e.type,
                        seat: e.seat,
                        price: e.price,
                      });
                      setimage(e.image);
                      setviewcar(null);
                    }}
                    className="w-16 text-center text-green-500 hover:text-green-600 underline cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handledelete(e._id)}
                    className="w-16 text-center text-red-500 hover:text-red-600 underline cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
                {/**view car fuction */}
                {viewcar === e._id && (
                  <div className="bg-gray-300 p-4 rounded-lg shadow-md my-2 w-lg md:w-2xl">
                    <div className="bg-white rounded overflow-hidden mb-3">
                      <img
                        src={e.image}
                        alt="Car"
                        className="w-full h-44 object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <span className="font-semibold"> Car ID Number : </span>
                      <span className="text-slate-700">{e._id}</span>
                    </div>
                    <div className="w-full">
                      <span className="font-semibold">Car Name : </span>
                      <span className="text-slate-700">{e.title}</span>
                    </div>
                    <div className="w-full">
                      <span className="font-semibold">Brand : </span>
                      <span className="text-slate-700">{e.brand}</span>
                    </div>
                    <div>
                      <span className="font-semibold">oil Type: </span>{" "}
                      <span className="text-slate-700">{e.oil}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Transmission: </span>{" "}
                      <span className="text-slate-700">{e.type}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Seater: </span>{" "}
                      <span className="text-slate-700">{e.seat}</span>
                    </div>
                    <div>
                      <span className="font-semibold">price: </span>{" "}
                      <span className="text-slate-700"> ₹{e.price}</span>
                    </div>
                  </div>
                )}
                {/**car edit function  */}
                {edit === e._id && (
                  <div className="bg-gray-300 px-4 py-1 rounded-lg shadow-md my-2 w-lg md:w-2xl">
                    <div className="grid grid-cols-2 justify-between my-2 gap-5">
                      <div>
                        <label className="block mb-1">Car image</label>
                        <input
                          type="file"
                          name="image"
                          onChange={handleimage}
                          className="border rounded px-3 py-1 w-full"
                        />
                      </div>
                      <div className="bg-white">
                        <img
                          src={Image}
                          alt="car image"
                          className="h-16 object-contain w-full border"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 justify-between my-2 gap-5">
                      <div>
                        <label className="block mb-1">Car Name</label>
                        <input
                          type="text"
                          name="title"
                          value={editcar.title}
                          onChange={handleCarInput}
                          placeholder="Enter the car name"
                          className="border rounded px-3 py-1 w-full"
                        />
                      </div>
                      <div>
                        <label className="block mb-1">Brand Name</label>
                        <input
                          type="text"
                          name="brand"
                          value={editcar.brand}
                          onChange={handleCarInput}
                          placeholder="Enter the Brand name"
                          className="border rounded px-3 py-1 w-full"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between my-2 gap-5">
                      <div className="w-full">
                        <label className="block mb-1">Oil Type</label>
                        <select
                          name="oil"
                          value={editcar.oil}
                          onChange={handleCarInput}
                          className="border rounded px-3 py-2 w-full"
                        >
                          <option value="">Select Oil</option>
                          <option value="petrol">Petrol</option>
                          <option value="diesel">Diesel</option>
                          <option value="gas">Gas</option>
                          <option value="electric">Electric</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <label className="block mb-1">Tansmission Type</label>
                        <select
                          value={editcar.type}
                          onChange={handleCarInput}
                          name="type"
                          className="border rounded px-3 py-2 w-full"
                        >
                          <option value="">Select type</option>
                          <option value="Manual">manual</option>
                          <option value="Automatic">Automatic</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between my-2 gap-5">
                      <div className="w-full">
                        <label className="block mb-1">Seater</label>
                        <input
                          type="number"
                          name="seat"
                          value={editcar.seat}
                          onChange={handleCarInput}
                          placeholder="0"
                          className="border rounded px-3 py-1 w-full "
                        />
                      </div>
                      <div className="w-full">
                        <label className="block mb-1">Price</label>
                        <input
                          type="number"
                          name="price"
                          value={editcar.price}
                          onChange={handleCarInput}
                          placeholder="999"
                          className="border rounded px-3 py-1 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex justify-around mt-6">
                      <button
                        onClick={() => {
                          setedit(null);
                        }}
                        className="bg-amber-300 px-5 py-1 rounded text-xl hover:bg-amber-400"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleUpdate(e._id)}
                        className="bg-blue-500 px-5 py-1 rounded text-xl hover:bg-blue-700"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}
