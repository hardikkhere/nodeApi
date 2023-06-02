import mongoose from "mongoose";

// CONNECTING DATABASE :
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "API" })
    .then(() => {
      console.log("Datebase connected successfully...!");
    })
    .catch((e) => {
      console.log("Failed to connect...!", e);
    });
};
