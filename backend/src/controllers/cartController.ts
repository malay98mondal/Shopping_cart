import { Request, Response } from 'express';
//import Product from '../models/Product';
import db from '../models';

export const getcarts = async (req: Request, res: Response) => {
  try {
    const products = await db.Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
};

export const createcart = async (req: Request, res: Response) => {
  try {
    const product = await db.Product.create(req.body);
    res.status(201).json(product);
    console.log(product);
    
  } catch (err) {
    res.status(500).json(err);
  }

  console.log("product cart");
};
