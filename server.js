const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  db = require("./api/connection"),
  { api } = require("./api/api"),
  cloudinary = require("cloudinary"),
  path = require("path"),
  settings = require("./settings.js");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/", express.static(__dirname + "/"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

cloudinary.config({
  cloud_name: settings.CLOUDINARY_CLOUD_NAME,
  api_key: settings.CLOUDINARY_API_KEY,
  api_secret: settings.CLOUDINARY_API_SECRET
});
api(app, db, cloudinary);

// Logging api calls
app.use((req, res, next) => {
  const now = new Date().toString();
  const logMsg = `${now}: ${req.method} ${req.url}\n`;
  console.log(logMsg);
  next();
});

let port = settings.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// For test
module.exports.app = app;
