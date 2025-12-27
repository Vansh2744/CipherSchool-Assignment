import mongoose from "mongoose";
import "dotenv/config"

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected Successfully....");
};

export default connectMongo;
