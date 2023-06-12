import express from "express";
import cors from 'cors'
import userRoute from "./src/Routers/user.Router.js";
import productRoute from "./src/Routers/product.Router.js";
import sellerRoute from "./src/Routers/sellerRouter.js";
import dotenv from 'dotenv'
import { connectMongodb } from "./src/db/mongoDb.js";
import { VerifyToken } from "./src/middleware/Auth.js";

const app = express();
app.use(cors());

app.use(express.json());


app.get('/', VerifyToken, (req, res) => {
   res.send("hello")
})

app.use('/Users', userRoute);
app.use('/products', productRoute);
app.use('/Sellers', sellerRoute);

dotenv.config();


const PORT = process.env.PORT || 9000;
const URL = process.env.MONGO_URL;

connectMongodb(URL);

app.listen(PORT, () => {
   console.log(`server Is runnig on http://localhost:${PORT}`)
})