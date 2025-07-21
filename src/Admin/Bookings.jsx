import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
const Backend = import.meta.env.VITE_BACKEND_API;

export default function Bookings() {
  const [booking, setbook] = useState([]);
  const fetchBookings = async () => {
    try {
      const book = await fetch(`${Backend}/getbooking`);
      const data = await book.json();
      setbook(data.bookings);
      toast.success(data.message );
    } catch (error) {
    toast.error("bookin not fetch");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateOrderStatus = async (Id, newStatus) => {
    try {
      const res = await fetch(`${Backend}/bookings/${Id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        fetchBookings(); 
        toast.success(res.message|| "Order status updated")
      } else {
        toast.error("Failed to update order status");
      }
    } catch (err) {
      toast.error("Error updating order status:");
    }
  };
  return (
    <>
      <div className="shadow-md text-2xl md:text-5xl font-serif font-semibold text-center py-4 bg-white sticky top-0 z-1">
        Booking
      </div>
      <div className="container mx-auto px-4 py-6">
        {booking.length === 0 ? (
          <h1 className="text-center text-4xl font-semibold text-gray-600">no booking found</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
                {/* Buttons for Status Update */}
            <div className="flex gap-3 mt-4 justify-between">
              <button  onClick={() => updateOrderStatus(book._id, "Confirmed")} className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer">
                Mark as  Confirmed
              </button>
              <button onClick={() => updateOrderStatus(book._id, "Cancelled")} className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">
                Cancel Booking
              </button>
            </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
