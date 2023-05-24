import express from "express";
import userRoute from "./src/Routers/user.Router.js";
import productRoute from "./src/Routers/product.Router.js";
import sellerRoute from "./src/Routers/sellerRouter.js";
import dotenv from 'dotenv'
import { connectMongodb } from "./src/db/mongoDb.js";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send("hello")
})

app.use('/Users', userRoute);
app.use('/product', productRoute);
app.use('/sell', sellerRoute);

dotenv.config();

const PORT = process.env.PORT || 9000;
const URL = process.env.MONGO_URL;

connectMongodb(URL);

app.listen(PORT, () => {
   console.log(`server Is runnig on http://localhost:${PORT}`)
})