import { createSlice } from "@reduxjs/toolkit";


const initialState={
    userid:localStorage.getItem("userid")||"",
    token:localStorage.getItem("token")||"",
    email:localStorage.getItem("email")||"",
    username:localStorage.getItem("username")||"",
    isAdmin:JSON.parse(localStorage.getItem("isAdmin"))||false
}

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            const{userid,token,email,isAdmin,username}=action.payload;
            state.userid=userid;
            state.token=token;
            state.email=email;
            state.username=username
            state.isAdmin=isAdmin;

            localStorage.setItem("userid",userid);
            localStorage.setItem("token",token);
            localStorage.setItem("email",email);
            localStorage.setItem("username",username);
            localStorage.setItem("isAdmin",JSON.stringify(isAdmin));
        },
        logout:(state)=>{
            state.userid="",
            state.token="",
            state.email="",
            state.username="",
            state.isAdmin="false",
            localStorage.clear();
        },
    },
});
export const{login,logout}=authSlice.actions;
export default authSlice.reducer;


