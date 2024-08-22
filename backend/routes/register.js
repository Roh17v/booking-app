import bcrypt from "bcrypt";
import express from "express";
import _ from "lodash";
import { User, validateUser } from "../models/user.model.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const newUser = new User(
      _.pick(req.body, ["username", "email", "password", "isAdmin"])
    );
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    const result = await newUser.save();

    //token generation
    const token = newUser.generateAuthToken();
    res.cookie('authToken', token,{
        httpOnly: true, 
        sameSite: 'strict', 
    });

    return res.status(201).send("User registered Successfully.");
  } catch (error) {
    next(error);
  }
});

export default router;
