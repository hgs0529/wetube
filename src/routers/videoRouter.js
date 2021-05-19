import express from 'express';
import { deleteVideo, edit, upload, see} from '../controllers/videoController';

const router = express.Router();

router.get('/upload', upload)
router.get('/:id(\\d+)', see)
router.get('/:id(\\d+)/edit', edit)
router.get('/:id(\\d+)/delete', deleteVideo)

export default router;