const { Character } = require("../models/characterModel"),
  multer = require("multer"),
  upload = multer({ dest: "uploads/" });

let character = (app, db, cloudinary) => {
  // POST - create character
  // NOTE: During dev no sign up

  app.get("/api/characters", (req, res) => {
    Character.find()
      .then(characters => {
        res.send({ message: "OK", characters });
      })
      .catch(err => {
        res.status(404).send(err);
      });
  });

  app.post("/api/character", upload.single("image"), (req, res, next) => {
    console.log(req.body);
    const source = `./uploads/${req.file.filename}`;

    cloudinary.uploader.upload(source, function(result) {
      if (result.error) {
        console.log("Cloudinary upload error", result);
        res.status(500).send();
      }

      console.log("Cloudinary result", result);

      const fileName = result.public_id + ".jpg";

      const character = new Character({
        name: req.body.name,
        description: req.body.description,
        image: fileName
      });

      character
        .save()
        .then(c => {
          console.log("Character saved");
          res.json({ message: "Character saved", character: character });
        })
        .catch(e => {
          console.log(e);
          res.status(500).send({ message: "Error saving character" });
        });
    });
  });
};

module.exports = { character };
