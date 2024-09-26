import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cartitem: [],
    },
    reducers: {

    }
})


export const { } = cartSlice.actions
export default cartSlice.reducer