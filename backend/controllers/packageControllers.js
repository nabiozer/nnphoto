import asyncHandler from "express-async-handler";
import Package from "../models/PackageModel.js";

//  @desc Fetch all packages
//  @route Get /api/packages
//  @acces Public

const getPackages = asyncHandler(async (req, res) => {

  const PageSize = Number(req.query.PageSize) || 10;
  const PageNumber = Number(req.query.PageNumber) || 1;
  const skipNum = (PageNumber - 1) * PageSize;




  const photos =
    PageSize === -1
      ? await Package.find({})
      : await Package.find({}).skip(skipNum).limit(PageSize);

  const TotalCount = await Package.countDocuments({});
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);



  res.json({
    Data: photos,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });

  const packages = await Package.find({});
  res.json(packages);
});

//  @desc Fetch  packageDetail
//  @route Get /api/packages/:id
//  @acces Private
const getPackageById = asyncHandler(async (req, res) => {
  const packageDetail = await Package.findById(req.params.id);
  if (packageDetail) {
    res.json(packageDetail);
  } else {
    res.status(404);
    throw new Error("Package not found");
  }
});
//  @desc Delete packageDetail
//  @route Dekete /api/packages/:id
//  @acces Private/Admin
const deletePackage = asyncHandler(async (req, res) => {
  const packageDetail = await Package.findById(req.params.id);
  if (packageDetail) {
    await packageDetail.remove();
    res.json({ message: "packageDetail deleted" });
  } else {
    res.status(404);
    throw new Error("Package not found");
  }
});

//  @desc Create packageDetail
//  @route Create /api/packages/
//  @acces Private/Admin

const createPackage = asyncHandler(async (req, res) => {
  // const {price,date,description} = req.body

  const packageDetail = await Package.create(req.body);
  if (packageDetail) {
    res.status(201).json(packageDetail);
  } else {
    res.status(401);
    throw new Error("packageDetail not found");
  }
});

//  @desc Update Package
//  @route Put /api/packages/:id
//  @acces Private/Admin
const updatePackage = asyncHandler(async (req, res) => {
  const {
    packageName,
    packagePrice,
    albumDetail,
    familyDetail,
    posterDetail,
    canvasDetail,
    videoKlip,
    isDrone,
    isPlaceInc,
  } = req.body;

  const packageDetail = await Package.findById(req.params.id);
  if (packageDetail) {
    packageDetail.packageName = packageName || packageDetail.packageName;
    packageDetail.packagePrice = packagePrice || packageDetail.packagePrice;
    packageDetail.albumDetail = albumDetail || packageDetail.albumDetail;
    packageDetail.familyDetail = familyDetail || packageDetail.familyDetail;
    packageDetail.posterDetail = posterDetail || packageDetail.posterDetail;
    packageDetail.canvasDetail = canvasDetail || packageDetail.canvasDetail;
    packageDetail.videoKlip = videoKlip || packageDetail.videoKlip;
    packageDetail.isDrone = isDrone || packageDetail.isDrone;
    packageDetail.isPlaceInc = isPlaceInc || packageDetail.isPlaceInc;
    const updatedPackage = await packageDetail.save();
    res.json(updatedPackage);
  } else {
    res.status(404);
    throw new Error("Package not found");
  }
});

export {
  getPackages,
  getPackageById,
  deletePackage,
  createPackage,
  updatePackage,
};
