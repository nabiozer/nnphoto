// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import express from "express";
import asyncHandler from "express-async-handler";
import multer from "multer";
import Photo from "../models/PhotoModel.js";
import User from "../models/UserModel.js";
import { getObjectSignedUrl, uploadFile } from "../utils/s3.js";

const router = express.Router();

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[0] === "image" ||
    file.mimetype === "application/zip" ||
    file.mimetype === "video/mp4"
  ) {
    cb(null, true);
  } else {
    cb(new Error("file not correct type"), false);
  }
};
//limits: {fileSize:1000 -> 1kb}
const upload = multer({ storage });

// put user
router.put("/user/:id", upload.array("file"), async (req, res) => {
  const file = req.files[0];
  
 
  const result = await uploadFile(
    file?.buffer,
    file?.originalname,
    file?.mimetype
  );
  console.log(file)

  if (result.$metadata.httpStatusCode === 200) {
    res.json(file.originalname)
    
  }

});

router.put("/photos/:id", upload.array("file"), async (req, res) => {
  const file = req.files[0];
  
 
  const result = await uploadFile(
    file?.buffer,
    file?.originalname,
    file?.mimetype
  );

  if (result.$metadata.httpStatusCode === 200) {
    res.json(file.originalname)
    
  }

});

const updateUserPhotos = asyncHandler(async (req, res) => {
  await uploadFile(fileBuffer, imageName, file.mimetype);

  const user = await User.findById(req.params.id);
  if (user) {
    user.photos = req.body.photos || user.photos;

    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
  res.send("Succes");
});

// router.put("/:id", upload.array('file'),updateUserPhotos);

export default router;

// router.post('/', upload.array('file'), async(req, res) => {
//   const file = req.files[0]
//   const result = await s3Uploadv2(file);

//   res.send(result.Location)
// })

// const generateFileName = (bytes = 32) =>
//   crypto.randomBytes(bytes).toString("hex");

// export async function getPosts() {
//   const posts = await prisma.posts.findMany({ orderBy: [{ created: "desc" }] });
//   for (let post of posts) {
//     post.imageUrl = await getObjectSignedUrl(post.imageName);
//   }
//   return posts;
// }

// export async function createPost(file, caption) {
//   const imageName = generateFileName();

//   const fileBuffer = await sharp(file.buffer)
//     .resize({ height: 1920, width: 1080, fit: "contain" })
//     .toBuffer();

//   await uploadFile(fileBuffer, imageName, file.mimetype);

//   const post = await prisma.posts.create({
//     data: {
//       imageName,
//       caption,
//     },
//   });

//   return post;
// }

// export async function deletePost(id) {
//   const post = await prisma.posts.findUnique({ where: { id } });

//   await deleteFile(post.imageName);

//   await prisma.posts.delete({ where: { id: post.id } });

//   return post;
// }
