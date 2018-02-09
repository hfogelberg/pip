let api = (app, db, cloudinary) => {
  let { user } = require("./userApi");
  let { character } = require("./characterApi");
  let { settings } = require("./settingsApi");
  let { chapter } = require("./chapterApi");
  let { artwork } = require("./artApi");
  let { Chapter } = require("./models/chapterModel");
  let { Art } = require("./models/artModel.js");

  settings(app);
  user(app, db);
  character(app, db, cloudinary);
  chapter(app, db, cloudinary);
  artwork(app, db, cloudinary);

  app.get("/api/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ message: "API is alive" }));
  });
};

module.exports = { api };
