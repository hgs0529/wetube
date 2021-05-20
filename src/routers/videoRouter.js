import express from 'express';
import { deleteVideo, getEdit, see, postEdit, getUpload, postUpload} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', see)
videoRouter.route('/:id(\\d+)/edit').get(getEdit).post(postEdit)
videoRouter.route('/upload').get(getUpload).post(postUpload)

export default videoRouter;