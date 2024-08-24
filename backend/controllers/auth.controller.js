import bcrypt from "bcrypt";
import _ from "lodash";
import { User, validateUser } from "../models/user.model.js";
import { createError } from "../utils/error.js";

export const registerUser = async (req, res, next) => {
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
    res.cookie("authToken", token, {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(201).send("User registered Successfully.");
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
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
};
