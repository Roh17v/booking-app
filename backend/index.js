import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";

const app = express();
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Listening on PORT: ${process.env.PORT}...`);
    });
  })
  .catch((error) => {
    console.log("Failed to Connect to MongoDB...", error);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
