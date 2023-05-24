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
      type: String,
      require: true,
      maxLength: 20,
      minLength: 1,
   },
   pType: {
      type: String,
      require: true,
      maxLength: 20,
      minLength: 1,
   },
   pQty: {
      type: String,
      require: true,
      maxLength: 20,
      minLength: 1,
   }


},
   {
      timestamps: true
   }
);

export const validateProduct = (product) => {
   const Schema = Joi.object({
      pID: Joi.string().max(20).min(1).required(),
      pName: Joi.string().max(50).min(1).required(),
      pType: Joi.string().max(20).min(1).required(),
      pPrice: Joi.string().max(20).min(1).required(),
      pQty: Joi.string().max(20).min(1).required(),
   })
   return Schema.validate(product)
}

const products = new mongoose.model("products", productSchema);

export default products;