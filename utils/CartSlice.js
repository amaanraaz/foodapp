import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        price : 0,
    },
    reducers : {
        addItem : (state,action)=>{
            console.log(action.payload);
            state.items.push(action.payload);
            state.price+=(action.payload.card.info.price)/100;
            // console.log(state.price);
        },
        clearCart : (state)=>{
            state.items = [];
        },
    }
});

export const {addItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
