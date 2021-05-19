import express from 'express';
import { edit, logout, remove, see } from '../controllers/userController';

const router = express.Router();

router.get('/logout', logout)
router.get('/edit', edit);
router.get('/remove', remove);
router.get('/:id', see)

export default router;