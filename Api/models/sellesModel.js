import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
   seller_id: {
      type: String,
      require: true,
   },
   seller_name: {
      type: String,
      require: true,
   }
},
   {
      timestamps: true,
   }
);

const seller = new mongoose.model("seller", sellerSchema);

export default seller