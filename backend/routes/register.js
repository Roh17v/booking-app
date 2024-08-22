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
    const result = await newUser.save();
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
});

export default router;
