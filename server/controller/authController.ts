import {Request, Response} from 'express';
import jwt from 'jsonwebtoken'
import { SECRET } from '../lib/modules/validateEnv';

export async function signup(req: Request, res: Response): Promise<Response> {
  try{
    const { name, email, phone, password } = req.body;

    const token = jwt.sign({email, phone}, SECRET);
    return res.status(200).json({token});
  }
  catch(ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Signup' });
  }
}