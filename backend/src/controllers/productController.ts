import { Request, Response } from 'express';
//import Product from '../models/Product';
import db from '../models';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await db.Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
  console.log("Froduct fatch sucessfully");
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const products = await db.Product.create(req.body);
    res.status(201).json(products);
    console.log(products);
    
  } catch (err) {
    res.status(500).json(err);
  }

  console.log("product inserted");
};
