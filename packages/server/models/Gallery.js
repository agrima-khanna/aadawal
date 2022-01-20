const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gallerySchema = new Schema(
  {
    year: String,

    images: Array,
  },
  {
    collection: "Gallery",
  }
);

module.exports = mongoose.model("Gallery", gallerySchema);
