import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/UserModel.js";
import { getObjectSignedUrl } from "../utils/s3.js";

//  @desc Auth user & get TOKEN
//  @route POST /api/users/login
//  @acces Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      phoneNumber: user.phoneNumber,
      reservationInfo: user.reservationInfo,
      chosen: user.chosen,
      video: user.video,
      photos: user.photos,
      status: user.status,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    console.log("res");
    throw new Error("Inlavid email or password");
  }
});

//  @desc Get user profile
//  @route GET /api/users/profile
//  @acces Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const photosWithUrl = user?.photos ? await getObjectSignedUrl(user?.photos) : '';
    const videosWithUrl = user?.video ? await getObjectSignedUrl(user?.video) : '';

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      address: user.address,
      phoneNumber: user.phoneNumber,
      reservationInfo: user.reservationInfo,
      chosen: user.chosen,
      video: user.video,
      photos: user.photos,
      status: user.status,
      photosURL: photosWithUrl ,
      videoURL: videosWithUrl,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
//  @desc Get user profile
//  @route PUT /api/users/profile
//  @acces Private

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }
    // const reservationInfo = {
    //   advancePayment:
    //     req.body.advancePayment || user.reservationInfo.advancePayment,
    //   date: req.body.date || user.reservationInfo.date,
    //   album: req.body.album || user.reservationInfo.album,
    //   packageDetails:
    //     req.body.packageDetails || user.reservationInfo.packageDetails,
    //   packagePrice: req.body.packagePrice || user.reservationInfo.packagePrice,
    //   place: req.body.place || user.reservationInfo.place,
    //   isPoster: req.body.isPoster || user.reservationInfo.isPoster,
    // };

    const chosen = {
      album: {
        albumName: req.body.albumName || user.chosen.album.albumName,
        colorCode: req.body.colorCode || user.chosen.album.colorCode,
      },
      photosChosen: req.body.photosChosen || user.chosen.photosChosen,
      poster: req.body.poster || user.chosen.poster,
      cover: req.body.cover || user.chosen.cover,
      coverText: req.body.coverText || user.chosen.coverText,
      isChoiced: req.body.isChoiced || user.reservationInfo.isChoiced,
    };
    // user.address = req.body.address || user.address;
    // user.phone = req.body.phone || user.phone;
    // user.reservationInfo = reservationInfo;
    user.chosen = chosen;
    // user.video = req.body.video || user.video;
    // user.photos = req.body.photos || user.photos;

    user.status = req.body.status || user.status;
    // user.album = req.body.album || user.album;
    // user.isDone = req.body.isDone || user.isDone;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      address: user.address,
      phoneNumber: user.phoneNumber,
      reservationInfo: updatedUser.reservationInfo,
      chosen: updatedUser.chosen,
      video: updatedUser.video,
      photos: updatedUser.photos,
      status: updatedUser.status,
      isDone: updatedUser.isDone,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.send("Succes");
});
//  @desc   Register a new User
//  @route POST /api/users/login
//  @acces Public

const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    address,
    phoneNumber,
    date,
    place,
    packagePrice,
    packageDetails,
    advancePayment,
    albumPack,
    posterDetail,
    canvasDetail,
    pvc,
    box,
    wood,
  } = req.body;
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    address,
    phoneNumber,
    reservationInfo: {
      album: {
        albumPack,
        posterDetail,
        canvasDetail,
        pvc,
        box,
        wood,
      },
      date,
      place,
      packagePrice,
      packageDetails,
      advancePayment,
    },
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      phonenNumber: user.phonenNumber,
      address: user.address,
      phoneNumber: user.phoneNumber,
      reservationInfo: user.reservationInfo,
      chosen: user.chosen,
      video: user.video,
      photos: user.photos,
      status: user.status,
   
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("User not found");
  }
});

//  @desc Get users
//  @route GET /api/users
//  @acces Private Admin

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json(users);
});




const getUsersPagination = asyncHandler(async (req, res) => {

  const PageSize = Number(req.query.PageSize);
  const PageNumber = Number(req.query.PageNumber) || 1;
  const skipNum = (PageNumber - 1) * PageSize;

  const users = await User.find({}).skip(skipNum).limit(PageSize);

  const TotalCount = await User.countDocuments({});
  const TotalPages = PageSize === -1 ? 1 : Math.ceil(TotalCount / PageSize);

  res.json({
    Data: users,
    TotalCount,
    PageNumber,
    PageSize,
    TotalPages,
  });
});


//  @desc Delete user
//  @route GET /api/users:id
//  @acces Private Admin

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "user removed" });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

//  @desc Get User by ID
//  @route GET /api/users:id
//  @acces Private Admin

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (user) {
    const photosWithUrl = user.photos
      ? await getObjectSignedUrl(user?.photos)
      : null;
    const videosWithUrl = user.video
      ? await getObjectSignedUrl(user?.video)
      : null;

    res.json({
      ...user?.toObject(),
      photosURL: photosWithUrl,
      videoURL: videosWithUrl,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});
//  @desc Update User profile
//  @route PUT /api/users/:id
//  @acces Private admin

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }


    console.log(req.body, user.reservationInfo.album)
    const albumInfo = {
     
        albumPack: req.body.albumPack || user.reservationInfo.album.albumPack,
        posterDetail:
          req.body.posterDetail || user.reservationInfo.album.posterDetail,
        canvasDetail:
          req.body.canvasDetail || user.reservationInfo.album.canvasDetail,
        pvc: req.body.pvc ,
        box: req.body.box ,
        wood: req.body.wood ,
   
    };

    const reservationInfo = {
      album: albumInfo,
      advancePayment:
        req.body.advancePayment || user.reservationInfo.advancePayment,
      date: req.body.date || user.reservationInfo.date,
      packageDetails:
        req.body.packageDetails || user.reservationInfo.packageDetails,
      packagePrice: req.body.packagePrice || user.reservationInfo.packagePrice,
      place: req.body.place || user.reservationInfo.place,
      isPoster: req.body.isPoster || user.reservationInfo.isPoster,
    };

    const chosen = {
      album: {
        albumName: req.body.albumName || user.chosen.album.albumName,
        colorCode: req.body.colorCode || user.chosen.album.colorCode,
      },
      photosChosen: req.body.photosChosen || user.chosen.photosChosen,
      poster: req.body.poster || user.chosen.poster,
      cover: req.body.cover || user.chosen.cover,
      coverText: req.body.coverText || user.chosen.coverText,
      isChoiced: req.body.isChoiced,
    };

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.reservationInfo = reservationInfo;
    user.chosen = chosen;
    user.video = req.body.video || user.video;
    user.photos = req.body.photos || user.photos;
    user.status = req.body.status || user.status;


    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.send("Succes");
});

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  getUsersPagination,
  deleteUser,
  updateUser,
  getUserById,
};
