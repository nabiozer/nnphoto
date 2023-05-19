import express from 'express';
import {getMessages,getMessageById,deleteMessage,updateMessage,createMessage} from '../controllers/messageControllers.js'
import {protect,admin} from '../middleware/authMiddleware.js'
const router = express.Router();



router.route('/').get(protect,admin,getMessages).post(createMessage)
router.route('/:id')
.get(protect,admin,getMessageById)
.delete(protect,admin,deleteMessage)
.put(protect,admin,updateMessage)

export default router;