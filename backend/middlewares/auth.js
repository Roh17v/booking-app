import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export async function validateToken(req, res, next) {
  const token = req.cookies.authToken;
  console.log(token);
  if (!token)
    return next(createError(401, "Access Denied.You are not Authenticated."));
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    next(createError(400, "Invalid Token."));
  }
}

export const verifyUser = (req, res, next) => {
  validateToken(req, res, (err) => {
    if (err) return next(err);
    console.log(req.user._id, " ", req.params.id);
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next();
    } else return next(createError(403, "You are not Authorized!"));
  });
};

export const verifyAdmin = (req, res, next) => {
  validateToken(req, res, (err) => {
    if (err) return next(err);
    console.log(req.user._id, " ", req.params.id);
    if (req.user.isAdmin) {
      next();
    } else return next(createError(403, "You are not Authorized!"));
  });
};

export const sendUser = (req, res, next) => {
  const user = req.user;

  return res.status(200).json({
    id: user._id,
    username: user.username,
    email: user.email,
  });
};
