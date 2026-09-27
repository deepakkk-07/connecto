import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent Xss attacks: cross-site scripting
    sameSite: "strict", //csrf attacks
    secure: ENV.NODE_EN === "development" ? false : true,
  });

  return token;
};
