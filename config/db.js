import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connect successfully");
  } catch (Error) {
    console.log(Error);
  }
};
export default connectDB;
