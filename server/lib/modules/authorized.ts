import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import { SECRET } from "./validateEnv";

export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;

  if(!token) return res.status(401).json({msg: "Unauthorized", log: "no token found as cookie"});

  try{
    const payload = jwt.verify(token, SECRET) as { phone: string };
    req.body.user = payload;
    next();
  }
  catch(ex) {
    res.status(401).json({ msg: "Invalid or expired token", log: "catch validate jwt" });
  }
}