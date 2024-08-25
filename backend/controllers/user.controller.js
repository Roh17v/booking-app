import { User } from "../models/user.model.js";
import { createError } from "../utils/error.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).send({ message: "User Not Found!" });
    return res.status(200).send(deletedUser);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return next(createError(404, "User Not Found."));
    return res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const Users = await User.find();
    if (!Users) return next(createError(404, "Not Found!"));
    return res.status(200).send(Users);
  } catch (error) {
    next(error);
  }
};
