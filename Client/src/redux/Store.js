import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reducer";
import reducer from "./reducer";

export const store = configureStore({
   reducer: reducer
})