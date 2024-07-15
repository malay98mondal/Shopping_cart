import { Router } from 'express';
import {getloginHistory, createloginHistory} from '../controllers/LoginHistoryController';

const router = Router();

router.get('/', getloginHistory);
router.post('/', createloginHistory);


export default router;
