import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

async function validateToken(req, res, next) {
  const token = req.cookies.authToken;
  if (!token)
    return next(createError(401, "Access Denied.Token not Provided."));
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    next(createError(400).send("Invalid Token."));
  }
}

export default validateToken;
