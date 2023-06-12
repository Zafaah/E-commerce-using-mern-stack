import { useContext } from "react"
import Product from "../components/Product"

import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../redux/reducer";


const Carts = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const addProduct = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className="conainer mt-5 pt-2">
      <h1>Cart Items</h1>
      {
        cart?.map((product) => <Product key={product.id} product={product} addToCart={product} />
        )
      }
    </div>
  )
}

export default Carts;