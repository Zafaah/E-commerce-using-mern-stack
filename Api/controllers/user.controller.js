import bcrypt from 'bcrypt'
import Users from '../models/userModel.js';


export const register = async (req, res) => {
   try {
      const hash = bcrypt.hash(req.body.password, 5);
      const newUser = new newUser({
         ...req.body,
         password: hash
      });

      await newUser.save();
      res.status(200).send("user has been created.");

   } catch (err) {
      console.log(err)
   }
};

export const login = async (req, res) => {
   try {
      const user = await Users.findOne({ userName: req.body.userName });
      if (!user)
         return res.status(404).send("user not found");
      const isCorrect = bcrypt.compareSync(req.body.password, Users.password);
      if (!isCorrect)
         return res.status(400).send("wrong passwor or userName");
   } catch (err) {
      res.status(500).send("something Wrong");
   }
}