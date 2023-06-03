import mongoose from "mongoose";

// CONNECTING DATABASE :
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "API" })
    .then((e) => {
      console.log(`Datebase connected successfully ${e.connection.host} ...!`);
    })
    .catch((e) => {
      console.log("Failed to connect...!", e);
    });
};
