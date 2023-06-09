import bcrypt from 'bcrypt'
import Users, { validateUser } from '../models/userModel.js';



export const register = async (req, res) => {
   try {

      const { error } = validateUser(req.body)

      if (error) return res.status(400).send({ error: error.details[0].message });



      const {
         userName,
         password,
         Email,
         Roll
      } = req.body

      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);

      const newUser = new Users({
         userName,
         password: hash,
         Email,
         Roll
      }
      );

      await newUser.save();
      res.status(200).send("user has been created.");

   } catch (err) {
      res.send(err)
   }
};

export const login = async (req, res) => {
   try {

      const user = await Users.findOne({ userName: req.body.userName });
      if (!user)
         return res.status(404).send("user not found");

      const isCorrect = bcrypt.compare(req.body.password, user.password,);
      if (!isCorrect)
         return res.status(400).send("wrong passwor or userName");




      res.status(200).json({ user })

   } catch (err) {
      res.status(500).send(err)
   }
}