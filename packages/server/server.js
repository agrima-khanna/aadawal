if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: "./config.env" });
const Db = process.env.ATLAS_URI;
const port = process.env.PORT || 3000;
let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser");

const api = require("./routes/user.routes");

// const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const methodOverride = require("method-override");
// const config = require("./config");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const crypto = require("crypto");
// const cors = require("cors");

const imageRouter = require("./routes/image");
mongoose.Promise = global.Promise;
mongoose
  .connect(Db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected");
    },
    (error) => {
      console.log("Database could not be connected: " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");
// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/public/index.html"));
// });

// app.use(express.static(path.join(__dirname, "../client/build")));
app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
// const mongoose = require("mongoose");
// mongoose.Promise = require("bluebird");

// const url = config.mongoURI;
// const connect = mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// connect to the database
// connect.then(
//   () => {
//     console.log("Connected to database: GridApp");
//   },
//   (err) => console.log(err)
// );

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// app.use("/public", express.static("public"));

app.use("/gallery/api", api);
// app.use(require("./routes/index"));
// app.use("/auth", require("./routes/auth"));

/* 
    GridFs Configuration
*/

// create storage engine
const storage = new GridFsStorage({
  url: Db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

const upload = multer({ storage });

app.use("/gallery/image", imageRouter(upload));

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});

app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
