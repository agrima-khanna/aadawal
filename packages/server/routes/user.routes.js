require("dotenv").config({ path: "./config.env" });
let express = require("express"),
  // multer = require("multer"),
  mongoose = require("mongoose"),
  router = express.Router();

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
      if (doc.length == 0)
        res.json({ valid: false, message: "User not registered!" });
      else res.json({ valid: true, email: email });
    });
    res.status(201);
  } catch {
    res.json({ valid: false, message: "Unable to login!" });
  }
});

module.exports = router;
