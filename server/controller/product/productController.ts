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
    const { name, description, isActive = true, isVisible = true, colors = [] } = req.body;

    // Find the default color from the provided colors
    const defaultColor = colors.find((color: any) => color.isDefault);

    // Create the product along with the colors in a single transaction
    const product = await prisma.product.create({
      data: {
        name,
        description,
        isActive,
        isVisible,
        colors: {
          create: colors.map((color: any) => ({
            name: color.name,
            thumbnail: color.thumbnail,
            images: color.images,
          })),
        },
        // If a default color is provided, set its ID as the defaultColorId
        ...(defaultColor && {
          defaultColor: {
            connectOrCreate: {
              where: { name: defaultColor.name },
              create: {
                name: defaultColor.name,
                thumbnail: defaultColor.thumbnail,
                images: defaultColor.images,
              },
            },
          },
        }),
      },
      include: { colors: true },
    });

    return res.status(200).json({ msg: "product created sucessfully" });
  }
  catch (ex) {
    console.log(ex);
    return res.status(500).json({ msg: 'Internal Server Error!!', log: 'Error createing Products' });
  }
}