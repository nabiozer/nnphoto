import express from 'express';

import {protect,admin} from '../middleware/authMiddleware.js'
import { getExpenseById ,deleteExpense,getExpenses,updateExpense,createExpense} from '../controllers/expenseControllers.js';
const router = express.Router();



router.route('/').get(protect,admin,getExpenses).post(protect,admin,createExpense)
router.route('/:id')
.get(protect,admin,getExpenseById)
.delete(protect,admin,deleteExpense)
.put(protect,admin,updateExpense)

export default router;