import products from "../../models/productsModel.js";

export const getAll = async (req, res) => {
   const product = await product.find([]);
   res.send(product)
};

export const addProduct = async (req, res) => {

   const product = new product({
      pName: req.body.pName,
      pPrice: req.body.pPrice,
      pType: req.body.pType,
      pQty: req.body.pQty,
   });
   await product.save();
   res.send();
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
