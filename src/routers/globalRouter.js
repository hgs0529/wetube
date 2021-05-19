import express from 'express';
import { join, login } from '../controllers/userController';
import { search, trending } from '../controllers/videoController';

const router = express.Router();

router.get('/', trending);
router.get('/join', join);
router.get('/login', login);
router.get('/search', search);

export default router;