import bcrypt from 'bcrypt'
import Users, { validateUser } from '../models/userModel.js';
import { JsonWebTokenError } from 'jsonwebtoken';


export const register = async (req, res) => {
   try {

      const { error } = validateUser(req.body)

      if (error) return res.status(400).send({ error: error.details[0].message });

      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);

      const {
         userName, password
      } = req.body

      const newUser = new newUser({
         userName,
         password: hash
      });

      await newUser.save();
      res.status(200).send("user has been created.");

   } catch (err) {
      err.status(500).json({ err: err.message });
   }
};

export const login = async (req, res) => {
   try {
      const user = await Users.findOne({ userName: req.body.userName });
      if (!user)
         return res.status(404).send("user not found");
      const isCorrect = bcrypt.compare(req.body.password, Users.password);
      if (!isCorrect)
         return res.status(400).send("wrong passwor or userName");

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      delete user.password;

      res.status(400).json({ token, user })

   } catch (err) {
      res.status(500).send("something Wrong");
   }
}