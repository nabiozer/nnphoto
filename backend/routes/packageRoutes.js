import express from 'express';
import {getPackages,getPackageById,deletePackage,updatePackage,createPackage} from '../controllers/packageControllers.js'
import {protect,admin} from '../middleware/authMiddleware.js'
const router = express.Router();



router.route('/').get(protect,admin,getPackages).post(protect,admin,createPackage)
router.route('/:id')
.get(protect,admin,getPackageById)
.delete(protect,admin,deletePackage)
.put(protect,admin,updatePackage)

export default router;