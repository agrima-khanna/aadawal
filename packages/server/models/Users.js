const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: String,
  },
  {
    collection: "Users",
  }
);

module.exports = mongoose.model("Users", UserSchema);
