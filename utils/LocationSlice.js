import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name : "location",
    initialState : {
        geocode : {lat:28.5355161,lng:77.3910265},
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
