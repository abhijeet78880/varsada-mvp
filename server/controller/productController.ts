import { PrismaClient } from '@prisma/client';
import {Request, Response} from 'express'
const prisma = new PrismaClient();

export async function getAllCategory(req: Request, res: Response): Promise<Response> {
  try {
    const category = await prisma.category.findMany({})
    return res.status(200).json({ category });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Getting Category' });
  }
}

export async function createCategory(req: Request, res: Response): Promise<Response> {
  try {
    const {name, thumbnail, isActive, isVisible} = req.body;
    const category = await prisma.category.create({
      data: {
        name,
        thumbnail,
        isActive,
        isVisible
      }
    })

    return res.status(200).json({ msg: "category created sucessfully" });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Creating Category' });
  }
}

export async function getAllProducts(req: Request, res: Response): Promise<Response> {
  try {
    const product = await prisma.product.findMany({});
    return res.status(200).json({ product });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Getting Products' });
  }
}

export async function searchProduct(req: Request, res: Response): Promise<Response> {
  try {
    const product = await prisma.product.findMany({});
    return res.status(200).json({ product });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Getting Products' });
  }
}

export async function productById(req: Request, res: Response): Promise<Response> {
  try {
    const { pid } = req.body();
    const product = await prisma.product.findUnique({
      where: {
        id: pid
      }
    });
    return res.status(200).json({ product });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Getting Products' });
  }
}

export async function createProduct(req: Request, res: Response): Promise<Response> {
  try {
    const { pid } = req.body();
    
    return res.status(200).json({ msg: "Sucess Creating Product" });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error Getting Products' });
  }
}