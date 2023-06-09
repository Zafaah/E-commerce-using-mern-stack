import { useState } from "react"
import Product from "../components/Product"
import { useEffect } from "react";
// import axios from "axios";
import data from '../data'
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer";


const Shope = () => {
   const [products, setProducts] = useState();
   const [filteredProduct, setFilteredProduct] = useState();
   const dispatch = useDispatch();

   const addProduct = (product) => {
      dispatch(addToCart({ product }));

   }


   const onSearch = (e) => {
      const text = e.target.value.toLowerCase();
      if (text.length < 0) {
         setFilteredProduct(products);
      }
      const filtered = products.filter((product) => product.name.toLowerCase().includes(text));
      setFilteredProduct(filtered);
   }

   useEffect(() => {
      // axios("https://jsonplaceholder.typicode.com/photos").then((res) => {
      //   setProducts(res.data)
      // }).catch((err) => {
      //   console.log(err);
      // })
      setProducts(data[0]["items"])

   }, [])

   useEffect(() => {
      setFilteredProduct(products);
   }, [products])


   return (
      <div className="container mt-5">
         <h1>Products</h1>
         <input type="text" onChange={onSearch} />
         <div className="row">
            {
               filteredProduct?.map((product) => <Product key={product.id} product={product} addCart={addProduct} />
               )
            }
         </div>
      </div>
   )
}

export default Shope