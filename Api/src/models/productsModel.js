import mongoose from "mongoose";
import Joi from "joi";
import joiObjectid from "joi-objectid";
const productSchema = new mongoose.Schema({
   pID: {
      type: String,
      require: true,
      maxLength: 20,
      minLength: 1,
   },
   pName: {
      type: String,
      require: true,
      maxLength: 50,
      minLength: 1,
   },
   pPrice: {
      type: Number,
      require: true,
      maxLength: 20,
      minLength: 1,
   },
   imageUrl: {
      type: String,
      require: true,
   },



},
   {
      timestamps: true
   }
);

export const validateProduct = (product) => {
   const Schema = Joi.object({
      pID: Joi.string().max(20).min(1).required(),
      pName: Joi.string().max(50).min(1).required(),
      imageUrl: Joi.string().required(),
      pPrice: Joi.string().max(20).min(1).required(),

   })
   return Schema.validate(product)
}

const products = new mongoose.model("products", productSchema);

export default products;