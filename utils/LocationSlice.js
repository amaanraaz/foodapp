import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name : "location",
    initialState : {
        geocode : {lat:25.5940947,lng:85.1375645},
        flag : false
    },
    reducers : {
        addGeocode : (state,action)=>{
            state.geocode=action.payload,
            state.flag = true;
        },
    }
});

export const {addGeocode} = locationSlice.actions;
export default locationSlice.reducer;
