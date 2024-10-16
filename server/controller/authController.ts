import { CookieOptions, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { SECRET } from '../lib/modules/validateEnv';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
const prisma = new PrismaClient();
const cookieOption: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000, // 1 day 
};


export async function signup(req: Request, res: Response): Promise<Response> {

  try {
    const { name, email, phone, password } = req.body;
    console.log(name, email, password, phone);

    // check if user already exist
    const user = await prisma.user.findUnique({
      where: {
        name: name,
        email: email,
      },
    })

    if (user) return res.status(401).json({ msg: "User Already Exits!", log: "signup: user already exist" });

    // create user if not exists with hashed password
    else {
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: {
          name: name,
          email: email,
          phone: phone,
          password: hashedPassword,
        }
      })
    }

    // genereate jwt token
    const token = jwt.sign({ phone }, SECRET, { expiresIn: '24h' });
    // store in cookie
    res.cookie('token', token, cookieOption);

    return res.status(201).json({ msg: 'User created successfully' });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Signup' });
  }
}

export async function login(req: Request, res: Response): Promise<Response> {
  try {
    const {phone, password} = req.body;

    // get user fron db
    const user = await prisma.user.findUnique({where: {phone}});
    if(!user) return res.status(400).json({msg: "The Phone Number is Not Registered", log: "Login: Wrong phone"});

    // check pass
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(400).json({msg: "Incorrect Password", log: "login: wrong pass"})

    // genetate token
    const token = jwt.sign({ phone }, SECRET, { expiresIn: '24h' });
    // store in cookie
    res.cookie('token', token, cookieOption);

    return res.status(201).json({ msg: 'User login successfully' });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Signup' });
  }
}