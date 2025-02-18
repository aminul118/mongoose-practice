import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
};

export default dbConnect;
