import bcrypt from "bcrypt";
import express from "express";
import { User } from "../models/user.model.js";
import { createError } from "../utils/error.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404, "User Not Found!"));

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return next(createError(400, "Invalid Email or Password."));

    //token generation
    const token = user.generateAuthToken();
    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).send("Logged In Successfully.");
  } catch (error) {
    next(error);
  }
});

export default router;
