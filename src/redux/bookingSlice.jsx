import { createSlice } from "@reduxjs/toolkit";

const initialState={
    title:"",image:"",seat:"",price:"",carId:""
}

export const bookingSlice=createSlice({
    name:"booking",
    initialState,
    reducers:{
        selectcar:(state,action)=>{
            const{title,image,seat,price,_id}=action.payload;
            state.title=title;
            state.image=image;
            state.seat=seat;
            state.price=price;
            state.carId=_id
        },
    
    },
});
export const{selectcar}=bookingSlice.actions;
export default bookingSlice.reducer;