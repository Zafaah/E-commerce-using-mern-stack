import mongoose from "mongoose";
import Joi from "joi";


const userSchema = new mongoose.Schema({
   userName: {
      type: String,
      require: true,
      minLength: 5,
      maxLength: 29,
   },
   Email: {
      type: String,
      require: true,
      unique: true,
      minLength: 5,
      maxLength: 29,
   },
   password: {
      type: String,
      require: true,
      minLength: 5,
      maxLength: 100,
   },
   Roll: {
      type: String,
      require: true,
      minLength: 5,
      maxLength: 10,
   }

}, {
   timetemps: true
}
);

export const validateUser = (user) => {
   const Schema = Joi.object({
      userName: Joi.string().min(5).max(29).required(),
      Email: Joi.string().min(5).max(29).required(),
      password: Joi.string().min(5).max(100).required(),
      Roll: Joi.string().min(5).max(10).required()
   });
   return Schema.validate(user)
}

const Users = new mongoose.model("Users", userSchema);

export default Users;