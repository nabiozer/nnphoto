import express from 'express';
import { createPhoto, deletePhoto, getPhotoById, getPhotos, getPhotosWithUrl, updatePhoto } from '../controllers/photoControllers.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();



router.route('/').get(getPhotos).post(protect,admin,createPhoto)
router.route('/home').get(getPhotosWithUrl)
router.route('/gallery').get(getPhotosWithUrl)
router.route('/video').get(getPhotosWithUrl)
router.route('/album').get(getPhotosWithUrl)
router.route('/:id')
.get(getPhotoById)
.delete(protect,admin,deletePhoto)
.put(protect,admin,updatePhoto)







export default router;