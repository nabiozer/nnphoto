import express from 'express';

import {protect,admin} from '../middleware/authMiddleware.js'
import { getOverview } from '../controllers/overviewContoller.js';
const router = express.Router();



router.route('/').get(protect,admin,getOverview)

export default router;