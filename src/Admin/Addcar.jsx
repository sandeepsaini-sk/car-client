import React, {useState } from "react";
import { ImUpload } from "react-icons/im";
import{ImagetoBase64} from '../Utility/ImagetoBase64'
import { toast } from "react-toastify";
const Backend = import.meta.env.VITE_BACKEND_API;
export default function Addcar() {
const[image,setimage]=useState("");
const[car,setcar]=useState({
  image:"",title:"",brand:"",oil:"",seat:"",price:"",type:""
})
   const handleImage=async(e)=>{
    const file=await ImagetoBase64(e.target.files[0])
    setimage(file);
    setcar((prev)=>({
      ...prev,
      image:file}))
   }
   const handleInput=(e)=>{
     setcar((prev)=>({
      ...prev,
     [e.target.name]:e.target.value}))
   }

   const handlesubmit=async(e)=>{
    e.preventDefault();

     if (!car.image) {
    toast.info("Please upload an image of the car.");
    return;
    }
      const payload = {
    ...car,
    price: Number(car.price),
    seat: Number(car.seat), 
  };
    const responce=await fetch(`${Backend}/addcar`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
    },
      body:JSON.stringify(payload)
    })
    const data=await responce.json();
    if(!data.alert){
      toast.success(data.message);
      setcar({image:"",title:"",brand:"",oil:"",seat:"",price:"",type:""})
      setimage("")
    }
    else{
      toast.error(data.message)
    }
   }
   
   
  return (
    
    <>
      <div className="shadow-md text-3xl font-serif font-semibold text-center py-2 bg-white sticky top-0 z-1">
        Add-Car
      </div>
      <div className=" md:w-2xl mx-auto p-5 font-serif">
        <form method="post" onSubmit={handlesubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label className="block mb-1">Car Image</label>
            <div
              className="h-44 w-full bg-gray-200 text-center relative"
              id="carimage"
            >
              {image?(<img src={image} alt="Preview image" className="h-full w-full object-contain"/>):
              (<ImUpload className="text-center w-full text-9xl text-blue-500" />)}
              <input
                type="file"
                onChange={handleImage}
                className="absolute left-0 top-0 h-full w-full opacity-0 cursor-pointer"
                id="carimage"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1">Car Name</label>
            <input type="text"
             name="title" 
             placeholder="Enter the car name"
             value={car.title}
             onChange={handleInput}
             className="w-full border py-2 px-3 rounded "
             required />
          </div>
          <div>
            <label className="block mb-1">Brand Name</label>
            <input
              type="text"
              name="brand"
              placeholder="Enter the brand name"
              value={car.brand}
             onChange={handleInput}
              className="w-full border py-2 px-3 rounded "
              required
            />
          </div>
          <div>
            <label className="block mb-1">Oil Type</label>
            <select
             name="oil"
             value={car.oil}
             onChange={handleInput}
              className="w-full border py-2 px-3 rounded ">
              <option value="">Select Oil</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="gas">Gas</option>
              <option value="electric">Electric</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Transmission Type</label>
            <select name="type"
            value={car.type}
             onChange={handleInput}
             className="w-full border py-2 px-3 rounded ">
              <option value="">Select type</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
          <div>
            <label className="block mb-1">Seater</label>
            <input type="number" 
            name="seat"
            value={car.seat}
             onChange={handleInput}
            placeholder="0"
            required
            className="w-full border py-2 px-3 rounded " />
          </div>
          <div>
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              placeholder="999"
              min={999}
              value={car.price}
              onChange={handleInput}
              className="w-full border py-2 px-3 rounded "
              required
            />
          </div>
          </div>
          <button
          type="submit" 
          className="w-full p-2 font-bold text-xl bg-blue-500 hover:bg-blue-700 text-white rounded">Save</button>
        </form>
      </div>
    </>
  );
}
