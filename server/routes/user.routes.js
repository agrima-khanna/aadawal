require("dotenv").config({ path: "./config.env" });
let express = require("express"),
  // multer = require("multer"),
  mongoose = require("mongoose"),
  router = express.Router();
// const passport = require("passport");
// const { v4: uuidv4 } = require("uuid");
// uuidv4();
// const DIR = "./public/";

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, DIR);
//   },
//   filename: (req, file, cb) => {
//     const fileName = file.originalname.toLowerCase().split(" ").join("-");
//     cb(null, uuidv4() + "-" + fileName);
//   },
// });

// var upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/jpeg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
//     }
//   },
// });

// User model
let Gallery = require("../models/Gallery");

// router.post("/user-profile", upload.single("galleryImg"), (req, res, next) => {
//   // console.log(req.body);
//   const query = { year: req.body.year };

//   var images;
//   if (req.body.images === undefined) images = [];
//   else images = JSON.parse(req.body.images);

//   const url =
//     req.protocol + "://" + req.get("host") + "/public/" + req.file.filename;
//   const newObj = { _id: new mongoose.Types.ObjectId(), galleryImg: url };
//   // console.log(images);
//   // const user = new User
//   images.push(newObj);

//   const newData = { images: images };
//   Gallery.findOneAndUpdate(
//     query,
//     newData,
//     { upsert: true },
//     function (err, doc) {
//       // console.log(doc);
//       if (err)
//         return res.status(500).json({
//           error: err,
//         });
//       Gallery.find().then((data) => {
//         return res.status(200).json({
//           newObj: newObj,
//           data: data,
//         });
//       });
//     }
//   );
// });
router.post("/delete", (req, res, next) => {
  const query = { year: req.body.year };
  const newData = { images: req.body.images };

  Gallery.findOneAndUpdate(query, newData, function (err, doc) {
    // console.log(doc);
    if (err)
      return res.status(500).json({
        error: err,
      });
    return res.status(201).json({ data: doc });
  });
});
// router.get("/", (req, res, next) => {
//   Gallery.find().then((data) => {
//     // console.log(data);
//     res.status(200).json({
//       data: data,
//     });
//   });
// });

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET
);
let User = require("../models/Users");
router.post("/google", async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    User.find({ email: email }, function (err, doc) {
      if (doc.length == 0) res.json({ valid: false });
      else res.json({ valid: true, email: email });
    });
    res.status(201);
  } catch {
    res.json({ valid: "invalid" });
  }
});

module.exports = router;
