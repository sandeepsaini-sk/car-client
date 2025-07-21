import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Backend = import.meta.env.VITE_BACKEND_API;

export default function Booking() {
  const { title, image, seat, price, carId } = useSelector(
    (state) => state.book
  );
  const { username, email, userid } = useSelector((state) => state.auth);
  const [book, setbook] = useState({
    userId: "",
    car: "",
    image: "",
    title: "",
    username: "",
    location: "",
    email: "",
    pickupDate: "",
    dropoffDate: "",
    seat: "",
    price: "",
    gender: "",
    driverRequired: "",
    paymentMethod: "",
  });
  useEffect(() => {
    setbook((prev) => ({
      ...prev,
      userId: userid,
      image: image,
      title: title,
      username: username,
      email: email,
      seat: seat,
      price: price,
      car: carId,
    }));
  }, [userid, image, title, username, email, seat, price, carId]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setbook((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call here if needed
    const payload = {
      ...book,
      price: Number(book.price),
      seat: Number(book.seat),
      pickupDate: new Date(book.pickupDate).toISOString().split("T")[0],
      dropoffDate: new Date(book.dropoffDate).toISOString().split("T")[0],
    };

    const responce = await fetch(`${Backend}/booking`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await responce.json();
    if (!data.alert) {
      toast.success(data.message);
      setbook((prev) => ({
        ...prev,
        driverRequired: "",
        paymentMethod: "",
        gender: "",
        location: "",
        pickupDate: "",
        dropoffDate: "",
      }));
    } else {
      toast.error(data.message);
    }
  };

  return (
    <>
      <div className="md:w-2xl mx-auto p-5 font-serif">
        <form
          className="space-y-4 bg-white p-6 rounded-lg shadow-md "
          onSubmit={handleSubmit}
        >
          <div
            className="h-44 w-full bg-gray-200 text-center relative border"
            id="carimage"
          >
            <img
              src={book.image}
              alt="Preview image"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="md:grid grid-cols-2 gap-5 space-y-4">
            <div>
              <label className="block mb-1">User Name</label>
              <input
                type="text"
                name="username"
                value={book.username}
                required
                readOnly
                className="w-full border py-2 px-3 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Car Name</label>
              <input
                type="text"
                name="title"
                value={book.title}
                required
                readOnly
                className="w-full border py-2 px-3 rounded"
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-5 space-y-4">
            <div>
              <label className="block mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={book.location}
                onChange={handleInput}
                placeholder="Enter your parmanent location"
                className="w-full border py-2 px-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email ID</label>
              <input
                type="email"
                name="email"
                value={book.email}
                readOnly
                className="w-full border py-2 px-3 rounded"
                required
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-5 space-y-4">
            <div>
              <label className="block mb-1">Pickup date</label>
              <input
                type="date"
                name="pickupDate"
                value={book.pickupDate}
                onChange={handleInput}
                className="w-full border py-2 px-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Drop Off date</label>
              <input
                type="date"
                name="dropoffDate"
                value={book.dropoffDate}
                onChange={handleInput}
                className="w-full border py-2 px-3 rounded"
                required
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-5 space-y-4">
            <div>
              <label className="block mb-1">Seater</label>
              <input
                type="number"
                name="seat"
                value={book.seat}
                readOnly
                className="w-full border py-2 px-3 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Price/day</label>
              <input
                type="number"
                name="price"
                value={book.price}
                readOnly
                className="w-full border py-2 px-3 rounded"
                required
              />
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-5 space-y-4">
            <div>
              <label className="block mb-1">Gender</label>
              <select
                name="gender"
                className="w-full border py-2 px-3 rounded"
                required
                value={book.gender}
                onChange={handleInput}
              >
                <option value=""> Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Driver Required</label>
              <select
                name="driverRequired"
                className="w-full border py-2 px-3 rounded"
                value={book.driverRequired}
                onChange={handleInput}
                required
              >
                {" "}
                <option value="">select Driver</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              value={book.paymentMethod}
              onChange={handleInput}
              className="w-full border py-2 px-3 rounded"
              required
            >
              <option value=""> Choose payment mode</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
