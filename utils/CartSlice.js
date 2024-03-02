import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        price : 0,
    },
    reducers : {
        addItem : (state,action)=>{
            if(action.payload.card.info.price){
                console.log("1stone",action.payload.card.info.price);
                state.items.push(action.payload);
                state.price+=(action.payload.card.info.price)/100;
            }
            else{
                console.log("2ndone",action.payload.card.info.defaultPrice);
                state.items.push(action.payload);
                state.price+=(action.payload.card.info.defaultPrice)/100;
            }
            
        },
        clearCart : (state)=>{
            state.items = [];
        },
    }
});

export const {addItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
