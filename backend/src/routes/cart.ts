import { Router } from 'express';
import { createcart } from '../controllers/cartController';


const router = Router();

router.post('/', createcart);

export default router;
