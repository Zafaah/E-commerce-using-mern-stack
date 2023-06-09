import React from 'react'

const CartLIst = () => {
   const { name, imageUrl } = product

   return (
      <section class="h-100 gradient-custom">
         <div class="container py-5">
            <div class="row d-flex justify-content-center my-4">
               <div class="col-md-8">
                  <div class="card mb-4">
                     <div class="card-header py-3">
                        <h5 class="mb-0">Cart - 2 items</h5>
                     </div>
                     <div class="card-body">

                        <div class="row">
                           <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">

                              <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                 <img src={imageUrl}
                                    class="w-100" alt="Blue Jeans Jacket" />
                                 <a href="#!">
                                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                                 </a>
                              </div>

                           </div>

                           <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">

                              <p><strong>{name}</strong></p>

                              <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                 title="Remove item">
                                 <i class="fas fa-trash"></i>
                              </button>
                              <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                 title="Move to the wish list">
                                 <i class="fas fa-heart"></i>
                              </button>

                           </div>

                           <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">

                              <div class="d-flex mb-4" style="max-width: 300px">
                                 <button class="btn btn-primary px-3 me-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                    <i class="fas fa-minus"></i>
                                 </button>

                                 <div class="form-outline">
                                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                                    <label class="form-label" for="form1">Quantity</label>
                                 </div>

                                 <button class="btn btn-primary px-3 ms-2"
                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                    <i class="fas fa-plus"></i>
                                 </button>
                              </div>

                              <p class="text-start text-md-center">
                                 <strong>$17.99</strong>
                              </p>

                           </div>
                        </div>


                        <hr class="my-4" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CartLIst