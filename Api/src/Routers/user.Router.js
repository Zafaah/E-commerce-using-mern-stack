import express from 'express';
import { deleteUser, login, register, updateUser } from '../controllers/Auth.js';

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/Login', login)
userRoute.put('/', updateUser);
userRoute.delete('/', deleteUser)

export default userRoute;