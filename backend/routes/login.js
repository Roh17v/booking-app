import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login Here.");
});

export default router;
