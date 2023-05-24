
import seller from "../../models/sellesModel.js";

export const getAll = async (req, res) => {
   const product = await product.find([]);
   res.send(product)
};

export const addSeller = async (req, res) => {

   const newSeller = new newSeller({
      seller_id: req.body.seller_id,
      seller_name: req.body.seller_name,
   });
   await newSeller.save();
   res.send();
};

export const updateSellr = async (req, res) => {
   const { id } = req.params;
   const seller = await seller.findOneandUpdate('_id', id);

   if (!seller)
      return res.status(400).send({ message: "not Found" });
   res.send(seller)
};

export const deleteSeller = async (req, res) => {
   const { id } = req.params;

   const Seller = await seller.findOneAndDelete({ _id: id });

   if (!Seller) return res.status(400).send({ error: "The Seller not founded." });

   res.send(Seller);
}
