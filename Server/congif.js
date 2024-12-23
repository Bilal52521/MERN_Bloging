import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("DB Connection Successful");
  } catch (error) {
    console.error("Database error:", error.message);
  }
};

export default connectDB;
