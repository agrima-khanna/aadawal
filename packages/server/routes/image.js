const express = require("express");
const imageRouter = express.Router();
const mongoose = require("mongoose");
const Image = require("../models/Image");
var Grid = require("gridfs-stream");
const fs = require("fs");
Grid.mongo = mongoose.mongo;
// var gfs = new Grid(mongoose.connection.db);
module.exports = (upload) => {
  const url = process.env.ATLAS_URI;

  const connect = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let gfs;

  connect.once("open", () => {
    // initialize stream
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
      bucketName: "uploads",
    });
  });

  /*
        POST: Upload multiple files upto 3
    */
  imageRouter.post("/upload", upload.array("galleryImg"), (req, res, next) => {
    console.log(req.files);
    const arr = req.files;
    var cnt = 0;
    arr.map((file) => {
      let newImage = new Image({
        filename: file.filename,
        fileId: file.id,
        year: req.body.year,
      });

      newImage
        .save()
        .then((image) => {
          cnt++;
          if (cnt == arr.length) {
            res.status(200).json({
              success: true,
            });
          }
        })
        .catch((err) => res.status(500).json(err));
    });
  });

  /*
        GET: Fetches all the files in the uploads collection
    */
  imageRouter.route("/display/:year").post((req, res, next) => {
    var images = [];
    console.log(req);
    Image.find({ year: req.params.year }, function (err, docs) {
      console.log(docs);
      docs.map((file) => {
        images.push({
          filename: file.filename,
          id: file.fileId,
        });
      });
      res.status(200).json({
        success: true,
        images: images,
        year: req.params.year,
      });
    });
  });
  /* 
        GET: Fetches a particular image and render on browser
    */
  imageRouter.route("/:filename").get((req, res, next) => {
    gfs.find({ filename: req.params.filename }).toArray((err, files) => {
      // render image to browser
      gfs.openDownloadStreamByName(req.params.filename).pipe(res);
    });
  });
  /*
        DELETE: Delete a particular file by an ID
    */
  imageRouter.route("/delete/:id").post((req, res, next) => {
    console.log(req.params.id);
    gfs.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
      if (err) {
        // console.log("helloooooo");
        return res.status(404).json({ err: err });
      }
      Image.findOne({ fileId: req.params.id })
        .then((image) => {
          if (image) {
            Image.deleteOne({ fileId: req.params.id })
              .then(() => {
                return res.status(200).json({
                  success: true,
                });
              })
              .catch((err) => {
                return res.status(500).json(err);
              });
          } else {
            res.status(200).json({
              success: false,
            });
          }
        })
        .catch((err) => res.status(500).json(err));
    });
  });

  return imageRouter;
};
