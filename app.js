import express from "express";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoute.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import cors from "cors";

export const app = express();

config({ path: "./data/config.env" });

// MIDDLEWARE
// USING MIDDLEWARE TO ACCEPT DATA
app.use(express.json());
app.use(cookieParser());

// CORS STANDS FOR : CROSS ORIGIN RESOURCE SHARING
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// USING ROUTES :
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

// GET ROUTES
app.get("/", (req, res) => {
  res.send("Working correctly..!");
});

app.use(errorMiddleware);
