import mongoose from "mongoose";

export const connectMongodb = (url) => {
   mongoose.connect(url).then(() => {
      console.log("Connection Succesefull")
   }).catch((err) => {
      console.log(err)
   })
};
