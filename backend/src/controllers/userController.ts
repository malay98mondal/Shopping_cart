import {Request,Response } from 'express';
//import User from '../models/User';
import db from '../models';

export const createUser = async (req: Request, res: Response) => {
    try {
      const user = await db.User.create(req.body);
      res.status(201).json(user);
      console.log(user);
      
      
    } catch (err) {
      res.status(500).json(err);
    }
    
  
    console.log("user created!");
    
  };