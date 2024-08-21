import dotenv from "dotenv";
import express from "express";
import connectDB from "./src/db/index.js";
import loginRouter from './routes/login.js'

const app = express();
dotenv.config();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/login',loginRouter);


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

app.get("/", (req, res) => {
  res.send("Hello World!");
});
