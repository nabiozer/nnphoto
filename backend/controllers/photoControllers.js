import asyncHandler from "express-async-handler";
import Photo from "../models/PhotoModel.js";
import { getObjectSignedUrl } from "../utils/s3.js";

//  @desc Fetch home photos
//  @route Get /api/photos/home
//  @acces Public

const getPhotosWithUrl = asyncHandler(async (req, res) => {
  const PageSize = req.query.PageSize | -1;
  const PageNumber = PageSize === -1 ? 0 : req.query.PageNumber;
  const skipNum = (PageNumber - 1) * PageSize;

  const filterProperty = req?.url?.split('/')?.slice(-1)[0];


  const photos =
    PageSize === -1
      ? await Photo.find({property:filterProperty})
      : await Photo.find({property:filterProperty}).skip(skipNum).limit(PageSize);

  const TotalCount = await Photo.countDocuments({property:filterProperty});
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);

  const photosWithURL = [];

  for (let photo of photos) {
    if (photo.image) {
      const imageURL = await getObjectSignedUrl(photo?.image);

      photosWithURL.push({ ...photo._doc, imageURL: imageURL });
    } else {
      photosWithURL.push(photo);
    }
  }

  res.json({
    Data: photosWithURL,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });
});


const getPhotosPagination = asyncHandler(async (req, res) => {

  const PageSize = Number(req.query.PageSize) ;
  const PageNumber = Number(req.query.PageNumber) || 1;
  const skipNum = (PageNumber - 1) * PageSize;
  const propertyFilter = (req.query.Property)
  
  const photos = await Photo.find(propertyFilter ? {property:propertyFilter} :{}).skip(skipNum).limit(PageSize);

  const TotalCount = await Photo.countDocuments(propertyFilter ? {property:propertyFilter} :{});
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);

  const photosWithURL = [];

  for (let photo of photos) {
    if (photo.image) {
      const imageURL = await getObjectSignedUrl(photo?.image);

      photosWithURL.push({ ...photo._doc, imageURL: imageURL });
    } else {
      photosWithURL.push(photo);
    }
  }

  res.json({
    Data: photosWithURL,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });
});


//  @desc Fetch  photo
//  @route Get /api/photos/:id
//  @acces Public
const getPhotoById = asyncHandler(async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  if (photo) {
    const photoWithUrl = await getObjectSignedUrl(photo?.image);
    const newPhoto = {
      ...photo.toObject(),
      imageURL: photoWithUrl || photo._doc.image,
    };

    res.json(newPhoto);
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

//  @desc Delete Photo
//  @route Dekete /api/photos/:id
//  @acces Private/Admin
const deletePhoto = asyncHandler(async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  if (photo) {
    await photo.remove();
    res.json({ message: "photo deleted" });
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

//  @desc Create Photo
//  @route Create /api/photos/
//  @acces Private/Admin
const createPhoto = asyncHandler(async (req, res) => {
  const photo = new Photo({
    image: req.body.image,
    description: req.body.description,
    property: req.body.property,
    src: req.body.src,
    colorCodes: req.body.colorCodes,
  });
  const createdPhoto = await photo.save();
  res.status(201).json(createdPhoto);
});

//  @desc Update Photo
//  @route Put /api/photos/:id
//  @acces Private/Admin
const updatePhoto = asyncHandler(async (req, res) => {
  const {
    description,
    image,
    property,
    src,
    packageName,
    packagePrice,
    colorCodes,
  } = req.body;
  const photo = await Photo.findById(req.params.id);
  if (photo) {
    photo.image = image || photo.image;
    photo.description = description || photo.description;
    photo.property = property || photo.property;
    photo.src = src || photo.src;
    photo.packageName = packageName || photo.packageName;
    photo.packagePrice = packagePrice || photo.packagePrice;
    photo.colorCodes = colorCodes || photo.colorCodes;

    const updatedPhoto = await photo.save();
    res.json(updatedPhoto);
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

export { getPhotoById, deletePhoto, createPhoto, updatePhoto,getPhotosWithUrl ,getPhotosPagination};
