import { useContext } from "react"
import Product from "../components/Product"

import { useDispatch, useSelector } from "react-redux"

import { addToCart } from "../redux/reducer"
import CartLIst from "../components/cartLIst"

const Carts = () => {
   const dispatch = useDispatch();
   const cart = useSelector(state => state.cart);

   const addProduct = (product) => {
      dispatch(addToCart({ product }));
   }

   return (
      <div className="conainer mt-5 pt-2">
         <h1>Cart Items</h1>
         {
            cart?.map((product) => <CartLIst key={product.id} product={product} addCart={product} />
            )
         }
      </div>
   )
}

export default Carts;