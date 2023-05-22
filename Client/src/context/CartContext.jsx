import { createContext } from "react";
import Shope from "../pages/Shope";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([])

   const addCart = (product) => {
      setCart((prev) => [...prev, product])
   };

   // const value = {
   //    cart,
   //    addProduct
   // }
   return (
      <CartContext.Provider value={{ cart, addCart }}>
         {children}
      </CartContext.Provider>
   )

}