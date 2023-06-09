import express from 'express';
import { login, register } from '../controllers/Auth.js';

const userRoute = express.Router();

userRoute.post('/register', register);
userRoute.post('/Login', login)

export default userRoute;