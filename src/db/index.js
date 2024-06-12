import mongoose from "mongoose";
import { DB_NAME } from "../constants";

export const connectedToDatabase = async () => {
  try {
    const dbInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
    console.log(`connected to mongodb`, dbInstance.connection.host);
  } catch (error) {
    console.log(`Opps, Mongodb not connected ${err?.message}`);
    process.exit(1);
  }
};
