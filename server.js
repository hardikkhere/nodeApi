import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// CONNECTING DATABASE :

connectDB();
app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode...!`
  );
});
