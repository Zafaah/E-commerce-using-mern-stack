import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import Product from '../components/Product';
import data from '../data'
import { CartContext } from '../context/CartContext';
const Shope = () => {
   const { cart, addCart } = useContext(CartContext);

   const [products, setProducts] = useState();

   useEffect(() => {
      setProducts(data[0]['items']);
   }, []);
   return (
      <div className="container">
         <h1>Products</h1>

         <div className="row">
            {
               products?.map((product) => <Product key={product.id} product={product} addCart={addCart} />
               )
            }
         </div>
      </div>

   )
}

export default Shope