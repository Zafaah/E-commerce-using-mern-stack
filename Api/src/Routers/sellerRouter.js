import express from 'express';
import { addSeller, deleteSeller, getAll, updateSellr } from '../controllers/sellerController.js';

const sellerRoute = express.Router();

sellerRoute.get('/getAll', getAll);
sellerRoute.post('/addSeller', addSeller);
sellerRoute.put('/updateSeller', updateSellr);
sellerRoute.delete('/deleteSeller', deleteSeller);

export default sellerRoute;