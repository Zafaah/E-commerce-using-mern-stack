import products from "../models/productsModel.js";

;

export const getAll = async (req, res) => {
   const product = await products.find();
   res.send(product)
};
export const getSingle = async (req, res) => {
   const id = req.params;
   const product = await products.findOne({ _id: id });
   res.send(product)
};

export const addProduct = async (req, res) => {

   const product = new products({
      pName: req.body.pName,
      pPrice: req.body.pPrice,
      pType: req.body.pType,
      pQty: req.body.pQty,
   });
   await product.save();
   res.send(product);
};

export const updateProduct = async (req, res) => {
   const { id } = req.params;
   const Product = await products.findOneandUpdate('_id', id);

   if (!Product)
      return res.status(400).send({ message: "not Found" });
   res.send(Product)
};

export const deleteProduct = async (req, res) => {
   const { id } = req.params;

   const product = await products.findOneAndDelete({ _id: id });

   if (!product) return res.status(400).send({ error: "The product not founded." });

   res.send(product);
}
