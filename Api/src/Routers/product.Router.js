import express from 'express';
import { addProduct, deleteProduct, getAll, updateProduct } from '../controllers/productControll.js';

const productRoute = express.Router();

productRoute.get('/get', getAll);
productRoute.post('/addproduct', addProduct);
productRoute.put('/update', updateProduct);
productRoute.delete('/deleteProduct', deleteProduct);

export default productRoute;