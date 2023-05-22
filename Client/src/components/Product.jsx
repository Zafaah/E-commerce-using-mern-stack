const Product = ({ product, addCart }) => {
   const { name, imageUrl } = product
   return (
      <>
         <div className="card col-3 m-4" style={{ width: "300px" }}>
            <div className="view overlay">
               <img className="card-img-top" src={imageUrl} alt="Card image cap" />
               <a href="#!">
                  <div className="mask rgba-white-slight" />
               </a>
            </div>
            <div className="card-body">
               <h4 className="card-title">{name}</h4>
               <p className="card-text">{"Sample text"}</p>
               <a href="" className="btn btn-primary" onClick={() => addCart(product)}>Add Cart</a>
            </div>
         </div>
      </>

   )
}

export default Product