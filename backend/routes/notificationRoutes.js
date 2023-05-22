import express from 'express';
import {getNotifications,getNotificationById,deleteNotification,updateNotification,createNotification} from '../controllers/notificationControllers.js'
import {protect,admin} from '../middleware/authMiddleware.js'
const router = express.Router();



router.route('/').get(protect,admin,getNotifications).post(protect,createNotification)
router.route('/:id')
.get(protect,admin,getNotificationById)
.delete(protect,admin,deleteNotification)
.put(protect,admin,updateNotification)

export default router;