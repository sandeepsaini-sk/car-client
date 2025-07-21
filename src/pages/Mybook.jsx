import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Backend = import.meta.env.VITE_BACKEND_API;

export default function Mybook() {
  const [booking, setbook] = useState([]);
  const { userid } = useSelector((state) => state.auth);
  const fetchBookings = async () => {
    try {
      const book = await fetch(`${Backend}/booking/${userid}`);
      const data = await book.json();
      setbook(data.booking);
    } catch (error) {
      toast.error("bookin not fetch", error);
    }
  };

  useEffect(() => {
    if (userid) fetchBookings();
  }, [userid]);;

  return (
    <>
    <div className="shadow-md text-xl sm:text-2xl md:text-4xl font-serif font-semibold text-center py-4 bg-white sticky top-0 z-10">
  My-Booking
</div>
      <div className="container mx-auto px-4 py-6 ">
        {booking.length === 0 ? (
          <h1 className="text-center text-5xl font-semibold text-gray-600">No booking Found</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {booking.map((book, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm shadow-amber-700 p-4 w-full max-w-sm mx-auto">
                <div className="mb-2">
                  <span className="font-bold text-lg">Order ID:</span>{" "}
                  <span>{book._id}</span>
                </div>
                <div>
                  <span className="font-semibold">Email ID:</span>{" "}
                  <span>{book.email}</span>
                </div>
                <div>
                  <span className="font-semibold">PickupDate:</span>{" "}
                  <span>{book.pickupDate}</span>
                </div>
                <div>
                  <span className="font-semibold">DropoffDate:</span>{" "}
                  <span>{book.dropoffDate}</span>
                </div>
                <div>
                  <span className="font-semibold">Price:</span>{" "}
                  <span>{book.price}</span>
                </div>
                <div>
                  <span className="font-semibold">Car:</span>{" "}
                  <span>{book.title}</span>
                </div>
                <div className="my-2">
                  <span className="font-semibold">status:</span>{" "}
                  <span  className={`px-2 py-1 rounded ${
                  book.status === "Pending"
                    ? "bg-yellow-500 text-white"
                    : book.status === "Confirmed"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}>{book.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </>
  );
}
