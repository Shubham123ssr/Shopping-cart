import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
   // jo nam rakhe hain cartslice me 
        cart: CartSlice.reducer,
    }
});