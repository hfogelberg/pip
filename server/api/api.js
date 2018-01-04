let api = (app, db, cloudinary) => {
  let { user } = require("./userApi");
  let { character } = require("./characterApi");

  user(app, db);
  character(app, db, cloudinary);

  app.get("/api/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ message: "API is alive" }));
  });
};

module.exports = { api };
