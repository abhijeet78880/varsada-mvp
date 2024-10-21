import { PrismaClient } from '@prisma/client';
import {Request, Response} from 'express'
const prisma = new PrismaClient();

export async function getAllColor(req: Request, res: Response): Promise<Response> {
  try {
    const category = await prisma.category.findMany({})
    return res.status(200).json({ category });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Getting Category' });
  }
}