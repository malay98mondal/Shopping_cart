import { Request, Response } from 'express';
import LoginHistory from '../models/loginHistory';

export const getloginHistory = async (req: Request, res: Response) => {
  try {
    const loginHistory = await LoginHistory.findAll();
    res.json(loginHistory);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch login_details' });
  }
};

export const createloginHistory = async (req: Request, res: Response) => {
  try {
    const loginHistories = await LoginHistory.create(req.body);
    res.status(201).json(loginHistories);
    console.log(loginHistories);
    
  } catch (err) {
    res.status(500).json(err);
  }

  console.log("logincreated created");
};
