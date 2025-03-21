import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { validateToken } from "./middlewares/auth.js";
import hotelRouter from "./routes/hotel.js";
import loginRouter from "./routes/login.js";
import registerRouter from "./routes/register.js";
import roomRouter from "./routes/room.js";
import userRouter from "./routes/user.js";
import connectDB from "./src/db/index.js";
import path from "path";
import { fileURLToPath } from "url";

const allowedOrigins = [process.env.FRONTEND_URL, "http://localhost:5173"];

const app = express();
dotenv.config();

//middlewares
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/login", loginRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/room", roomRouter);
app.use("/api/user", userRouter);
app.use("/api/register", registerRouter);

app.get("/api/data", validateToken, (req, res) => {
  res.json({ data: "secret data" });
});

//Error Handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!";
  if (err)
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  next();
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Listening on PORT: ${process.env.PORT}...`);
    });
  })
  .catch((error) => {
    console.log("Failed to Connect to MongoDB...", error);
    process.exit(1);
  });

export default app;
