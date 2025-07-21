import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'
import bookReducer from './bookingSlice'
export const Store=configureStore({
    reducer:{
        auth:authReducer,
        book:bookReducer,
    },
});