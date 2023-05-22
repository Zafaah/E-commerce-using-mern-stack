
import { useContext } from 'react'
import Product from '../components/Product'
import { CartContext } from '../context/CartContext'

const Carts = () => {

   const { cart, addCart } = useContext(CartContext);

   return (
      <div className="conainer mt-5 pt-2">
         <h1>Cart Items</h1>
         {
            cart?.map((product) => <Product key={product.id} product={product} addCart={addCart} />
            )
         }
      </div>
   )
}

export default Carts