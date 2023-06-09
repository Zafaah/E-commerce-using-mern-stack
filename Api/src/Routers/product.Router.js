import express from 'express';
import { addProduct, deleteProduct, getAll, getSingle, updateProduct } from '../controllers/productControll.js';

const productRoute = express.Router();

productRoute.get('/getAllProduct', getAll);
productRoute.get('/getSingle', getSingle)
productRoute.post('/addproduct', addProduct);
productRoute.put('/update', updateProduct);
productRoute.delete('/deleteProduct', deleteProduct);

export default productRoute;