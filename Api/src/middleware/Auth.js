import Jwt from "jsonwebtoken";

export const VerifyToken = async (req, res, next) => {
   try {
      let token = req.header("Authentication");

      if (!token) return res.status(400).send("access denied");

      const verified = Jwt.verify(token, process.env.JWT_SECRET);

      req.user = verified;
      next()

   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}