import express from 'express';
import { join, login } from '../controllers/userController';
import { trending } from '../controllers/videoController';

const router = express.Router();

router.get('/', trending);
router.get('/join', join);
router.get('/login', login);

export default router;