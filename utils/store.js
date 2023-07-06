import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import LocationSlice from "./LocationSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice,
        location : LocationSlice,
    },
});

export default store;