import { createSlice } from "@reduxjs/toolkit"


const initialValue = {
   cart: [],

}

const cartSlice = createSlice({
   name: 'cart',
   initialState: initialValue,
   reducers: {
      addToCart: (state, { payload }) => {
         return { ...state, cart: [...state.cart, payload] }
      }
   }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;