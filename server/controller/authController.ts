import { CookieOptions, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { SECRET } from '../lib/modules/validateEnv';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs'
import { error } from 'console';
import nodemailer from 'nodemailer'
import exp from 'constants';
const prisma = new PrismaClient();
const cookieOption: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000, // 1 day 
};


// export async function signup(req: Request, res: Response): Promise<Response> {

//   try {
//     const { name, email, phone, password } = req.body;
//     console.log(name, email, password, phone);

//     // check if user already exist
//     const user = await prisma.user.findUnique({
//       where: {
//         name: name,
//         email: email,
//       },
//     })

//     if (user) return res.status(401).json({ msg: "User Already Exits!", log: "signup: user already exist" });

//     // create user if not exists with hashed password
//     else {
//       // hash password
//       const hashedPassword = await bcrypt.hash(password, 10);
//       await prisma.user.create({
//         data: {
//           name: name,
//           email: email,
//           phone: phone,
//           password: hashedPassword,
//         }
//       })
//     }

//     // genereate jwt token
//     const token = jwt.sign({ phone }, SECRET, { expiresIn: '24h' });
//     // store in cookie
//     res.cookie('token', token, cookieOption);

//     return res.status(201).json({ msg: 'User created successfully' });
//   }
//   catch (ex) {
//     console.log(ex);
//     return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Signup' });
//   }
// }

// export async function login(req: Request, res: Response): Promise<Response> {
//   try {
//     const {phone, password} = req.body;

//     // get user fron db
//     const user = await prisma.user.findUnique({where: {phone}});
//     if(!user) return res.status(400).json({msg: "The Phone Number is Not Registered", log: "Login: Wrong phone"});

//     // check pass
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if(!isPasswordValid) return res.status(400).json({msg: "Incorrect Password", log: "login: wrong pass"})

//     // genetate token
//     const token = jwt.sign({ phone }, SECRET, { expiresIn: '24h' });
//     // store in cookie
//     res.cookie('token', token, cookieOption);

//     return res.status(201).json({ msg: 'User login successfully' });
//   }
//   catch (ex) {
//     console.log(ex);
//     return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Signup' });
//   }
// }

// temporary storage for otps
const otps: { [key: string]: string } = {};

//helper function to generate 4-digit otp
const generateOtp = (): string => Math.floor(1000 + Math.random() * 9000).toString();

//helper function to check the input is email or phone number
function checkMail(m:"string"): boolean {
  return m.includes("@")
}

// helper function to send otp through email
const sendOtpEmail = async (email: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "varsada9@gmail.com",
      pass: "wfojiixiirgbmsrg",
    },
  });

  const mailOptions = {
    from: "varsada9@gmail.com",
    to: email,
    subject: "Your OTP for login into Varsada",
    text: `Your OTP code is ${otp}`,
  };

  await transporter.sendMail(mailOptions);
};


// otp sending controller
export async function requestOtp (req:Request, res: Response): Promise<Response> {
  try{
    const {email} = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const otp =generateOtp();
    // stores the otp for the user
    otps[email] = otp;

    if (checkMail(email)){
      try {
        await sendOtpEmail(email, otp);
        return res.status(200).json({ message: "OTP sent to email successfully!" });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to send OTP" });
      }
    }else{
      // this is a dummy response needs to bedeveloped later
        return res.status(200).json({msg:"otp will sent to mobile"})
    }

  }catch (e){
    console.log(e);
    return res.status(500).json({ msg: 'internal server error !', log: 'error sign-up' })
  }
}


export async function verifyOtp (req:Request, res: Response): Promise<Response> {
  
try{
  const {email,otp} = req.body;

  if (!email || !otp){
    return res.status(400).json({ msg: " email and otp are required !! " });
  }

  const storedOtp = otps[email];

  if (!storedOtp){
    return res.status(400).json({ msg: "no user Found"});
  }

  if (storedOtp === otp){
    delete otps[email];
    
    //this line needs to be modified
    let user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user){

      user = await prisma.user.create({
        data: {
          name: "set name",
          email: email,
          phone: '0000000000',
          password: "no password"
        }
      });

      const token = jwt.sign({userID:email}, SECRET,{expiresIn:"24h"});
      return res.status(200).json({msg:'OTP verified successfully', token});

    }else{
      const token = jwt.sign({userID:email}, SECRET,{expiresIn:"24h"});
      return res.status(200).json({msg:'OTP verified successfully,  user already exist', token});
      return res.status(400).json({msg:"inviled OTP"});
    }
  }else{
    return res.status(400).json({msg:"inviled OTP"});
  }
}catch(e){
  console.log(e);
  return res.status(500).json({error:"an error occured", details:e});
}
}